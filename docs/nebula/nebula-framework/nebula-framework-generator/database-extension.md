# 数据库扩展教程

## 针对数据库扩展

要扩展 Nebula Framework Generator 插件以支持新的数据库，您首先需要实现 `DatabaseQueryStrategy` 接口中的 `buildQuery` 方法。这个方法负责返回一个查询语句，用以获取数据库表的字段信息。以下是您需要获取的关键字段信息：

- `COLUMN_NAME`：列的名称。
- `DATA_TYPE`：列的数据类型。
- `IS_NULLABLE`：列是否可以为 NULL。
- `COLUMN_DEFAULT`：列的默认值。
- `COLUMN_COMMENT AS DESCRIPTION`：列的注释，作为描述信息。
- `IS_PRIMARY_KEY`：列是否是主键。

### 实现 `buildQuery` 方法

以下是 `buildQuery` 方法的一个基本示例，以及对每个字段的解释说明：

```java
public class CustomDatabaseQueryStrategy implements DatabaseQueryStrategy {
    @Override
    public String buildQuery(String tableName) {
        // 构建查询语句，获取表字段信息
        return "SELECT " +
               "COLUMN_NAME, " +
               "DATA_TYPE, " +
               "IS_NULLABLE, " +
               "COLUMN_DEFAULT, " +
               "COLUMN_COMMENT AS DESCRIPTION, " +
               "CASE WHEN COLUMN_NAME IN (SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME = '" + tableName + "' AND CONSTRAINT_NAME = 'PRIMARY') THEN 'YES' ELSE 'NO' END AS IS_PRIMARY_KEY " +
               "FROM INFORMATION_SCHEMA.COLUMNS " +
               "WHERE TABLE_NAME = '" + tableName + "'";
    }
}
```

### 字段解释

  `COLUMN_NAME`：这是数据库表中每个列的名称。

  `DATA_TYPE`：这表示每个列的数据类型，例如 `VARCHAR`, `INT`, `DATE` 等。

  `IS_NULLABLE`：这表明列是否可以包含 NULL 值，通常返回 YES 或 NO。

  `COLUMN_DEFAULT`：这是列的默认值，如果列没有默认值，则此字段可能为空。

  `COLUMN_COMMENT AS DESCRIPTION`：这是列的注释，通常用于描述列的用途或内容，这里我们将其重命名为 `DESCRIPTION` 以便于理解。

  `IS_PRIMARY_KEY`：这表明列是否是表的主键，如果是主键列，则返回 `YES`，否则返回 `NO`。

## 注册自定义数据库扩展到工厂类

要将自定义数据库扩展注册到工厂类中，您需要修改 `DatabaseQueryStrategyFactory` 类，以便它能够识别并返回您的自定义 `DatabaseQueryStrategy` 实现。以下是如何根据驱动包名中是否包含对应数据库名称来判断并注册新策略的示例：

### 修改 `DatabaseQueryStrategyFactory` 类

```java
public class DatabaseQueryStrategyFactory {
    public static DatabaseQueryStrategy createStrategy(String driver) {
        if (driver.contains("mysql")) {
            return new MySQLQueryStrategy();
        } else if (driver.contains("oracle")) {
            return new OracleQueryStrategy();
        } else if (driver.contains("sqlserver")) {
            return new SQLServerQueryStrategy();
        } else if (driver.contains("custom")) { // 假设您的自定义数据库驱动包名中包含"custom"
            return new CustomDatabaseQueryStrategy(); // 返回您的自定义策略
        } else {
            throw new IllegalArgumentException("Unsupported database driver: " + driver);
        }
    }
}
```

## 自定义数据库类型到Java类型的映射

为了处理查询出来的字段类型与Java中的类型映射关系，您需要实现 `DbTypeMapper` 接口。以下是一个自定义的实现示例，假设您的自定义数据库类型与Java类型的映射关系如下：

### 实现 `CustomDbTypeMapper` 类

```java
package com.neegix.template.strategy;

import java.sql.Timestamp;
import java.util.Date;

/**
 * 自定义数据库类型到Java类型的映射器。
 */
public class CustomDbTypeMapper implements DbTypeMapper {

    @Override
    public String mapToJavaType(String dbType) {
        return getJavaClass(dbType).getSimpleName();
    }

    @Override
    public String getFullyQualifiedJavaType(String dbType) {
        return getJavaClass(dbType).getName();
    }

    @Override
    public Class<?> getJavaClass(String dbType) {
        return switch (dbType.toUpperCase()) {
            // 假设以下是您的自定义数据库类型到Java类型的映射关系
            case "CUSTOM_VARCHAR", "CUSTOM_CHAR", "CUSTOM_TEXT" -> String.class;
            case "CUSTOM_INT", "CUSTOM_INTEGER" -> Integer.class;
            case "CUSTOM_BIGINT" -> Long.class;
            case "CUSTOM_FLOAT" -> Float.class;
            case "CUSTOM_DOUBLE" -> Double.class;
            case "CUSTOM_BOOLEAN", "CUSTOM_TINYINT" -> Boolean.class;
            case "CUSTOM_DATE" -> Date.class;
            case "CUSTOM_TIMESTAMP", "CUSTOM_DATETIME" -> Timestamp.class;
            default -> Object.class;
        };
    }
}
```

