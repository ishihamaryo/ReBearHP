<template>
  <article class="member-card">
    <div class="member-card-photo">
      <img
        class="member-photo-bg"
        :src="bgSrc"
        :alt="bgAlt"
      >
    </div>

    <div class="member-card-content">
      <div class="member-avatar-wrap">
        <img
          class="member-avatar"
          :src="avatarSrc"
          :alt="avatarAlt"
        >
      </div>

      <div class="member-info">
        <h3 class="member-name">{{ name }}</h3>
        <p class="member-role">{{ role }}</p>
        <p class="member-bio" v-html="bioHtml"></p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },

  // 画像
  bgSrc: { type: String, required: true },
  bgAlt: { type: String, required: true },
  avatarSrc: { type: String, required: true },
  avatarAlt: { type: String, required: true },

  // <br> を含むのでHTMLとして受け取る
  bioHtml: { type: String, required: true }
})
</script>
