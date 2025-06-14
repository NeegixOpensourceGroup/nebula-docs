# CQRS架构指南

## 什么是CQRS

CQRS(Command Query Responsibility Segregation)是一种将读写操作分离的架构模式。

## 核心概念

- **命令(Command)**：改变系统状态的操作
- **查询(Query)**：获取系统状态的操作
- **命令模型**：处理命令的模型
- **查询模型**：处理查询的模型

## CQRS架构图示

```mermaid
graph TD
    subgraph 客户端
        UI[用户界面]
        API[API网关]
    end
    
    subgraph 命令侧
        C[命令]
        CH[命令处理器]
        ES[(事件存储)]
        C --> CH
        CH --> ES
    end
    
    subgraph 查询侧
        Q[查询]
        QH[查询处理器]
        RM[(读模型)]
        Q --> QH
        QH --> RM
    end
    
    UI -->|发送命令| C
    UI -->|发起查询| Q
    ES -->|发布事件| RM
    
    style 命令侧 fill:#f9f,stroke:#333
    style 查询侧 fill:#9f9,stroke:#333
    style 客户端 fill:#eee,stroke:#333
```

## 适用场景

- 读写负载差异大的系统
- 需要高性能查询的系统
- 复杂业务逻辑的系统

## 实现示例

```java
// 命令接口
public interface Command<T> {
    T execute();
}

// 命令处理器
public class CommandHandler<T> {
    public void handle(Command<T> command) {
        command.execute();
    }
}

// 命令实现
public class CreateUserCommand implements Command<User> {
    private User user;
    public CreateUserCommand(User user) {
        this.user = user;
    }
}

// 命令处理器实现
public class CreateUserCommandHandler extends CommandHandler<CreateUserCommand> {
    // 注入领域服务
    @Autowired
    private UserDomainService userDomainService;

    @Override
    public void handle(CreateUserCommand command) {
        userDomainService.createUser(command.getUser());
    }
}

// 查询接口
public interface Query<T> {
    T execute();
}

// 查询处理器
public class QueryHandler<T> {
    public T handle(Query<T> query) {
        return query.execute();
    }
}
// 查询实现
public class GetUserQuery implements Query<User> {
    private Long id;
    public GetUserQuery(Long id) {
        this.id = id;
    }
}

// 查询处理器实现
public class GetUserQueryHandler extends QueryHandler<GetUserQuery> {
    // 注入领域服务
    @Autowired
    private UserDomainService userDomainService;
    @Override
    public User handle(GetUserQuery query) {
        return userDomainService.getUser(query.getId());
    }
}
```