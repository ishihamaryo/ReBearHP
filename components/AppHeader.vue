<template>
    <header class="header-container">
        <NuxtLink to="/" class="logp">
            <img src="/images/ReBear-mark.png" alt="rebear logo">
        </NuxtLink>

        <nav class="main-nav">
  <ul>
    <li v-for="item in menu" :key="item.id">
      <a :href="item.to">
        {{ item.label }}
      </a>
    </li>
  </ul>
</nav>
    </header>
</template>


<style scoped>
.header {
  width: 100%;
  background-color: #02061A;
  background-size: cover;
  background-position: center;
}
.header-container img{
  height: 35px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.main-nav {
  margin-right: 10px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-nav li {
  position: relative;
}

.main-nav li::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(150deg, #7557bd, #ffeded);
  transform: rotate(60deg);
  top: 50%;
  translate: 0 -50%;
  opacity: 0.8;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(234, 215, 215, 0.7);
}

.main-nav li::before {
  left: -5px;
}

.main-nav li:first-child::before,
.main-nav li:last-child::after {
  display: none;
}
.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
    padding: 10px 15px;
    display: block;
}
.main-nav li:hover::before {
  opacity: 1;
}
.main-nav li:hover::after {
  transform: translate(-50%, -62%);
}
.main-nav li:hover a{
  transform: translateY(-6px); /* 上に浮く */
}
@media (max-width: 1200px) {
  section {
    padding: 72px 16px;
  }

  .header-container {
    padding: 10px 16px;
  }

  .main-nav a {
    font-size: 14px;
    padding: 8px 12px;
  }

  .header-container img {
    height: 40px;
  }
  .main-nav{
  display: none;
}
}

@media (max-width: 680px) {
  .header-container {
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
  }

  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-nav li::before {
    display: none; /* ◆装飾はモバイルでは非表示 */
  }

  .main-nav a {
    font-size: 14px;
    padding: 8px 10px;
  }

  .header-container img {
    height: 20px;
  }
}


</style>

<script>
export default {
  data() {
    return {
      // ナビ開閉（スマホ・ハンバーガー用）
      isMenuOpen: false,
      // スクロール判定（背景変更など用）
      isScrolled: false,

      menu: [
        { id: 'top', label: 'TOP', to: '#top' },
        { id: 'news', label: 'NEWS', to: '#news' },
        { id: 'service', label: 'SERVICE', to: '#service' },
        { id: 'member', label: 'MEMBER', to: '#member' },
        { id: 'inhouse', label: 'IN-HOUSE', to: '#inhouse' },
        { id: 'company', label: 'COMPANY', to: '#company' },
        { id: 'contact', label: 'CONTACT', to: '#contact' }
      ]
    }
  },
  mounted() {
    // スクロール監視
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // メモリリーク防止
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // ナビ開閉
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    // ナビを閉じる（リンククリック時）
    closeMenu() {
      this.isMenuOpen = false
    },
    // スクロール時の処理
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    }
  }
}

</script>
