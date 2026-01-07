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

import { client } from '~/libs/microcms';

// microCMSからデータを取得
const { data: newsDate } = await useAsyncData('news', () => 
  client.get({
    endpoint: 'news', // 画像で確認したエンドポイント名
    queries: { fields: 'id,title,date' } // 必要な項目だけ指定（任意）
  })
);
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
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  margin: 0 auto;
  list-style: none;
  gap: 20px;
  padding : 0;
  max-width: 1120px;

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

/* =====================
   News Responsive
===================== */
@media (max-width: 1024px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
@media screen and (max-width: 768px) {

  /* =========================
     NEWS セクション全体
  ========================= */
  .news {
    padding: 40px 20px;
  }

  /* =========================
     リストを縦並びに
  ========================= */
  .news-list {
    flex-direction: column;
    gap: 24px;
    margin: 0;
  }

  /* =========================
     各ニュースカード
  ========================= */
  .news-item {
    width: 100%;
  }

  /* =========================
     画像調整
  ========================= */
  .news-item img {
    width: 100%;
    aspect-ratio: 1 / 1;   /* スマホらしい比率 */
    object-fit: cover;
    border-radius: 12px;
  }

  /* =========================
     テキスト部分
  ========================= */
  .news-item a {
    margin-top: 12px;
  }

  .news-date {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .news-title {
    font-size: 16px;
    line-height: 1.5;
  }

}

@media (max-width: 640px) {
  .news {
    padding: 48px 16px;
  }

  .news-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .news-item img {
    width: 100%;          /* 横幅いっぱいを維持しつつ */
    max-height: 250px;    /* 画像の高さの最大値を制限（お好みで調整してください） */
    object-fit: cover;    /* 指定したサイズに合わせて画像を切り抜く（歪み防止） */
    border-radius: 8px;   /* 角を少し丸くするとデザインが馴染みます */
  }

  .news-item time {
    font-size: 13px;
  }

  .news-item .news-title {
    font-size: 15px;
  }
}


</style>
