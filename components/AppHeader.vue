<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <img src="/images/ReBear_mark.png" alt="">
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="メニューを開閉する"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li v-for="item in menu" :key="item.id">
            <a :href="item.to" @click="closeMenu">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  background: url('/images/header_bg.png'), #02061A;
  background-size: cover;
  background-position: center;
  transition: box-shadow 0.3s ease;
}

.header.is-scrolled {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  height: 36px;
}

.main-nav {
  margin-right: 10px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 6px;
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
  left: -5px;
}

.main-nav li:first-child::before {
  display: none;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 14px;
  display: block;
  transition: transform 0.2s ease;
}

.main-nav li:hover::before {
  opacity: 1;
}

.main-nav li:hover a {
  transform: translateY(-6px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  padding: 8px;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 6px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 900px) {
  .header-container {
    padding: 12px 16px;
  }

  .main-nav {
    position: absolute;
    top: 68px;
    right: 16px;
    left: 16px;
    background: rgba(2, 6, 26, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 12px 0;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    display: none;
  }

  .main-nav.is-open {
    display: block;
  }

  .main-nav ul {
    flex-direction: column;
    gap: 0;
  }

  .main-nav li::before {
    display: none;
  }

  .main-nav a {
    padding: 12px 20px;
  }

  .menu-toggle {
    display: flex;
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