### 说明
  `mapToJavaType` 方法：将数据库类型映射到`Java类型`的简单名称。

  `getFullyQualifiedJavaType` 方法：将数据库类型映射到`Java类型`的完全限定名称。

  `getJavaClass` 方法：根据数据库类型返回对应的`Java Class` 对象。这里使用了 `switch` 表达式来处理不同的数据库类型，并返回相应的`Java类型`。

请根据您的实际数据库类型和`Java类型`的映射关系，调整上述代码中的 `case` 语句。这个自定义的 `CustomDbTypeMapper` 类将帮助您将数据库字段类型正确地映射到`Java类型`，以便 `Nebula Framework Generator` 插件能够生成正确的代码。

## 注册自定义DbTypeMapper到DbTypeStrategyFactory

为了将自定义的数据库类型到Java类型的映射器（`DbTypeMapper`）注册到工厂类中，您需要修改 `DbTypeStrategyFactory` 类，以便它能够识别并返回您的自定义 `DbTypeMapper` 实现。以下是如何根据驱动名称注册新映射器的示例：

### 修改 `DbTypeStrategyFactory` 类

```java
package com.neegix.template.factory;

import com.neegix.template.strategy.DbTypeMapper;
import com.neegix.template.strategy.MySqlDbTypeMapper;
import com.neegix.template.strategy.OracleDbTypeMapper;
import com.neegix.template.strategy.SqlServerDbTypeMapper;
import com.neegix.template.strategy.CustomDbTypeMapper; // 导入自定义DbTypeMapper

/**
 * 数据库类型到Java类型映射器的工厂类。
 */
public class DbTypeStrategyFactory {
    public static DbTypeMapper createStrategy(String driver) {
        if (driver.contains("mysql")) {
            return new MySqlDbTypeMapper();
        } else if (driver.contains("oracle")) {
            return new OracleDbTypeMapper();
        } else if (driver.contains("sqlserver")) {
            return new SqlServerDbTypeMapper();
        } else if (driver.contains("custom")) { // 假设您的自定义数据库驱动包名中包含"custom"
            return new CustomDbTypeMapper(); // 返回您的自定义DbTypeMapper
        } else {
            throw new IllegalArgumentException("Unsupported db type mapper: " + driver);
        }
    }
}
```

### 说明

  导入自定义 `DbTypeMapper`：在工厂类顶部，添加导入语句以包含您的自定义 `DbTypeMapper` 类。

  添加新的条件分支：在 `createStrategy` 方法中，添加一个新的 `if` 或 `else if` 分支，检查驱动名称中是否包含您自定义数据库的特定关键字（例如，"`custom`"）。

  返回自定义 `DbTypeMapper`：在新的分支中，返回您的自定义 `DbTypeMapper` 实现的实例。

  异常处理：如果驱动名称不匹配任何已知数据库，方法将抛出一个 `IllegalArgumentException`，指示不支持的数据库类型映射器。

通过这种方式，您可以轻松地将新的数据库类型映射器集成到现有的工厂类中，确保 `Nebula Framework Generator` 插件能够根据驱动名称动态选择正确的数据库类型映射器。

## 数据库扩展教程结束语

至此，我们完成了针对 Nebula Framework Generator 插件的数据库扩展的基本方法。通过以下步骤，我们成功地为插件添加了对新数据库的支持：

1. **实现 `DatabaseQueryStrategy` 接口**：我们创建了一个自定义的 `DatabaseQueryStrategy` 实现，用于构建查询数据库表字段信息的SQL语句，并获取关键字段信息。

2. **注册自定义数据库查询策略**：我们将自定义的数据库查询策略注册到了 `DatabaseQueryStrategyFactory` 工厂类中，这样插件就能够根据驱动名称识别并使用我们的自定义策略。

3. **实现 `DbTypeMapper` 接口**：我们创建了一个自定义的 `DbTypeMapper` 实现，用于将数据库字段类型映射到Java类型。

4. **注册自定义 `DbTypeMapper`**：我们将自定义的 `DbTypeMapper` 注册到了 `DbTypeStrategyFactory` 工厂类中，确保插件能够根据驱动名称动态选择正确的数据库类型映射器。

通过这些步骤，Nebula Framework Generator 插件现在能够支持新的数据库，并且能够根据新的数据库类型生成正确的Java代码。这不仅提高了插件的灵活性和可扩展性，而且使得插件能够适应更多的开发场景。

希望这个教程能够帮助您理解和实现数据库扩展。如果您有任何疑问或需要进一步的帮助，请随时联系我们。

--- 
**结束**