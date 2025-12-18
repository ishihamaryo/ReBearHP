<template>
<section class="kv">
   <AppHeader/> 

    <div class="kv-contaier">
        <div class="kv-contents">
            <h1 class="main-title">すべての挑戦を<br>
            <span class="redesign-text">Re:Design</span>
            </h1>
            <p class="sub-text">戦略から実行まで一気痛感のクリエイティブパートナー</p>
        </div>
        <div class="Group service-grid-table">      
            <div class="grid-cell Container">Design</div>
            <div class="grid-cell Container">Engineering</div>
            <div class="grid-cell Container">Marketing</div>
            <div class="grid-cell Container">Our Services</div>
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

<section class="news">
        <ul class="news-list">
          <li class="news-item">
            <a href="https://prtimes.jp/main/html/rd/p/000000005.000155573.html">
             <img src="/images/155573-5-b4d1f7a345dead0506e5dc098ad17a95-1308x1025.png" alt="">
              <time datetime="2025-05-09">2025.5.9</time>
              <span class="news-title">
                速報：東京ビッグサイトに謎のZ世代集団が出現
              </span>
            </a>
          </li>
          <li class="news-item">
            <a href="https://prtimes.jp/main/html/rd/p/000000004.000155573.html">
             <img src="/images/155573-5-b4d1f7a345dead0506e5dc098ad17a95-1308x1025 (1).png" alt="">
              <time datetime="2025-04-02">2025.4.2</time>
              <span class="news-title">
                Z世代の常識：モノ消費からコト消費へ！ReBearとOshicocogが「決...
              </span>
            </a>
          </li>
          <li class="news-item">
             <a href="https://prtimes.jp/main/html/rd/p/000000002.000155573.html">
            <img src="/images/155573-5-b4d1f7a345dead0506e5dc098ad17a95-1308x1025 (2).png" alt="">
              <time datetime="2025-01-16">2025.1.16</time>
              <span class="news-title">
                Z世代の「お酒」に関する意識調査を実施！
              </span>
            </a>
          </li>
          <li class="news-item">
            <a href="https://prtimes.jp/main/html/rd/p/000000001.000155573.html">
             <img src="/images/155573-5-b4d1f7a345dead0506e5dc098ad17a95-1308x1025 (3).png" alt="">
              <time datetime="2025-01-16">2025.1.16</time>
              <span class="news-title">
                α・Z世代向けリサーチプラットフォーム「aZリサーチ」リリース
              </span>
            </a>
          </li>
        </ul>
</section>

<section class="service">
  <div class="service-inner">
    <div class="service-heading-image">
      <img src="/images/section-title.png" alt="SERVICE">
    </div>

    <article class="service-item service-design">
      <div class="service-card">
        <div class="service-main-image">
          <img src="/images/Containerのコピー.png" alt="UI/UX・戦略デザイン メインイメージ">
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
              <img src="/images/Logo container.png" alt="Strong Point アイコン">
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
          <img src="/images/スクリーンショット 2025-06-14 11.13.56 3.png" alt="背景のクマ画像">
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
              <img src="/images/Logo container.png" alt="Strong Point アイコン">
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
          <img src="/images/スクリーンショット 2025-06-14 11.13.56 3.png" alt="背景のクマ画像">
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
          <img src="/images/Backgroundのコピー.png" alt="SNS集客・マーケティング メインイメージ">
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
              <img src="/images/Logo container.png" alt="Strong Point アイコン">
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
           <img src="/images/スクリーンショット 2025-06-14 11.13.56 3.png" alt="背景のクマ画像">
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
  <div class="core-title-img">
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

