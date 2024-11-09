# Nebula Framework Generator 扩展教程序言

## 欢迎来到 Nebula Framework Generator 扩展教程

### 简介

Nebula Framework Generator 是一个高效的 Maven 插件，专注于从数据库表自动生成代码，支持多种数据库和模板架构。目前，插件支持 MySQL、SQL Server 和 Oracle 数据库，以及自有框架的 DDD（领域驱动设计）代码架构模板和 MVC（模型-视图-控制器）架构模板。本教程将引导您如何扩展插件的数据库支持和模板功能，以适应更多开发场景。

### 目前支持的数据库和模板

- **数据库支持**：MySQL、SQL Server、Oracle
- **模板支持**：DDD 代码架构模板、MVC 架构模板

### 代码生成原理简介

Nebula Framework Generator 的核心原理是利用数据库元数据来生成代码。插件首先从数据库查询对应表的字段信息，然后利用 FreeMarker 模板化技术，将这些元数据渲染成指定的代码文件。FreeMarker 是一个强大的模板引擎，它允许开发者定义模板，并在模板中使用变量和逻辑来生成文本输出。

### 您将学到什么

- **数据库扩展**：如何为 Nebula Framework Generator 添加对新数据库的支持。
- **模板扩展**：如何创建和集成新的代码生成模板。
- **原理理解**：深入了解从数据库字段信息到代码文件生成的整个流程。

### 准备工作

在开始本教程之前，请确保您已经具备以下条件：

- Maven 环境已安装并配置好。
- 对 Nebula Framework Generator 插件有一定的了解。
- 熟悉您想要扩展支持的数据库系统和模板技术。

通过本教程的学习，您将能够为 Nebula Framework Generator 添加更多的数据库支持和模板功能，使其更加强大和灵活，以满足您的开发需求。