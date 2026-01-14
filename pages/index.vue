<template>
<section id="top" class="kv">
   <AppHeader/> 
    <div class="kv-contaier">
        <div class="kv-contents">
            <h1 class="main-title">すべての挑戦を<br>
            <span class="redesign-text">Re:Design</span>
            </h1>
            <p class="sub-text">戦略から実行まで一気痛感のクリエイティブパートナー</p>
        </div>
        <div class="Group-table"> 
          <img src="/images/kv_table.png" alt="表">
        </div>

        <div class="kv-image1">
            <img src="/images/KV_PHONE.png" alt="phone">
        </div>
        <div class="kv-speech js-scroll-appear">
         <div class="kv-image2">
            <img src="/images/Container.png" alt="rebearのクマ画">
         </div>
        </div> 
        <div class="kv-image3">
            <img src="/images/BUSINESS RE BEAR 1.png" alt="BUSINESS RE BEAR">
        </div>
     </div>
</section>
<NewsSection/>
<section id="service" class="service">
  <div class="service-inner">
    <div class="service-heading-image js-service-title">
      <img src="/images/section-title.png" alt="SERVICE">
    </div>

    <article class="service-item service-design">
      <div class="service-card">
        <div class="service-main-image">
          <img src="/images/Container-copy.png" alt="UI/UX・戦略デザイン メインイメージ">
        </div>
        <div class="service-content">
          <h3 class="service-title-ja">UI/UX・戦略デザイン</h3>
          <p class="service-lead">
            ユーザー体験から “成果” につなげるデザインを
          </p>
          <p class="service-text">
            ユーザーの気持ちや行動に寄り添いながら、Webサイトやアプリ、
            紙媒体まで多様なタッチポイントに対応。構成からビジュアルまで
            トータルに設計し、「伝える」だけでなく「届く」体験をつくります。
          </p>
          <div class="service-strong">
            <div class="strong-icon">
              <img src="/images/Logo-container.png" alt="Strong Point アイコン">
            </div>
            <div class="strong-body">
              <h4 class="strong-title">Strong Point</h4>
              <p class="strong-text">
                状況に合わせた短期間での制作から、企画・マーケの連携を
                伴ったプロジェクトまで、WebサービスのUI/UXを幅広く対応。
              </p>
            </div>
          </div>
        </div>
      </div>
       <div class="service-bg-bear">
          <img src="/images/background-bear.png" alt="背景のクマ画像">
        </div>

      <ul class="service-tags">
        <li>コーポレートサイト（HP）</li>
        <li>ランディングページ（LP）</li>
        <li>ブランドサイト</li>
        <li>ECサイト（ネットショップ）</li>
        <li>バナー広告</li>
        <li>資料デザイン</li>
        <li>ポータルサイト</li>
        <li>CMS導入サイト（WordPress等）</li>
        <li>スマートフォンアプリ（iOS / Android）</li>
        <li>ポスター / パンフレット</li>
        <li>Webアプリケーション（SaaSなど）</li>
        <li>業務システムUI</li>
        <li>動画デザイン / 制作</li>
      </ul>
    </article>


     <section class="service-image-section">
       <div class="service-image-bg"></div>
        <div class="service-image-swiper-container">
    <Swiper
  class="service-image-swiper"
  :modules="[Autoplay]"
  :slides-per-view="1"
  :space-between="13"
  :loop="true"
  :speed="600"
  :autoplay="{
    delay: 600,
    disableOnInteraction: false
  }"
>
  <SwiperSlide
    v-for="(image, index) in serviceImages"
    :key="index"
  >
    <div class="service-image-slide">
      <img :src="image" alt="service image">
    </div>
  </SwiperSlide>