<section class="member">
  <div class="member-inner">

    <!-- セクション見出し -->
    <div class="member-heading">
      <img src="/images/MEMBER.png" alt="MEMBER">
      <p class="member-lead-ja">
        平均年齢26歳。Z世代を中心としたメンバーで<br>
        多種多様な「イマ」をアップデートします。
      </p>
    </div>

    <!-- メンバー一覧：各カードは「背景画像＋アイコン画像」の2枚構成 -->
    <div class="member-list">

      <!-- 荒川さん -->
      <article class="member-card">
        <!-- 上の大きい背景写真 -->
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/荒川背景画像.png"
            alt="荒川 力哉 背景写真"
          >
        </div>

        <!-- 下のカード部分（アイコン＋テキスト） -->
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <!-- 丸アイコン画像（2枚目の画像） -->
            <img
              class="member-avatar"
              src="/images/荒川アイコン.png"
              alt="荒川 力哉 アイコン"
            >
          </div>

          <div class="member-info">
             <h3 class="member-name">荒川 力哉</h3>
            <p class="member-role">CEO</p>
            <p class="member-bio">
              早稲田大学在学中に営業代理店を立ち上げ<br>2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。
            </p>
          </div>
        </div>
      </article>

      <!-- 甲斐さん -->
      <article class="member-card">
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/甲斐背景画像.png"
            alt="甲斐 慎之助 背景写真"
          >
        </div>
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <img
              class="member-avatar"
              src="/images/甲斐アイコン.png"
              alt="甲斐 慎之助 アイコン"
            >
          </div>
          <div class="member-info">
            <h3 class="member-name">甲斐 慎之助</h3>
            <p class="member-role">CTO</p>
            <p class="member-bio">
              慶応義塾大学在学中にIT企業を設立し、アプリケーション開発、DX推進、生成AIの研究開発など、各事業の責任者を務める一方で、役員として営業、財務、管理業務全般を統括。東証プライム上場企業から中小企業に至るまで多岐にわたるクライアントの案件を手がける。AWS、GMO、SBCなどのイベントでAIの専門家として登壇も行うReBear社にはCTOとして参画。
            </p>
          </div>
        </div>
      </article>

      <!-- 國井さん -->
      <article class="member-card">
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/國井背景画像.png"
            alt="國井 桃花 背景写真"
          >
        </div>
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <img
              class="member-avatar"
              src="/images/國井アイコン.png"
              alt="國井 桃花 アイコン"
            >
          </div>
          <div class="member-info">
            <h3 class="member-name">國井 桃花</h3>
            <p class="member-role">LEAD MARKTER</p>
            <p class="member-bio">
              早稲田大学卒業後、楽天グループ株式会社に入社。楽天モバイルと楽天市場で営業を経験後、時間と場所にとらわれない働き方に憧れ、楽天を退社しノマドの聖地と呼ばれる東欧ジョージアに移住。 Webスキルを学んでフリーランスに転身し、ReBearにWebデザイナーとSNSマーケターとして参画。 現在SNSチームのリーダーとして9アカウントの運用をしつつ、デザイナーとしてHPや自社サービスのクリエイティブ制作を担当。
            </p>
          </div>
        </div>
      </article>

      <!-- 以下、同じ構造でメンバー追加 -->
      <article class="member-card">
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/伊部背景画像.png"
            alt="伊部 恭平 背景写真"
          >
        </div>
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <img
              class="member-avatar"
              src="/images/伊部アイコン.png"
              alt="伊部 恭平 アイコン"
            >
          </div>
          <div class="member-info">
            <h3 class="member-name">伊部 恭平</h3>
            <p class="member-role">SALES MANAGER</p>
            <p class="member-bio">
              早稲田大学卒業後、株式会社BuySell Technologiesに入社。営業職として入社後、同年には新人王を獲得。その後、2年間で営業成績上位10%を継続して、社内最速で管理職昇進を果たす。SV（スーパーバイザー）として部下の育成や支店売上の達成に貢献。2024年3月にはReBear合同会社に参画し、営業統括としてグロース事業のリード獲得を担当。また営業代行を軸とした営業事業部の立ち上げを行い、初年度売上1億円を達成。持ち前の戦略的思考とリーダーシップで、社内の急成長を実現。
            </p>
          </div>
        </div>
      </article>

      <article class="member-card">
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/司代背景画像.png"
            alt="司代 一稀 背景写真"
          >
        </div>
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <img
              class="member-avatar"
              src="/images/司代アイコン.png"
              alt="司代 一稀 アイコン"
            >
          </div>
          <div class="member-info">
            <h3 class="member-name">司代 一稀</h3>
            <p class="member-role">MARKETING MANGER</p>
            <p class="member-bio">
              湘南工科大学在学中に、荒川が立ち上げた営業代理店に参画し、営業部長としてマネジメントを経験。卒業後はRetty株式会社にてインサイドセールスを担当し、新人賞を獲得。その後退社し、ReBear合同会社の立ち上げに参画。現在は同社でマーケティンググループマネージャーを務める傍ら、音楽事務所 YUSVOX株式会社を設立し、取締役として経営およびクリエイターのマネジメントに携わっている。
            </p>
          </div>
        </div>
      </article>
      <article class="member-card">
        <div class="member-card-photo">
          <img
            class="member-photo-bg"
            src="/images/堀沢背景画像.png"
            alt="堀澤 大地 背景写真"
          >
        </div>
        <div class="member-card-content">
          <div class="member-avatar-wrap">
            <img
              class="member-avatar"
              src="/images/堀沢アイコン.png"
              alt="堀澤 大地 アイコン"
            >
          </div>
          <div class="member-info">
            <h3 class="member-name">堀澤 大地</h3>
            <p class="member-role">MARKETER</p>
            <p class="member-bio">
               早稲田大学在学中から3社にて長期インターンを経験し、学生時代より実践的なビジネススキルを培う。就職活動では外資系コンサルティングファームから内定を獲得するも、インターンとして参画していた当社の事業に強く共感し、そのまま入社。現在はマーケティング領域の幅広い案件に携わり、戦略立案から実行まで一貫して参画している。
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <h2 class="member-more">+40 more to go.</h2>
</section>

<section class="inhouse">
  <div class="inhouse-inner">

    <div class="inhouse-heading-image">
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
        <img src="/images/Wis Feline.png" alt="TO-C & EC 2">
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
<section class="company">
  <div class="company-inner">

    <!-- COMPANY 見出し（画像） -->
    <div class="company-heading">
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

