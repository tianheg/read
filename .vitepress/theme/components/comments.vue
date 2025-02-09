<script setup>
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      data-repo="tianheg/read"
      data-repo-id="R_kgDOKmL22g"
      data-category="Comments"
      data-category-id="DIC_kwDOKmL22s4CmzN_"
      data-mapping="title"
      data-strict="1"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="preferred_color_scheme"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>