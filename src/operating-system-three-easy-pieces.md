# 操作系统导论 by Remzi H. Arpaci-Dusseau, Andrea C. Arpaci-Dusseau, Peter Reiher

[书的主页](https://pages.cs.wisc.edu/~remzi/OSTEP/)，[书的示例代码](https://github.com/remzi-arpacidusseau/ostep-code)，[书的项目代码](https://github.com/remzi-arpacidusseau/ostep-projects)，[书的 Homework 代码](https://github.com/remzi-arpacidusseau/ostep-homework)

[书的目录（PDF 文件）](https://pages.cs.wisc.edu/~remzi/OSTEP/toc.pdf)

Intro
=====

Virtualizing The CPU
--------------------

主文件 cpu.c：

```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <assert.h>
#include "common.h"

int main(int argc, char *argv[])
{
  if (argc != 2) {
    fprintf(stderr, "usage: cpu <string>\n");
    exit(1);
  }
  char *str = argv[1];
  while(1) {
    Spin(1);
    printf("%s\n", str);
  }
  return 0;
}
```