<section class="contact">
  <div class="contact-inner">
    <!-- CONTACT 見出し -->
    <div class="contact-heading">
      <h2>CONTACT US</h2>
    </div>
    <div class="contact-buttons">
      <a href="https://www.wantedly.com/companies/ReBear#_=_" class="contact-btn contact-btn--outline">
        <span>採用情報</span>
        <div class="icon-circle">
          <span class="arrow">→</span>
        </div>
      </a>
      <a href="https://rebear-contact.studio.site/" class="contact-btn contact-btn--filled">
        <span>お問い合わせ</span>
        <div class="icon-circle black">
          <span class="arrow white">→</span>
        </div>
      </a>
    </div>
  </div>
  <AppFooter/>
</section>



</template>

      



 

<style scoped>
section {
  padding: 80px 24px;
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

}
.kv-contaier {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 60px 140px;
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
/*==== SERVICE GRID TABLE ====*/
.service-grid-table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 50px);
  width: 320px;

  /* ★ 中央寄せをやめる */
  margin: 40px 0 0 15%;  /* 上に少し余白をあけて、左をテキストと同じ 15% に */
  position: relative;
  font-family: ProximaNova, sans-serif;
}

/* セル内テキスト */
.grid-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #d5d3d3;
  text-align: center;
}

/* まず横線を 2 本（上・下）引く */
.service-grid-table::before,
.service-grid-table::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.28);
  pointer-events: none;
}

/* 1 行目と 2 行目の間（= 下の線） */
.service-grid-table::before {
  top: 50px;
}
.service-grid-table::after {
  top: 50px;
}
/* 表の一番下の線 */
.service-grid-table::after {
  top: 100px;
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
  right: 20px;
  bottom: -80px;
  width: 1280px;
  text-align: center;
  z-index: 2;

}

.news {
  background: url(/images/News_background.jpg);     
  background-position: right bottom;  /* ← 右下を基準に配置 */
  background-size: cover;
  background-repeat: no-repeat;      
  padding: 50px 200px; 
  justify-content: center; 
}

.news-list {
  display: flex;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  gap: 20px;

}

/* 各ニュースの行 */
.news-item {
  display: flex;
  flex-direction: column;
  width: 400px;
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
  color: #221d1d;
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
  font-size: 18px;
  font-weight: 550;
  line-height: 1.6;
  color: #222;
}


.service-section {
  background: #f7f7f9;
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
  width: 100%;
  height: 550px;
  background-image: url("/images/ee1cc55e4eeddd3feaabe77038317fa3fc51416a.jpg"); /* ← 背景画像 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
}


.service-image-swiper-container{
  width: 100%;
  max-width: 1280px;
  height: 550px;
  margin: 0 auto;
}


.service-image-swiper {
  margin-top: 32px;
  width: 100%;
  height: 550px;
  background-color: #b32a2a;
  overflow: hidden;

}

.service-image-slide {
  height: 550px;              
  width:1000px;
}


.service-image-slide img {
  width: 100%;
  height: 100%;
  display: block;
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



.member {
  padding: 120px 24px 160px;
  background: #01030eff; /* 本家はかなり暗いネイビー〜黒のグラデ。正確な色は不明なので近似 */
  color: #fff;
}

.member-inner {
  max-width: 1120px;
  margin: 0 auto;
}

/* 見出し部分（MEMBER画像＋リード文） */
.member-heading {
  text-align: center;
  margin-bottom: 75px;
}

.member-heading img {
  max-width: 600px; 
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 40px;
}

.member-lead-ja {
  margin: 0;
  font-size: 20px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
}



.member-list {
  display: flex;
  flex-wrap: wrap;             /* 折り返して2カラムにする */
  gap: 32px;                   /* カード同士の余白 */
  justify-content: space-between;
  margin: 0;
  padding: 0;
}


.member-card {
  flex: 0 0 calc(50% - 16px);  /* 2カラムにする */
  display: flex;
  flex-direction: column;
}

.member-card-photo {
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  background: #111;
}

.member-photo-bg {
  display: block;
  width: 100%;
  height: auto;
}

/* 下のカード本体（アイコン＋テキスト） */
.member-card-content {
  position: relative;
  padding: 40px 24px 28px;
  border-radius: 24px;
  background: radial-gradient(circle at top left, #182436 0%, #050810 60%, #02030a 100%);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7); 
}

.member-avatar-wrap {
  position: absolute;
  left: 24px;
  top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #01030eff); 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
}

.member-avatar {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
}


.member-info {
  margin-top: 12px;
}

.member-role {
  margin: -30px 120px 10px;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);
}

.member-name {
  margin: -30px 120px 30px ; 
  font-size: 20px;
  font-weight: 700;
}

.member-bio {
  margin: 0;
  font-size: 13px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.78);
}


.member-more {
  margin: 40px 0 0;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(211, 220, 255, 0.9); /* 本家の少し淡い水色テキスト。正確なカラーコードはわからないので近似 */
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
  padding: 30px 0 0;
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

.contact-btn--outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const targets = document.querySelectorAll('.js-scroll-appear')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.3
    }
  )
  targets.forEach(target => observer.observe(target))
})


import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const serviceImages = [
  "/images/01.png",
  "/images/02.png",
  "/images/03.png" ,
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
</script>