</Swiper>
</div>
</section>

    <article class="service-item service-dev">
      <div class="service-card">

        <div class="service-main-image">
          <img src="/images/Background.png" alt="Web / AI / アプリ開発 メインイメージ">
        </div>

        <div class="service-content">
          <h3 class="service-title-ja">Web / AI / アプリ開発</h3>
          <p class="service-lead">
            HP開発から複雑な大規模サービスまで対応
          </p>
          <p class="service-text">
            デザイン・システム開発に加え、AI時代の変化を見据えた技術選定やマーケティング施策まで支援します。
            LP制作からアプリ・サービス開発、業務システム、AIプロダクトまで、上流から伴走可能です。
          </p>

          <div class="service-strong">
            <div class="strong-icon">
              <img src="/images/Logo-container.png" alt="Strong Point アイコン">
            </div>
            <div class="strong-body">
              <h4 class="strong-title">Strong Point</h4>
              <p class="strong-text">
                DX / AX を見据えた長期的なアーキテクチャ設計と、
                MVP検証のためのスピーディな開発を両立。継続的な改善体制まで構築します。
              </p>
            </div>
          </div>
        </div>
      </div>
        <div class="service-bg-bear">
          <img src="/images/background-bear.png" alt="背景のクマ画像">
        </div>
      <ul class="service-tags">
        <li>ビジネス設計</li>
        <li>要件定義</li>
        <li>システム設計</li>
        <li>プロジェクトマネジメント</li>
        <li>生成AI / LLMs活用</li>
        <li>Webサービス開発</li>
        <li>iOS / Androidアプリ開発</li>
        <li>AWS / Google Cloud構築・運用</li>
        <li>LP / HP制作</li>
        <li>UI / UXデザインとの一体開発</li>
      </ul>
    </article>

    <article class="service-item service-marketing">
      <div class="service-card">

        <div class="service-main-image">
          <img src="/images/Background-copy.png" alt="SNS集客・マーケティング メインイメージ">
        </div>

        <div class="service-content">
          <h3 class="service-title-ja">SNS集客・マーケティング</h3>
          <p class="service-lead">
            売上・認知・エンゲージメントを最大化するデジタル戦略
          </p>
          <p class="service-text">
            SNS運用、LP設計、広告運用、CRM構築などを組み合わせ、狙った成果を実現。
            戦略設計から実行・効果検証まで一貫して対応し、短期的な成果に加え、
            中長期的な成長まで視野に入れた支援を提供します。
          </p>
          <div class="service-strong">
            <div class="strong-icon">
              <img src="/images/Logo-container.png" alt="Strong Point アイコン">
            </div>
            <div class="strong-body">
              <h4 class="strong-title">Strong Point</h4>
              <p class="strong-text">
                KPI設計から投稿企画・素材制作、広告運用、CRM設計・改善までをトータルで支援。
                最新のデジタル手法と豊富な実績に基づく運用力により、成果を継続的に積み上げる体制を実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
         <div class="service-bg-bear">
           <img src="/images/background-bear.png" alt="背景のクマ画像">
         </div>

      <ul class="service-tags">
        <li>SNSマーケティング</li>
        <li>LP制作</li>
        <li>広告配信</li>
        <li>SEO対策</li>
        <li>メールマーケティング</li>
        <li>コンテンツ制作</li>
        <li>インフルエンサーマーケティング</li>
        <li>アフィリエイト運用</li>
        <li>リード獲得施策</li>
        <li>ウェビナー開催</li>
        <li>CRM構築</li>
        <li>業務システムUI</li>
        <li>分析レポーティング</li>
      </ul>
    </article>
  </div>

<div class="core-value">
  <div class="core-title-img js-fade-up">
    <img src="/images/Corevalue_logo.png" alt="CORE VALUE">
  </div>
  <h2 class="core-heading">
    アイディアの本質的な実現と、継続的なグロースの両立を
  </h2>
  <div class="core-description">
    <p>クリエイティブ制作・マーケティング支援・プロダクト開発を軸に、幅広い領域を一貫して担います。</p>
    <p>単なるアウトプットにとどまらず、事業課題の解決を出発点に取り組むことが私たちの強みです。</p>
    <p>自社で複数の事業を立ち上げてきた経験を持つメンバーが、戦略設計から運用改善まで伴走し、<br>プロダクトや施策の価値を再定義。成果を積み重ね、持続的な成長へとつなげる体制を提供します。</p>
  </div>
  <h3 class="core-cycle-heading">
    本質に近づく “Re Design” のサイクル
  </h3>
  <div class="core-cycle-image">
    <img src="/images/Corevalue_flow.png" alt="ReDesign サイクル">
  </div>
