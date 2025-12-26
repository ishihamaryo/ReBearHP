<!-- components/news/NewsSection.vue -->
<template>
  <section id="news" class="news">
    <ul class="news-list">
      <NewsItem
        v-for="item in newsList"
        :key="item.id"
        :link="item.link"
        :image="item.image"
        :date="item.date"
        :datetime="item.datetime"
        :title="item.title"
      />
    </ul>
  </section>
</template>

<script setup>
import NewsItem from './NewsItem.vue'

const newsList = [
  {
    id: 1,
    link: 'https://prtimes.jp/main/html/rd/p/000000005.000155573.html',
    image: '/images/News-01.png',
    date: '2025.5.9',
    datetime: '2025-05-09',
    title: '速報：東京ビッグサイトに謎のZ世代集団が出現'
  },
  {
    id: 2,
    link: 'https://prtimes.jp/main/html/rd/p/000000004.000155573.html',
    image: '/images/News-02.png',
    date: '2025.4.2',
    datetime: '2025-04-02',
    title: 'Z世代の常識：モノ消費からコト消費へ！ReBearとOshicocogが「決...'
  },
  {
    id: 3,
    link: 'https://prtimes.jp/main/html/rd/p/000000002.000155573.html',
    image: '/images/News-03.png',
    date: '2025.1.16',
    datetime: '2025-01-16',
    title: 'Z世代の「お酒」に関する意識調査を実施！'
  },
  {
    id: 4,
    link: 'https://prtimes.jp/main/html/rd/p/000000001.000155573.html',
    image: '/images/News-04.png',
    date: '2025.1.16',
    datetime: '2025-01-16',
    title: 'α・Z世代向けリサーチプラットフォーム「aZリサーチ」リリース'
  }
]
</script>

<style>
.news {
  background: url(/images/News_background.jpg);     
  background-position: right bottom;  /* ← 右下を基準に配置 */
  background-size: cover;
  background-repeat: no-repeat;      
  padding: clamp(48px, 6vw, 96px) clamp(16px, 8vw, 120px);
  justify-content: center; 
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin: 0 auto;
  list-style: none;
  gap: 20px;
  padding : 0;

}

/* 各ニュースの行 */
.news-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transform: translateY(0);
  transition:
    transform 0.35s cubic-bezier(.215, .61, .355, 1),


}

.news-item img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}
.news-item:hover {
  transform: translateY(-9px);
}


/* リンク部分（テキスト） */
.news-item a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #000000;
  gap: 6px;
  
}

/* 日付 */
.news-item time {
  font-size: 14px;
  color: #777;
  letter-spacing: 0.05em;
}

/* タイトル */
.news-item .news-title {
  font-size: 16px;
  font-weight: 550;
  line-height: 1.6;
  color: #222;
}
/* =========================
   NEWS Tablet (max-width:1080px)
========================= */
@media (max-width: 1080px) {

  .news {
    padding-inline: 24px;
    background-position: center;
  }

  .news-list {
    margin: 0 auto;     /* 余計な左右マージンを解除 */
    gap: 16px;
    justify-content: center;
  }

  .news-item {
    width: 480px;       /* 600 → 480 */
  }

  .news-item img {
    border-radius: 8px;
  }

  .news-item time {
    font-size: 13px;
  }

  .news-item .news-title {
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .news {
    padding: 48px 16px;
  }

  .news-item .news-title {
    font-size: 15px;
  }
}

</style>
