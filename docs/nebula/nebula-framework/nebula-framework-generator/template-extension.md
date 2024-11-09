# 代码模板扩展教程

## 实现自定义代码模板

为了扩展 Nebula Framework Generator 插件的代码模板功能，您需要实现 `AbstractTemplateFileGenerator` 抽象类。以下是一个自定义代码模板实现的示例：

### 实现自定义模板类

```java
package com.neegix.template.handler;

import com.neegix.template.TemplateTable;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

/**
 * 自定义代码模板生成器。
 */
public class CustomTemplateFile extends AbstractTemplateFileGenerator {
    public CustomTemplateFile(String outputBaseDir) {
        super(outputBaseDir);
    }

    @Override
    protected Path getTemplateDirPath() {
        // 返回自定义模板目录的路径
        return Paths.get(File.separator + "templates" + File.separator + "custom");
    }

    @Override
    protected Map<String, Object> getDataModel(TemplateTable templateTable) {
        // 创建数据模型，用于传递给模板引擎
        Map<String, Object> dataModel = new HashMap<>();
        dataModel.put("templateTable", templateTable);
        // 可以根据需要添加更多数据到 dataModel
        return dataModel;
    }
}
```

# 代码模板扩展教程：构建自定义模板

## 在 `resources/templates` 目录下构建自定义模板

为了使用 Freemarker (FTL) 创建自定义的代码模板，您需要在项目的 `resources/templates` 目录下创建相应的模板文件。以下是具体步骤和实现指南：

### 1. 创建模板目录

在 `resources` 目录下创建一个名为 `templates` 的子目录，用于存放所有的模板文件。例如，如果您的自定义模板是为某个特定的架构设计的，您可以创建如下目录结构：

### 目录说明

- **`src`**：源代码根目录。
- **`main`**：存放主要的源代码。
- **`resources`**：存放资源文件，如配置文件、模板文件等。
- **`templates`**：存放所有模板文件的目录。
  - **`custom`**：存放自定义模板文件的目录。
    - **`Model.ftl`**：用于生成数据模型的模板文件。
    - **`Repository.ftl`**：用于生成数据访问层代码的模板文件。
    - **`Service.ftl`**：用于生成业务逻辑层代码的模板文件。
    - **`Controller.ftl`**：用于生成控制器层代码的模板文件。

请确保您的 `CustomTemplateFile` 类正确指向了这些模板文件的路径，并且您的数据模型 `getDataModel` 方法提供了所有必要的数据。

### 2. 编写 FTL 模板内容

在每个 FTL 文件中，您可以使用 Freemarker 的语法来定义模板。以下是一个简单的 `Model.ftl` 模板示例：

```ftl
package ${package};

public class ${className} {
    <#list columns as column>
    private ${column.javaType} ${column.fieldName};
    </#list>

    <#list columns as column>
    public ${column.javaType} get${column.fieldNameFirstUpper()}() {
        return this.${column.fieldName};
    }

    public void set${column.fieldNameFirstUpper()}(${column.javaType} ${column.fieldName}) {
        this.${column.fieldName} = ${column.fieldName};
    }
    </#list>
}
```

在这个模板中，${package} 是类的包名，${className} 是类的名称，${columns} 是一个包含列信息的列表，${column.javaType} 和 ${column.fieldName} 分别是列的Java类型和字段名。

### 3. 集成模板
确保您的 CustomTemplateFile 类正确指向了这些模板文件的路径，并且您的数据模型 getDataModel 方法提供了所有必要的数据。

### 4. 测试模板
在集成模板后，进行测试以确保模板正确生成代码。您可以创建一个测试用例，传入一个 TemplateTable 对象，并检查生成的代码是否符合预期。

通过遵循这些步骤，您可以使用 Freemarker 创建自定义的代码模板，从而扩展 Nebula Framework Generator 插件的功能。这将大大提高代码生成的灵活性和效率。

希望这个教程能够帮助您理解和实现代码模板扩展。如果您有任何疑问或需要进一步的帮助，请随时联系我们。