</div>
</section>

<MemberSection/>

<section id="inhouse" class="inhouse">
  <div class="inhouse-inner">

    <div class="inhouse-heading-image js-inhouse-title">
      <img src="/images/in-house_logo.png" alt="IN-HOUSE">
    </div>

    <div class="inhouse-sub">
     <img src="/images/hero_image_aZ.png" alt="aZリサーチ">
    </div>

    <!-- 自社サービスカード一覧 -->
    <div class="inhouse-list">

      <!-- Z世代向けオンラインインタビューサービス -->
      <article class="inhouse-card inhouse-card-interview">
        <div class="inhouse-card-body">
          <!-- 画像：サービスロゴ（LINE 風など） -->
          <div class="inhouse-card-logo">
            <img
              src="/images/aZ_phone.png"
              alt="オンラインインタビューサービス ロゴ"
              >
          </div>

          <h3 class="inhouse-card-title">
            Z世代向け！<br>話すだけバイトならaZリサーチ
          </h3>
          <p class="inhouse-card-text">
            Z世代の皆さま向けのオンラインインタビューサービスです。公式LINEにご登録後、関心のある案件にご応募いただき、オンラインでご参加いただけます。所要は最短30分、平均5,000円相当の謝礼をご用意。就活・推し活・スマホなど身近なテーマを中心に、プライバシーにも配慮して運営しております。
          </p>
          <div class="inhouse-card-link">
            <a href="https://user.azresearch.jp/" class="inhouse-detail-link">
              詳細はこちら
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="works">
   <div class="works-block works-digital-flyer-top">
    <h2 class="works-heading">DIGITAL FLYER</h2>

    <div class="works-list works-list-flyer">
      <div class="works-item">
        <img src="/images/digital_flyer1.png" alt="">
      </div>

      <div class="works-item">
        <img src="/images/digital_flyer2.png" alt="デジタルフライヤー 2">
      </div>
    </div>
  </div>

  <!-- ② TO-C & EC -->
  <div class="works-block works-toc-ec">
    <h2 class="works-heading">TO-C & EC</h2>

    <div class="works-list works-list-toc-ec">
      <div class="works-item">
        <a href="https://apps.apple.com/jp/app/chains-%E3%82%B0%E3%83%83%E3%82%BA%E4%BA%A4%E6%8F%9B%E3%82%A2%E3%83%97%E3%83%AA/id6479872559">
        <img src="/images/Chains.png" alt="TO-C & EC 1">
        <p>グッズ交換アプリ『Chains』</p>
        </a>
      </div>
      <div class="works-item">
        <!-- 画像：TO-C & EC 右（ファッションECなど） -->
        <a href="https://wisfeline.com/">
        <img src="/images/Wis_feline.png" alt="TO-C & EC 2">
        <p>韓国ゴルフショップウェア『Wis Feline』</p>
        </a>
      </div> <!-- works-item -->
    </div> <!-- works-list works-list-toc-ec -->
  </div>

  <div class="works-block works-digital-flyer-bottom">
    <h2 class="works-heading">GROUP</h2>

    <div class="works-list works-list-flyer">
      <div class="works-item">
        <a href="ここにリンク">
          <img src="/images/secondmouse.png" alt="">
          <p>second mouse</p>
        </a>
      </div>

      <div class="works-item">
        <a href="https://yusvox.jp/">
          <img src="/images/yusvox.png" alt="">
          <p>YUSVOX</p>
        </a>
      </div>
    </div> <!-- works-list -->
  </div> <!-- works-block -->
