# Serving a billion web requests with boring code

https://notes.billmill.org/blog/2024/06/Serving_a_billion_web_requests_with_boring_code.html

- High level
- Boring über alles
- The boring bits
  - Why React?
  - golang
- The innovation tokens
  - Modular backend
    - drug pricing (aka druginfo)
    - plan search (aka planinfo)
    - beneficiary information (aka beneinfo)
  - gRPC
- Strict backwards compatibility
- Faceted search
- Database
  - creation
  - ETL
  - models
  - testing
  - Local database for development
- Miscellaneous tooling
- Logging
- Documentation
- Runtime integrations
- And more

作者在构建时使用的 Boring Tech：

- Postgres
- Golang
- React

为什么选择 React？

> I would have loved to have done differently, but I worried that choosing to use a multi-page architecture or a different library would have slowed us down enough that we wouldn't have delivered on our tight timeline. I didn't have enough trust in any of the alternatives available to me at the time to make me believe we could choose them safely enough.

但是，几年后：

> The result fell prey after a few years to a common failure mode of react apps, and became quite heavy and loaded somewhat slowly.
>
> I still think I made the right choice at the time, but it's unfortunate that I felt I had to make it and I wish I had known of a nice clean way to avoid it.

关于 Golang：在我看来，即时且详细的错误处理是构建弹性系统的一个重要功能。作者认为 Golang 是很好的选择。

作者在架构设计上的两个赌注：模块化后端，gRPC。

- 模块化后端 - 我既没有将后端设计为微服务，也没有将其设计为整体，而是设计为三个大模块

- gRPC - 后端服务通过 gRPC 相互通信，并通过 grpc-gateway 与 Web 客户端通信

## 模块化后端

我将后端分为三个部分；它们都生活在同一个存储库中，但经过设计，可以在必要时将它们拆开并交给新团队。

每个组件都有自己的 postgres 数据库（物理上位于同一位置，但从不交织在一起），并严格使用 gRPC 在它们之间进行通信。

这种分裂主要是基于数据访问模式：

- drug pricing 万亿种可能
- plan search | Both planinfo and druginfo had entirely immutable databases in this way; their only job was to serve an API based on the most recent data for each.
- beneficiary information | beneinfo 模块的工作是存储有关计划客户的信息，并且是应用程序中数据库长期存在且可变的唯一部分。我们努力在这里存储尽可能少的数据，以最大程度地降低数据泄露的风险，但没有办法避免存储数量惊人的个人身份信息 (PII)。我们对这些数据尽可能认真，失去控制的风险始终让我感到紧张。

## gRPC 远程过程调用

总的来说，gRPC 对我们来说并不像我开始项目时所希望的那样好。

> The best benefit of using it, and the driver behind my choice to use it, was that every interface was specified in code. This was very useful; we could generate tools and interfaces that changed in lockstep.
>
> The biggest pain points were all related to the tooling. I maintained a set of very hairy makefiles with eldritch protoc commands to build all the interfaces into go files that we could use, and debugging those was always painful.
>
> Not being able to curl the system, as we would if it were a JSON API, was a pain in the butt. grpcurl existed, and we used it, but was not nearly as nice.
>
> grpc-gateway was the best part of the ecosystem I used, it served more than a billion requests for us and was never once the source of a problem. It enabled us to do what gRPC ought to have been able to do from the start, serve requests to web clients.

我喜欢拥有接口模式，但我们使用的 gRPC 功能很少，而且代码生成非常复杂，如果没有它，我们的情况可能会稍微好一些。

该应用程序的核心原则是尽可能依赖 postgres，并且尽可能愚蠢而不是聪明。

我们通过建立索引良好的计划表来实现分面搜索，并通过基于一系列条件添加条件来构建 SQL 查询字符串。

实现该方案核心部分的函数 buildQuery 是一个 250 行的函数，带有大量注释，以近乎扁平的方式布局逻辑。重点完全放在业务需求上，而不是花哨的代码上。
