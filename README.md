# read

## TODO

- 为读的每本书添加序号，但如果将来想删除某本书岂不是要重新排序？
- 一个构建错误，log：

```log
✓ building client + server bundles...
✖ rendering pages...
build error:
Cannot read properties of undefined (reading 'some')
TypeError: Cannot read properties of undefined (reading 'some')
    at isChildActive (file:///mnt/disk/MAIN/read/.vitepress/.temp/app.js:2935:28)
    at file:///mnt/disk/MAIN/read/.vitepress/.temp/app.js:2937:43
    at ReactiveEffect.fn (/mnt/disk/MAIN/read/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js:928:13)
    at ReactiveEffect.run (/mnt/disk/MAIN/read/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js:162:19)
    at get value [as value] (/mnt/disk/MAIN/read/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js:940:109)
    at file:///mnt/disk/MAIN/read/.vitepress/.temp/app.js:2942:127
    at renderComponentSubTree (/mnt/disk/MAIN/read/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:442:9)
    at renderComponentVNode (/mnt/disk/MAIN/read/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:386:12)
    at ssrRenderComponent (/mnt/disk/MAIN/read/node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js:84:10)
    at file:///mnt/disk/MAIN/read/.vitepress/.temp/app.js:2974:19
error: script "build" exited with code 1
```
