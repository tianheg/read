<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted } from 'vue'
import Comments from './components/comments.vue'

const { Layout } = DefaultTheme

const showGoToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const checkScroll = () => {
  showGoToTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments />
    </template>
    <template #aside-bottom>
      <div v-if="showGoToTop" class="go-to-top" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-width="2" d="m18 17l-6-6l-6 6M7 6h10" />
        </svg>
      </div>
    </template>
  </Layout>
</template>

<style>
.go-to-top {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  border: 1.5px solid #000;
  width: 32px;
  height: 32px;
  display: flex;
}

.go-to-top:hover {
  opacity: 1;
}
</style>