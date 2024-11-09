
# Nebula-Framework-Generator 快速开始教程

本教程将指导您如何从GitHub下载`Nebula-Framework-Generator`插件，将其安装到本地Maven库，并在其他项目中引入该插件。

## 步骤 1: 从GitHub下载插件

1. 访问 `Nebula-Framework-Generator` 的GitHub仓库页面。
2. 点击绿色的“Code”按钮，选择“Download ZIP”下载插件的源代码。
3. 解压下载的ZIP文件到您选择的目录。

## 步骤 2: 安装插件到本地Maven库

1. 打开命令行工具，切换到解压后的插件目录。
2. 执行以下Maven命令来安装插件到您的本地Maven库：

```bash
mvn install
```

## 步骤 3: 在其他项目中引入插件

1. 打开您想要使用该插件的Maven项目。
2. 编辑项目的pom.xml文件，添加Nebula-Framework-Generator插件的配置。

以下是pom.xml文件中插件配置的示例：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>com.neegix</groupId>
            <artifactId>nebula-framework-generator</artifactId>
            <version>1.0-SNAPSHOT</version>
            <configuration>
                <driver>com.mysql.cj.jdbc.Driver</driver> <!-- 数据库驱动类 -->
                <url>jdbc:mysql://127.0.0.1:3306/nebula?serverTimezone=GMT%2B8&amp;useSSL=false&amp;allowPublicKeyRetrieval=true</url> <!-- 数据库连接地址 -->
                <username>root</username> <!-- 数据库用户名 -->
                <password>12345678</password> <!-- 数据库密码 -->
                <packageName>com.neegix.development</packageName> <!-- 生成代码的包名 -->
                <tableName>sys_user</tableName> <!-- 表名 -->
                <tablePrefix>sys_</tablePrefix> <!-- 表名前缀 -->
                <schemaOrOwner>nebula</schemaOrOwner> <!-- 数据库名 -->
                <templateType>ddd</templateType> <!-- 模板类型 -->
                <outputDir>/Users/neegix/Documents/4-项目管理</outputDir> <!-- 生成代码的输出目录 -->
            </configuration>
            <dependencies> <!-- 插件的依赖——本插件没有将数据库驱动打包，需要自行添加 -->
                <dependency>
                    <groupId>com.mysql</groupId>
                    <artifactId>mysql-connector-j</artifactId>
                    <version>8.4.0</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

请注意，您需要根据实际情况调整`<url>`、`<username>`、`<password>`、`<packageName>`、`<tableName>`、`<tablePrefix>`、`<schemaOrOwner>`和`<outputDir>`等配置项。

## 步骤 4: 运行代码生成
```bash
mvn nebula-framework-generator:generate
```

这个命令会触发Nebula-Framework-Generator插件，根据您提供的配置生成代码。

## 结语
通过以上步骤，您已经成功地从GitHub下载并安装了Nebula-Framework-Generator插件，并在您的项目中进行了配置。现在，您可以使用该插件来生成代码，提高开发效率。

```
请确保您已经正确设置了Maven环境，并且您的项目结构符合Maven的要求。此外，根据您的实际需求调整插件配置中的参数。
```