</section>
<section id="company" class="company">
  <div class="company-inner">

    <!-- COMPANY 見出し（画像） -->
    <div class="company-heading js-company-title">
      <img src="/images/Company_logo.png" alt="COMPANY">
    </div>

    <!-- 会社情報テーブル -->
    <table class="company-table">
      <tbody>
        <tr>
          <th scope="row">COMPANY</th>
          <td>ReBear LLC</td>
        </tr>
        <tr>
          <th scope="row">ADDRESS</th>
          <td>〒153-0042　東京都目黒区青葉台2丁目21−6 いちご中目黒ビル 8階</td>
        </tr>
        <tr>
          <th scope="row">CAPITAL</th>
          <td>2,000,777円</td>
        </tr>
        <tr>
          <th scope="row">MEMBERS</th>
          <td>46名（業務委託含む）</td>
        </tr>
        <tr>
          <th scope="row">CEO</th>
          <td>荒川 力哉</td>
        </tr>
        <tr>
          <th scope="row">FOUNDATION</th>
          <td>2021年 8月20日</td>
        </tr>
      </tbody>
    </table>

  </div>
</section>

<!-- pages/index.vue -->
<section id="contact" class="contact-footer-bg">
  <ContactSection />
 <AppFooter />
</section>

</template>


<style scoped>
section {
  padding: 80px 0px;
}
.kv{
  background-image: url(/images/ee1cc55e4eeddd3feaabe77038317fa3fc51416a.png);
  position: relative;
  overflow: hidden;
  padding-top: 25px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Segoe UI", sans-serif;
  color: #111;
  overflow-x: hidden;
}

.kv-contaier {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 0 60px;
}

.kv-contents {
  padding-left: 15%;
  max-width: 520px;
  color: #ffffff;

}

.main-title {
  font-size: 50px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0 0 24px;
}

.redesign-text {
  font-size: 72px;
  font-weight: 900;
}

.sub-text {
  font-size: 16px;
  font-weight: 600;
  margin: -15px 0 40px;
}
.Group-table {
  width: 400px;
}

.Group-table img {
  height: auto;
  display: block;
  z-index: 5;
}

.kv-image1,
.kv-image2,
.kv-image3 {
  position: absolute;
  pointer-events: none;
}

.kv-image1 img,
.kv-image2 img,
.kv-image3 img {
  display: block;
  width: 100%;
  height: auto;
}

.kv-image1 {
  right: 15%;
  top: 170px;
  width: 350px;
  z-index: 1;
}
.js-scroll-appear {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
  transition:
    opacity 1.0s ease,
    transform 1.0s ease;
}

/* 表示状態 */
.js-scroll-appear.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 吹き出し個別調整（例） */
.kv-speech {
  position: absolute;
  right: 50px;
  bottom: 30px;
  z-index: 5;
}

.kv-image2 {
  right: 150px;
  bottom: 40px;
  width: 180px;
  z-index: 2;
}

.kv-image3 {
  bottom: -80px;
  width: 1280px;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transform: translateX(120px);
  transition:
    opacity 1s ease,
    transform 1s cubic-bezier(.215, .61, .355, 1);
  will-change: opacity, transform;
}
.kv-image3.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.service-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.service-heading-image {
  text-align: left;
  margin-bottom: 40px;
  margin-top:70px
}

.service-heading-image img {
  max-width: 620px;
  width: 100%;
  height: auto;
  display: inline-block;
  opacity: 0;
  transform: translateY(60px);
  transition: 
    opacity 0.8s ease,
    transform 0.8s ease;
}

.service-heading-image.is-show img {
  opacity: 1;
  transform: translateY(0);
}


.service-item {
  margin-bottom: 56px;
  z-index: 0;
}

.service-card {
  position: relative;

  display: flex;
  align-items: stretch;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 40px;
  padding: 40px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(255, 255, 255, 0.08);
  overflow: hidden;
  z-index: 0;
}
.service-main-image {
  flex: 1;
  display: flex;
}

.service-main-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  object-fit: cover;  
}

/* 右側テキスト */
.service-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title-ja {
  font-size: 24px;
  margin: 0 0 10px;
}

.service-lead {
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin: 0 0 18px;
}

.service-text {
  font-size: 14px;
  line-height: 1.9;
  color: #444;
  margin: 0;
}

/* Strong Point area */
.service-strong {
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 18px;
  background: #000;
  color: #fff;
  overflow: hidden;

}

.strong-icon img {
  width: 56px;
  height: 56px;
  display: block;
  border-radius: 50%;
}

.strong-body {
  flex: 1;
}

