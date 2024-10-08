# 图解 HTTP by 上野宣

## Terminology {#terminology}

TCP/IP 协议族：HTTP

**协议** （procotol）：不同硬件、操作系统之间的通信规则。

**TCP/IP** ：与互联网相关联的协议集合

**DNS** （Domain Name System）：域名系统，提供域名到 IP
地址之间的解析服务。

**Client** （客户端）：请求访问资源的一端

**Server** （服务端）：提供响应资源的一端


## 了解 Web 及网络基础 {#了解-web-及网络基础}


### 使用 HTTP 协议访问 Web {#使用-http-协议访问-web}

Web 使用一种名为 HTTP（HyperText Transfer Protocol，超文本转移协议）的协议作为规范，完成从客户端到服务器等一系列运作流程。协议是指规则的约定。Web
是建立在 HTTP 协议上通信的。


### HTTP 的诞生 {#http-的诞生}

1989 年，CERN（欧洲核子研究组织）的 Tim Berners-Lee
提出了一种能让远隔两地的研究者们共享知识的设想------借助多文档之间相互关联形成的超文本（HyperText），连成可相互参阅的
WWW（World Wide Web, 万维网）。

当时提出的 3 项 WWW 构建技术，分别是：

-   把 SGML（Standard Generalized Markup
    Language，标准通用标记语言）作为页面的文本标记语言的 HTML（HyperText
    Markup Language，超文本标记语言）
-   作为文档传递协议的 HTTP
-   指定文档所在地址的 URL（Uniform Resource Locator，统一资源定位符）

WWW 首次使用是称呼具备 Web
浏览器功能的客户端应用程序，现在用于表示这一系列的集合，也可简称为 Web。

