<template>
   <header >
    <div class="header-container">
        <NuxtLink to="/" class="logp">
            <img src="/images/ReBear_mark.png" alt="">
        </NuxtLink>

        <nav class="main-nav">
            <ul>
          <li><NuxtLink to="/top">TOP</NuxtLink></li>
          <li><NuxtLink to="/news">NEWS</NuxtLink></li>
          <li><NuxtLink to="/service">SERVICE</NuxtLink></li>
          <li><NuxtLink to="/member">MEMBER</NuxtLink></li>
          <li><NuxtLink to="/inhouse">IN-HOUSE</NuxtLink></li>
          <li><NuxtLink to="/company">COMPANY</NuxtLink></li>
          <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
            </ul>
        </nav>
    </div>
   </header>
</template>


<style scoped>
.header {
  width: 100%;
  background: url('/images/header_bg.png'), #02061A;
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

</style>

<script>
export default {
  data() {
    return {
      // ナビ開閉（スマホ・ハンバーガー用）
      isMenuOpen: false,
      // スクロール判定（背景変更など用）
      isScrolled: false,
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