.strong-title {
  font-size: 14px;
  margin: 0 0 6px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.strong-text {
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

/* 背景のクマ画像（右斜め） */
.service-bg-bear {
  position: absolute;
  
  transform: rotate(10deg);
  opacity: 0.7;
  
  pointer-events: none;
}

.service-bg-bear img {
  width: 360px;
  height: auto;
  display: block;
}

/* SERVICE TAGS */
.service-tags {
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.service-image-section {
  position: relative;
  width: 100vw;
  height: 700px;
  left:50%;
  right:50%;
  margin-left:-50vw;
  margin-right:-50vw;
  overflow: hidden;
  margin-bottom: 40px;
}

.service-image-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  background-image: url("/images/swipwer.background.png");
  background-size: cover;
  background-position: center;

  filter: blur(20px) brightness(0.7);
  transform: scale(1.25);

  z-index: 2;
  pointer-events: none;

}


.service-image-swiper-container{
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  padding:0 24px;
} 

.service-image-swiper {
  width: 900px;
  height: 700px;
  overflow: hidden;

}

.service-image-slide {
  height: 100%;  
  display: flex;            
  justify-content: center;
  align-items: center;

}

.service-image-slide img {
  width: 100%;
  height: 70%;
  object-fit: cover;

}

.service-tags li {
  font-size: 12px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  white-space: nowrap;
  position: relative;
  padding-left: 26px;
}

.service-tags li::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 50%;
  width: 6px;
  height: 6px;
  background: #ff9a5c;
  transform: translateY(-50%) rotate(45deg);
}



/* 開発サービスは画像とテキストの順番を入れ替え */
.service-item.service-dev .service-card {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
}
.service-item.service-dev .service-main-image {
  order: 2;
}
.service-item.service-dev .service-content {
  order: 1;
}

/* CORE VALUE 全体 */
.core-value {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 120px 20px;
}

/* タイトル（CORE VALUE）画像 */
.core-title-img img {
  width: 90%;
  max-width: 900px;
  margin: 0 auto 40px;
  display: block;
}
.js-fade-up {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.js-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}


.core-heading {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.6;
}

.core-description {
  font-size: 18px;
  line-height: 1.9;
  margin-bottom: 80px;
  color: #333;
}

.core-description p {
  margin-bottom: 15px;
}

/* “Re Design のサイクル” 見出し */
.core-cycle-heading {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 40px;
}

/* フェーズ画像1枚 */
.core-cycle-image img {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: block;
}





.inhouse {
  padding: 120px 24px;
  background: #ffffff;
}

.inhouse-inner {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
}

/* 見出しロゴ */
.inhouse-heading-image img {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto 60px;
  display: block;
}
.js-inhouse-title {
  opacity: 0;
  transform: translateY(60px);
  transition: 
    opacity 0.8s ease,
    transform 0.8s ease;
}
.js-inhouse-title.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* サブ画像（aZヒーロー） */
.inhouse-sub img {
  max-width: 900px;
  width: 100%;
  margin: 0 auto 70px;
  display: block;
}

/* カード一覧 */
.inhouse-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* ========== IN-HOUSE card layout fix ========== */

.inhouse-card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* ここで2カラムを強制 */
.inhouse-card-body{
  display: grid;
  grid-template-columns: 1.15fr 0.85fr; /* 左：文章　右：画像 */
  align-items: center;
  column-gap: 80px;
}

/* 右：スマホ画像を右カラムに固定 */
.inhouse-card-logo{
  grid-column: 2;
  grid-row: 1 / 5;               /* タイトル〜ボタンの高さに合わせて縦にまたぐ */
  display: flex;
  justify-content: flex-end;      /* 右寄せ */
  align-items: center;
  position: relative;
}

/* 画像自体 */
.inhouse-card-logo img{
  width: min(430px, 20vw);
  height: auto;
  display: block;
  transform-origin: 70% 60%;
}

/* 左：タイトル/本文/ボタンを左カラムへ */
.inhouse-card-title,
.inhouse-card-text,
.inhouse-card-link{
  grid-column: 1;
}

/* タイトル（画像のように左寄せ・大きめ） */
.inhouse-card-title{
  text-align: left;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.25;
  color: #d94cff;
  margin: 0 0 18px;
}

/* 本文（左寄せ＋行間） */
.inhouse-card-text{
  text-align: left;
  font-size: 16px;
  line-height: 2;
  color: #6a6a6a;
  margin: 0 0 34px;
  max-width: 560px;
}

/* ボタン位置（左側で本文の下） */
.inhouse-card-link{
  text-align: left;

}

/* ボタン本体（ピンクグラデ・丸・矢印） */
.inhouse-detail-link{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 8px 1px;
  min-width: 360px;

  border-radius: 999px;
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  font-size: 15px;

  background: linear-gradient(135deg, #b64dff, #ff6ad5);
  box-shadow: 0 18px 40px rgba(200, 90, 255, 0.35);
  transition: transform .2s ease, box-shadow .2s ease;
}

/* 右の白い丸矢印 */
.inhouse-detail-link::after{
  content: "→";
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  color: #b64dff;
  font-weight: 900;

  display: grid;
  place-items: center;
}

.inhouse-detail-link:hover{
  transform: translateY(-2px);
  box-shadow: 0 24px 52px rgba(200, 90, 255, 0.45);
}



.works {
  padding: 10px 2px;
  background: #ffffff;
}

.works-block {
  max-width: 1120px;
  margin: 0 auto;
}

/* 見出し */
.works-heading {
  text-align: center;
  font-size: 60px;
  font-weight: 1200;
  letter-spacing: 0.12em;
  margin-bottom: 15px;
  opacity: 0.25;
  
}

/* 画像リスト共通 */
.works-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

/* ITEM */
.works-item {
  text-align: center;
}

.works-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(19, 18, 18, 0.14);
  transition: transform 0.35s cubic-bezier(.215, .61, .355, 1), 
              box-shadow 0.3s ease;
}

/* hover animation */
.works-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 60px rgba(225, 0, 0, 0.22);
}
.works-item a {
  text-decoration: none;
  color: inherit;
}
/* 画像下の説明テキスト */
.works-item p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #222;
}

