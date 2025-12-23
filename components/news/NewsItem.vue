<!-- components/news/NewsItem.vue -->
<template>
  <li class="news-item">
    <a :href="link" target="_blank" rel="noopener">
      <img :src="image" :alt="title" />
      <time :datetime="datetime">{{ date }}</time>
      <span class="news-title">
        {{ title }}
      </span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  datetime: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
