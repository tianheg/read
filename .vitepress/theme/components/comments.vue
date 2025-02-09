<script setup>
import { useData, useRoute } from 'vitepress'
import { ref, watch, nextTick, computed } from 'vue'
import Giscus from '@giscus/vue'

const route = useRoute()
const { isDark, frontmatter } = useData()

// Match refer.vue's configuration style
const theme = computed(() => isDark.value ? 'dark' : 'light')

// Force reload on route change like refer.vue
const showComment = ref(true)
watch(
  () => route.path,
  () => {
    showComment.value = false
    nextTick(() => {
      showComment.value = true
    })
  },
  { immediate: true }
)
</script>

<template>
  <ClientOnly>
    <div class="giscus-wrapper" v-if="frontmatter.comments !== false">
      <Giscus
        v-if="showComment"
        repo="tianheg/read"
        repo-id="R_kgDOKmL22g"
        category="Comments"
        category-id="DIC_kwDOKmL22s4CmzN_"
        mapping="title"
        strict="1"
        :reactions-enabled="false"
        emit-metadata="0"
        input-position="top"
        :theme="theme"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.giscus-wrapper {
  margin: 2rem 0;
  padding: 2rem 1rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}


/* Giscus theme adaptation */
:deep(.giscus, .giscus-frame) {
  width: 100%;
  min-height: 150px;
}

:deep(.giscus-frame) {
  background-color: transparent;
}

/* Mobile adaptation */
@media (max-width: 768px) {
  .giscus-wrapper {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
    border-radius: 6px;
  }
  
  .giscus-wrapper::before {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>