/* COMPANY セクション全体 */
.company {
  background: #ffffff;
}

.company-inner {
  max-width: 1080px;
  margin: 0 auto;
}

/* 見出し画像 */
.company-heading {
  text-align: center;
  margin-bottom: 80px;
}

.company-heading img {
  max-width: 800px;
  width: 100%;
  height: auto;
  display: inline-block;
}

.js-company-title {
  opacity: 0;
  transform: translateY(60px);
  transition: 
    opacity 0.8s ease,
    transform 0.8s ease;
}
.js-company-title.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* テーブル */
.company-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto 120px;
}

/* 行 */
.company-table tr {
  border-bottom: 1px solid #dedede;
}

/* 左側（見出し） */
.company-table th {
  width: 250px;
  padding: 24px 0;
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #ff8a00;    
  text-transform: uppercase;
  white-space: nowrap;
}

.company-table td {
  padding: 24px 0;
  padding-left: 100px;
  color: #333333;
}

.contact {
  background: url(/images/Contact_background.png);
  background-position: top center;
  background-repeat: no-repeat;
  padding: 100px 0 0;
  text-align: center;
  color: #fff;
}

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* 見出し */
.contact-heading h2 {
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 0.01em;
  margin-bottom: 50px;
}

/* ボタン全体（横並び） */
.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

/* 共通ボタンレイアウト */
.contact-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;   /* ←右端にアイコンを配置 */

  width: 400px;
  padding: 20px 30px;
  border-radius: 60px;

  text-decoration: none;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.03em;

  position: relative;
  transition: 
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0 18px 40px rgba(0, 0, 0, 0.25);
}

/* テキストを中央に固定する */
.contact-btn span {
  margin-left: auto;
  margin-right: auto;
}

/* 左ボタン */
.contact-btn--outline {
  border: 2px solid #ffffff;
  color: #ffffff;
}
/* 右ボタン */
.contact-btn--filled {
  background: #ffffff;
  color: #000000;
}
/* 矢印丸背景 */
.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle.black {
  background: #000000;
}


.arrow {
  font-size: 22px;
  font-weight: 900;
  color: #000;
}
.arrow.white {
  color: #ffffff;
}
/* ホバー */