| 时间                                         | HTTP 版本/事件              |
|--------------------------------------------|-------------------------|
| 1990                                         | 发明 HTTP（作者：Tim Berners-Lee） |
| 1991                                         | HTTP/0.9                    |
| [1996](https://www.ietf.org/rfc/rfc1945.txt) | HTTP/1.0                    |
| 1997                                         | HTTP/1.1（主流 HTTP 协议版本） |
| 2015                                         | HTTP/2                      |
| 2020(draft)                                  | HTTP/3                      |


### 网络基础 TCP/IP {#网络基础-tcp-ip}

通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运作的。而 HTTP
属于它内部的一个子集。

> 什么是协议？

计算机与网络设备要相互通信，双方就必须基于相同的方法。不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则，而这种规则被称为\*协议\*（protocol）。

一、TCP/IP 的分层管理

\*TCP/IP 协议族里重要的一点就是分层\*。TCP/IP
协议族按层次分为以下四层：应用层、传输层、网络层和数据链路层。

1）应用层

它决定了向用户提供应用服务时通信的活动。TCP/IP
协议族内预存了各类通用的应用服务。比如，FTP（File Transfer
Protocol，文件传输协议）和 DNS（Domain Name
System，域名系统）服务就是其中两类。

HTTP 协议也处于该层。

2）传输层

传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。在传输层有两个性质不同的协议：TCP（Transmission
Control Protocol，传输控制协议）和 UDP（User Data
Protocol，用户数据报协议）。

3）网络层（又名网络互连层）

网路层用来处理网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过哪条传输路线将数据包传送给对方。

4）链路层（又名数据链路层，网络接口层）

用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（Network
Interface
Card，网络适配器，即网卡），以及光纤等物理可见部分（还包括连接器等一些传输媒介）。硬件上的范畴均在链路层的作用范围之内。

二、TCP/IP 通信传输流

每一层利用的协议：应用层（HTTP）、传输层（TCP）、网络层（IP）、链路层

这种把数据信息包装起来的做法称为封装（encapsulate）。


### 与 HTTP 关系密切的协议 : IP、TCP 和 DNS {#与-http-关系密切的协议-ip-tcp-和-dns}

一、负责传输的 IP 协议

按层次分，IP（Internet Protocol）网际协议位于网络层。IP
协议的作用是把各种数据包传送给对方。而确保传送的两个重要条件是 IP 地址和
MAC 地址（Media Access Control Address）。

IP 地址确定节点的网络地址，MAC 地址则指网卡所属的固定地址。IP 地址和 MAC
地址可以配对。前者可变，后者基本不变。

1）使用 ARP 协议凭借 MAC 地址进行通信

ARP（Address Resolution Protocol）是一种用以解析地址的协议，根据通信方的
IP 地址就可以反查出对应的 MAC 地址。

在一般网络中，位于端点的两台计算机如果想要通信要经过多台计算机进行中转，中转时会使用
ARP 协议通过 MAC 地址搜索中转目标。

2）互联网的网络传输不可预测

中转过程中的路由选择（routing）。

二、确保可靠性的 TCP 协议

按层次分，TCP 位于传输层，提供可靠的字节流服务。字节流服务（Byte System
Service）是指，为了方便传输，将大块数据分割成以报文段（segment）为单位的数据包进行管理。而可靠的传输服务是指，能够把数据准确可靠地传给对方。（TCP
协议为了更容易传送大数据才分割数据，它还能确认数据最终是否送达。）

1）确保数据送达

TCP 协议采用了三次握手（three-way
handshaking）策略，目的是为了准确无误地将数据送达。TCP
的标志（flag）------SYN（synchronize）和 ACK（acknowledgement）。

发送端首先发送一个带 SYN 标志的数据包给对方。接受端收到后，回传一个带有
SYN/ACK 标志的数据包以示传达确认信息。最后，发送端再回传一个带 ACK
标志的数据包，代表“握手”结束。

若在握手过程中某个阶段莫名中断，TCP
协议会再次以相同的顺序发送相同的数据包。

-   Post --&gt;SYN Get
-   Post &lt;--SYN/ACK Get
-   Post --&gt;ACK Get

### 负责域名解析的 DNS 服务 {#负责域名解析的-dns-服务}

DNS 服务是为了让人类更容易记住计算机在网络中的位置。

### 各种协议与 HTTP 协议的关系 {#各种协议与-http-协议的关系}

### URI 和 URL {#uri-和-url}

URI（统一资源标识符）与 URL（统一资源定位符）：Uniform Resource
Identifier 与 Uniform Resource Locator。

一、统一资源标识符

-   Uniform：统一的格式有利于处理不同类型的资源；
-   Resource：可标识的任何东西；
-   Identifier：可标识的对象，也称为标识符。

因此，URI 就是由协议表示的资源的定位标识符。（URI
就是由某个协议方案表示的资源，的定位标识符。协议方案是指访问资源所使用的协议类型名称。采用
HTTP 协议时，协议方案就是 http。）

> 标准的 URI 协议方案有 30
> 种左右，由隶属于国际互联网资源管理的非营利社团 ICANN（Internet
> Corporationfor Assigned Names and
> Numbers，互联网名称与数字地址分配机构）的 IANA（InternetAssigned
> Numbers Authority，互联网号码分配局）管理颁布。

URI 用字符串标识某一互联网资源，而 URL
表示资源的地点（互联网上所处的位置）。可见 URL 是 URI 的子集。

二、URI 格式

### 并不是所有的应用程序都符合 RFC {#并不是所有的应用程序都符合-rfc}

有一些用来制定 HTTP 协议技术标准的文档，它们被称为 RFC（Request for
Comments，征求修正意见书）。

RFC 是互联网的设计文档，如果不按照 RFC
标准执行，就有可能导致无法通信。所以绝大多数设备会采用 RFC
标准。但是，有些程序并未采用 RFC 标准，且使用者众多，这时那些遵循 RFC
标准的客户端或服务端将不得不适配这些例外的程序。

本书以后的 HTTP 协议内容，除去部分例外外，基本上都以 RFC 的标准为准。


## 简单的 HTTP 协议 {#简单的-http-协议}

主要使用 HTTP/1.1 版本。


### HTTP 协议用于客户端和服务器端之间的通信 {#http-协议用于客户端和服务器端之间的通信}

客户端和服务端的角色并不固定，但在具体通信线路中，资源传输方向是确定的。HTTP
协议能够明确区分哪端是客户端，哪端是服务端。


### 通过请求和响应的交换达成通信 {#通过请求和响应的交换达成通信}

通信请求由客户端发出，然后服务端才响应。服务端在没有接收到请求之前不会发送响应。

```text
GET /index.html HTTP/1.1
```

-   `GET` 访问服务器的类型，称为方法（method）
-   `/index.html` 表示请求访问的资源对象，也叫请求 URI（request-URI）
-   `HTTP/1.1` HTTP 的版本号，用以提示客户端使用的 HTTP 协议功能

我的网站的请求头：

```text
GET / HTTP/2
Host: www.yidajiabei.xyz
```

我网站的响应头：

```text
HTTP/1.1 200 Connection established
```

> 请求报文由请求方法、请求
> URI、协议版本、可选的请求首部字段和内容实体构成。响应报文由协议版本、状态码、原因短语、可选的响应首部字段以及实体主体构成。


### HTTP 是不保存状态的协议 {#http-是不保存状态的协议}

HTTP 是无状态（stateless）协议------HTTP
协议对于发送过的请求或响应都不做持久化处理。

随着 Web 的不断发展，HTTP
协议的无状态特性让网站无法保存用户的已登录信息，导致用户在当前页面输入的登录信息，在访问该网站的另一处页面时会失效，进而让用户不得不重新登录。

于是，Cookie 技术便是为了解决这一问题而诞生的。


### 请求 URI 定位资源 {#请求-uri-定位资源}

```text
GET https://job.yidajiabei.xyz/#/ HTTP/3

GET / HTTP/3
Host: job.yidajiabei.xyz

# 对服务器发起请求
OPTIONS * HTTP/1.1
```


### HTTP/1.1 中的可用方法 {#http-1-dot-1-中的可用方法}

一、GET 获取资源

GET 方法用于请求已被 URI 识别的资源。

二、POST 传输实体主体

三、PUT 传输文件

过程：在请求报文的主体中包含文件内容，然后保存到请求 URI
指定的位置。但是，由于 HTTP/1.1 的 PUT
方法自身不带验证机制，任何人都可以上传文件，存在安全性问题，因此一般的
Web 网站不使用该方法。

使用该方法的场景：

1.  Web 应用程序具有验证机制
2.  架构设计采用 REST（Representational State
    Transfer，表征状态转移）标准

> （PUT 的）响应：请求执行成功，但无数据返回

四、HEAD 获得报文首部

HEAD 和 GET 一样，只是不返回报文主体部分。用于确认 URI
的有效性及资源更新的日期时间等。

五、DELETE 删除文件（类比 PUT）

六、OPTIONS 询问支持的方法

```text
curl -X OPTIONS https://example.org -i
```

Output:

```text
HTTP/2 200
allow: OPTIONS, GET, HEAD, POST
cache-control: max-age=604800
content-type: text/html; charset=UTF-8
date: Tue, 07 Sep 2021 02:09:50 GMT
expires: Tue, 14 Sep 2021 02:09:50 GMT
server: EOS (vny/044E)
content-length: 0
```

七、TRACE 追踪路径

TRACE 方法能让 Web 服务端将之前的请求通信环回给客户端。

请求过程中，会在首部字段 Max-Forwards
中填入数值，每经过一个服务端就将数值减 1，减到 0
时停止传播，最后接收到请求的服务器则返回状态码 200 OK 的响应。

客户端可以通过 TRACE
方法确认连接过程中的数据是怎样被修改/篡改的。但是，因为它易引起
XST（Cross-Site Tracing，跨站追踪）攻击，所以通常不使用。

八、CONNECT 要求用隧道协议连接代理

CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议（tunnel
protocol）进行 TCP 通信。主要使用 SSL（Secure Sockets
Layer，安全套接层）和 TLS（Transport Layer
Security,传输层安全）协议吧通信内容加密后经网络隧道传输。


### 使用方法下达命令 {#使用方法下达命令}

通过方法向请求 URI 指定的资源发送请求报文。

一下列出 HTTP/1.0 和 HTTP/1.1
支持的方法。要注意：方法名区分大小写，注意要用大写字母。

### 持久连接节省通信量 {#持久连接节省通信量}

如果保证持久连接？

在 HTTP/1.1 和部分的 HTTP/1.0 中提出了持久连接（HTTP Persistent
Connections，也称为 HTTP keep-alive 或 HTTP connection reuse）的方法。

持久连接的特性：如果通信双方均不明确提出断开连接，则保持 TCP 连接状态。

持久连接的好处：

1.  减少了 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器段的负载
2.  节省时间，Web 页面的显示速度也相应提高

在 HTTP/1.1 中，所有的连接默认都是持久连接，但在 HTTP/1.0
内并未标准化。只有客户端与服务器端都支持持久连接时，才能持久连接。

什么是管线化（pipelining）？

管线化让多个请求的发送成为现实。


### （重要）使用 Cookie 的状态管理 {#重要-使用-cookie-的状态管理}

Cookie 技术通过在请求和响应报文中写入 Cookie 信息来控制客户端的状态。
