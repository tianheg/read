# 操作系统概念 by Abraham Silberschatz, Peter B. Galvin, Greg Gagne

## 第三章-进程 Processes {#第三章-进程-processes}

Process--A program in execution. It's the unit of work in a modern time-sharing system.

Process includes these things, process stack, data section, heap, text.

A program by itself is not a process. A program is a passive entity. A process is an active entity.

A program becomes a process when an executable file is loaded into memory.

Although two processes may be associated with the same program , they are nevertheless considered two separate execution sequences.

### Process State {#process-state}

一个进程可能拥有的状态：

- New，进程正被创建
- Running，指令正被执行
- Waiting，进程正在等待某些事情发生
- Ready，进程正等待被赋给处理器
- Terminated，进程已完成执行

Only one process can be running on any processor at any instant.