.contact-btn:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}
.contact-btn--outline:hover {
  background: rgba(255, 255, 255, 0.1);
}
.contact-btn--filled:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.contact-footer-bg {
  background: url(/images/Contact_background.png);
  background-size: cover;
  background-position: center top;
}

.contact-footer-bg {
  background: url(/images/Contact_background.png);
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

@media (max-width: 1200px) {

  /* ===== 全体余白 ===== */
  section {
    padding: 72px 24px;
  }

  /* ===== KV ===== */
  .kv-contaier {
    padding: 160px 0 80px;
  }

  .kv-contents {
    padding-left: 8%;
    max-width: 480px;
  }

  .main-title {
    font-size: 44px;
  }

  .redesign-text {
    font-size: 64px;
  }

  .kv-image1 {
    width: 300px;
    right: 8%;
  }

  .kv-image2 {
    width: 150px;
  }

  .kv-image3 {
    width: 90%;
    bottom: -40px;
  }

  /* ===== SERVICE ===== */
  .service-inner {
    max-width: 920px;
  }

  .service-card {
    padding: 32px;
    gap: 24px;
  }

  .service-image-section {
    height: 520px;
  }

  .service-image-swiper {
    width: 80vw;
    max-width: 780px;
  }

  .service-image-slide img {
    height: 65%;
    position: absolute;
    top:30px;
  }

  .service-title-ja {
    font-size: 22px;
  }

  .service-text {
    font-size: 13px;
  }

  /* ===== CORE VALUE ===== */
  .core-heading {
    font-size: 26px;
  }

  .core-description {
    font-size: 16px;
  }

  /* ===== INHOUSE ===== */
  .inhouse-card-body {
    column-gap: 40px;
  }

  .inhouse-card-logo img {
    width: min(320px, 28vw);
  }
}
@media (max-width: 760px) {

  /* ===== 全体 ===== */
  section {
    padding: 64px 16px;
  }

/* ===== 全体・コンテナ ===== */
  section.kv {
    padding: 0 0 64px; /* 上の余白はHeaderで調整されるため0に */
    overflow-x: hidden; /* 横はみ出し防止 */
    position: relative;
  }

  .kv-contaier {
    padding: 80px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* すべて中央寄せ */
    position: relative;
  }

  /* ===== テキストエリア ===== */
  .kv-contents {
    text-align: center;
    padding: 0 20px;
  
    z-index: 10; /* テキストを最前面に */
  }

  .main-title {
    font-size: 32px;
    color: #fff;
    line-height: 1.2;
    font-weight: bold;
  }

  .redesign-text {
    font-size: 52px; /* 画像に合わせて少し大きく */
    display: block;
    margin-top: 5px;
  }

  .sub-text {
    font-size: 13px;
    color: #fff;
    margin-top: 15px;
    opacity: 0.9;
  }

  /* ===== 画像・装飾エリア共通 ===== */
  .Group-table,
  .kv-image1,
  .kv-image2,
  .kv-image3,
  .kv-speech {
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  /* 1. 背景の格子 (Group-table) */
  .Group-table {
    margin-bottom: -150px; /* 下の画像を上に食い込ませる */
    z-index: 1;
  }
  .Group-table img {
    width: 100%; /* 画面幅いっぱいに近く */
    max-width: 760px;
    height: auto;
  }

  /* 2. スマホ画像 (kv-image1) */
  .kv-image1 {
    z-index: 5;
    margin-bottom: -50px;
    justify-content: center; 
    align-items: center;
    display: flex;
    position: relative;
    left: 0;
  }
  .kv-image1 img {
    width: 85%;
    max-width: 300px;
    height: auto;
    margin :0 auto;
  
  }

  /* 3. クマの吹き出し・ロゴ (kv-speech / kv-image2) */
  /* 画像の配置に合わせて調整 */
  .kv-speech {
    position: absolute; /* スマホ画像に対して浮かせる */
    bottom: 25%;
    right: 5%;
    width: auto;
    z-index: 6;
  }
  .kv-image2 img {
    width: 120px; /* 吹き出しのサイズ */
    height: auto;
    position: relative;
    top:160px;
  }

  /* 4. 下部の BUSINESS RE BEAR ロゴ (kv-image3) */
  .kv-image3 {
    z-index: 7;
    margin-top: -20px;
    margin-bottom: 0;
  }
  .kv-image3 img {
    width: 100%;
    max-width: 500px;
    height: auto;
    top:-0px;
  }

  /* ===== SERVICE ===== */
  .service-heading-image img {
    max-width: 360px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .service-card {
    flex-direction: column;
    padding: 24px;
  }

  .service-main-image,
  .service-content {
    width: 100%;
  }

  .service-title-ja {
    font-size: 18px;
  }

  .service-text {
    font-size: 13px;
    line-height: 1.7;
  }

  /* スライダー */
  .service-image-section {
    height: 400px;
  }
  .service-image-slide img {
    height: 60%;
    width: 70%;
    border-radius: 12px;
  }

  .service-image-swiper {
    width: 100%;
    height: 420px;
  }

  /* ===== CORE VALUE ===== */
.core-title-img img{
    max-width: 560px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    width:100%;
}
  
  
  .core-heading {
    font-size: 22px;
  }

  .core-description {
    font-size: 15px;
  }

  /* ===== INHOUSE ===== */
  .inhouse-card-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .inhouse-card-logo {
    order: -1;
    justify-content: center;
  }

  .inhouse-card-logo img {
    width: 300px;
  }

  .inhouse-card-title {
    font-size: 22px;
    text-align: center;
  }

  .inhouse-card-text {
    text-align: left;
    font-size: 14px;
  }

  .inhouse-detail-link {
    width: 100%;
    justify-content: center;
  }

  /* ===== WORKS ===== */
  .works-list {
    grid-template-columns: 1fr;
  }
.works img{
width:100%;
max-width:500px;
}

  /* ===== COMPANY ===== */
  .company-table,
  .company-table tbody,
  .company-table tr,
  .company-table th,
  .company-table td {
    display: block;
    width: 100%;
   
  }

  .company-table th {
    text-align: left;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .company-table td {
    padding: 0;
    font-size: 14px;
  }

  /* ===== CONTACT ===== */
 
.contact-footer-bg {
  padding-bottom: 0 ;
  padding-top: 80px;
  padding-bottom: 50px;
}


}


</style>

<script setup lang="ts">
import { onMounted } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

/* =============================
  Swiper Images
============================= */
const serviceImages: string[] = [
  "/images/01.png",
  "/images/02.png",
  "/images/03.png",
  "/images/04.png",
  "/images/05.png",
  "/images/06.png",
  "/images/07.png",
  "/images/08.png",
  "/images/09.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png", 
  "/images/13.png",
  "/images/14.png",
  "/images/15.png"
]
onMounted(() => {
  // SPのみ実行
  if (window.innerWidth > 767) return

  const targets = document.querySelectorAll('.js-kv-fade')

  if (!targets.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target) // 一度だけ
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  targets.forEach(el => observer.observe(el))
})

/* =============================
  初期化関数
============================= */
const initScrollObserver = () => {
  const selectorList = [
    '.js-scroll-appear',
    '.service-heading-image',
    '.js-fade-up',
    '.js-inhouse-title',
    '.js-company-title'
  ]

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        if (entry.target.classList.contains('service-heading-image')) {
          entry.target.classList.add('is-show')
        } else {
          entry.target.classList.add('is-visible')
        }

        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.3 }
  )

  selectorList.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      observer.observe(el)
    })
  })
}

const initKvImage = () => {
  const target = document.querySelector('.kv-image3')
  if (!target) return

  setTimeout(() => {
    target.classList.add('is-visible')
  }, 300)
}

const initStagger = () => {
  const container = document.querySelector('.js-stagger')
  if (!container) return

  const items = container.querySelectorAll('.js-stagger-item')

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.4}s`
        item.classList.add('is-visible')
      })

      observer.unobserve(entry.target)
    },
    { threshold: 0.3 }
  )

  observer.observe(container)
}

/* =============================
  mounted（1回だけ）
============================= */
onMounted(() => {
  initScrollObserver()
  initKvImage()
  initStagger()
})
</script>



