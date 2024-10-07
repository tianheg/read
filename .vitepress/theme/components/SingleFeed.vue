<script setup>
import { ref, onMounted } from 'vue'

const title = ref('')
const feedLink = ref('')
const items = ref([])
const loading = ref(true)

function parseRSS(text) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, 'text/xml')
  let itemElements = []
  if (doc.querySelectorAll('entry')) {
    itemElements = doc.querySelectorAll('entry')
  } else if (doc.querySelectorAll('item')) {
    itemElements = doc.querySelectorAll('item')
  }

  return Array.from(itemElements).map(item => ({
    title: item.querySelector('title')?.textContent || '',
    link: item.querySelector('link')?.getAttribute("href") || item.querySelector('link')?.textContent || '',  
  }))
}

onMounted(async () => {
  try {
    const response = await fetch('https://api.tianheg.org/feeds')
    const feedsItems = await response.json()
    // console.log(feedsItems.data)
    // get random item from feedsItems, if has rss link, fetch it else log null
    const randomItem = feedsItems.data[Math.floor(Math.random() * feedsItems.data.length)]
    if (randomItem.rss) {
      const response = await fetch(`https://corsproxy.tianheg.org/?url=${randomItem.rss}`)
      const text = await response.text()
      title.value = randomItem.title
      items.value = parseRSS(text)
    }
    feedLink.value = randomItem.url
  } catch (error) {
    console.error('Failed to fetch RSS feed:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h2><a :href="feedLink" target="_blank" rel="noopener noreferrer">{{ title }}</a></h2>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.link">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
      </li>
    </ul>
    <p v-else>{{ loading ? 'Loading...' : 'Failed to load RSS feed' }}</p>
  </div>
</template>