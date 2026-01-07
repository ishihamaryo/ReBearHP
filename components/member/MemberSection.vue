<template>
  <section id="member" class="member">
    <div class="member-inner">

      <div class="member-heading js-stagger">
        <img src="/images/MEMBER.png" alt="MEMBER" class="js-stagger-item">
        <p class="member-lead-ja js-stagger-item">
          平均年齢26歳。Z世代を中心としたメンバーで<br>
          多種多様な「イマ」をアップデートします。
        </p>
      </div>

      <!-- メンバー一覧 -->
      <div class="member-list">
        <MemberCard
          v-for="m in members"
          :key="m.id"
          :name="m.name"
          :role="m.role"
          :bg-src="m.bgSrc"
          :bg-alt="m.bgAlt"
          :avatar-src="m.avatarSrc"
          :avatar-alt="m.avatarAlt"
          :bio-html="m.bioHtml"
        />
      </div>
    </div>

    <h2 class="member-more">+40 more to go.</h2>
  </section>
</template>

<script setup>
import MemberCard from './MemberCard.vue'

const members = [
  {
    id: 1,
    name: '荒川 力哉',
    role: 'CEO',
    bgSrc: '/images/荒川背景画像.png',
    bgAlt: '荒川 力哉 背景写真',
    avatarSrc: '/images/荒川アイコン.png',
    avatarAlt: '荒川 力哉 アイコン',
    bioHtml:
      '早稲田大学在学中に営業代理店を立ち上げ<br>2年で4億を売り上げ、支店メンバー100人の責任者を務める。SHOWROOM株式会社に1人目の新卒として就職し新規事業部に配属。toC向けの動画コンテンツ配信サービス(smash.)を立ち上げメンバーとして参画し2年間で200万DLを達成。更に10以上の新規のプロジェクト立ち上げに関わる。21年8月、CEOとしてReBear社を創業。'
  },
  {
    id: 2,
    name: '甲斐 慎之助',
    role: 'CTO',
    bgSrc: '/images/甲斐背景画像.png',
    bgAlt: '甲斐 慎之助 背景写真',
    avatarSrc: '/images/甲斐アイコン.png',
    avatarAlt: '甲斐 慎之助 アイコン',
    bioHtml:
      '慶応義塾大学在学中にIT企業を設立し、アプリケーション開発、DX推進、生成AIの研究開発など、各事業の責任者を務める一方で、役員として営業、財務、管理業務全般を統括。東証プライム上場企業から中小企業に至るまで多岐にわたるクライアントの案件を手がける。AWS、GMO、SBCなどのイベントでAIの専門家として登壇も行うReBear社にはCTOとして参画。'
  },
  {
    id: 3,
    name: '國井 桃花',
    role: 'LEAD MARKTER',
    bgSrc: '/images/國井背景画像.png',
    bgAlt: '國井 桃花 背景写真',
    avatarSrc: '/images/國井アイコン.png',
    avatarAlt: '國井 桃花 アイコン',
    bioHtml:
      '早稲田大学卒業後、楽天グループ株式会社に入社。楽天モバイルと楽天市場で営業を経験後、時間と場所にとらわれない働き方に憧れ、楽天を退社しノマドの聖地と呼ばれる東欧ジョージアに移住。 Webスキルを学んでフリーランスに転身し、ReBearにWebデザイナーとSNSマーケターとして参画。 現在SNSチームのリーダーとして9アカウントの運用をしつつ、デザイナーとしてHPや自社サービスのクリエイティブ制作を担当。'
  },
  {
    id: 4,
    name: '伊部 恭平',
    role: 'SALES MANAGER',
    bgSrc: '/images/伊部背景画像.png',
    bgAlt: '伊部 恭平 背景写真',
    avatarSrc: '/images/伊部アイコン.png',
    avatarAlt: '伊部 恭平 アイコン',
    bioHtml:
      '早稲田大学卒業後、株式会社BuySell Technologiesに入社。営業職として入社後、同年には新人王を獲得。その後、2年間で営業成績上位10%を継続して、社内最速で管理職昇進を果たす。SV（スーパーバイザー）として部下の育成や支店売上の達成に貢献。2024年3月にはReBear合同会社に参画し、営業統括としてグロース事業のリード獲得を担当。また営業代行を軸とした営業事業部の立ち上げを行い、初年度売上1億円を達成。持ち前の戦略的思考とリーダーシップで、社内の急成長を実現。'
  },
  {
    id: 5,
    name: '司代 一稀',
    role: 'MARKETING MANGER',
    bgSrc: '/images/司代背景画像.png',
    bgAlt: '司代 一稀 背景写真',
    avatarSrc: '/images/司代アイコン.png',
    avatarAlt: '司代 一稀 アイコン',
    bioHtml:
      '湘南工科大学在学中に、荒川が立ち上げた営業代理店に参画し、営業部長としてマネジメントを経験。卒業後はRetty株式会社にてインサイドセールスを担当し、新人賞を獲得。その後退社し、ReBear合同会社の立ち上げに参画。現在は同社でマーケティンググループマネージャーを務める傍ら、音楽事務所 YUSVOX株式会社を設立し、取締役として経営およびクリエイターのマネジメントに携わっている。'
  },
  {
    id: 6,
    name: '堀澤 大地',
    role: 'MARKETER',
    bgSrc: '/images/堀沢背景画像.png',
    bgAlt: '堀澤 大地 背景写真',
    avatarSrc: '/images/堀沢アイコン.png',
    avatarAlt: '堀澤 大地 アイコン',
    bioHtml:
      '早稲田大学在学中から3社にて長期インターンを経験し、学生時代より実践的なビジネススキルを培う。就職活動では外資系コンサルティングファームから内定を獲得するも、インターンとして参画していた当社の事業に強く共感し、そのまま入社。現在はマーケティング領域の幅広い案件に携わり、戦略立案から実行まで一貫して参画している。'
  }
]
</script>

<!-- 重要：Newsと同じで「崩さない」ため、まずは scoped を付けない -->
<style>

.member {
  padding: 120px 24px 160px;
  background: #01030eff;
  color: #fff;
}

.member-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.member-heading {
  text-align: center;
  margin-bottom: 75px;
}

.js-stagger-item {
  opacity: 0;
  transform: translate(-30px, 60px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(.215, .61, .355, 1);
  will-change: opacity, transform;
}

.js-stagger-item.is-visible {
  opacity: 1;
  transform: translate(0, 0);
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
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.member-card {
  flex: 0 0 calc(50% - 16px);
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
  margin: -30px 120px 30px;
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
  color: rgba(211, 220, 255, 0.9);
}

/* =====================
   Member Responsive
===================== */
@media (max-width: 1200px) {
  .member {
    padding: 100px 16px 130px;
  }

  .member-inner {
    max-width: 1040px;
  }

  .member-heading {
    margin-bottom: 64px;
  }

  .member-heading img {
    max-width: 520px;
    margin-bottom: 32px;
  }

  .member-lead-ja {
    font-size: 18px;
    line-height: 1.8;
  }

  .member-list {
    gap: 26px;
  }

  .member-card {
    flex: 0 0 calc(50% - 13px);
  }

  .member-card-content {
    padding: 32px 20px 24px;
  }

  .member-avatar-wrap {
    width: 92px;
    height: 92px;
    top: -46px;
  }

  .member-role {
    margin: -26px 100px 8px;
  }

  .member-name {
    margin: -26px 100px 24px;
    font-size: 18px;
  }

  .member-bio {
    font-size: 12px;
    line-height: 1.8;
  }

  .member-more {
    margin-top: 32px;
    font-size: 32px;
  }
}

@media (max-width: 780px) {
  .member {
    padding: 80px 12px 100px;
  }

  .member-inner {
    max-width: none;
  }

  .member-heading {
    margin-bottom: 40px;
  }

  .member-heading img {
    max-width: 360px;
  }

  .member-lead-ja {
    font-size: 16px;
    line-height: 1.7;
  }

  .member-list {
  
    gap: 20px;
  }

  .member-card {
    flex: 1 1 auto;
  }

  .member-card-content {
    padding: 28px 18px 22px;
  }

  .member-avatar-wrap {
    left: 18px;
    top: -42px;
    width: 82px;
    height: 82px;
  }

  .member-role {
    margin: -14px 0 6px;
    padding-left: 96px;
  }

  .member-name {
    margin: -16px 0 18px;
    padding-left: 96px;
  }

  .member-bio {
    font-size: 12px;
    line-height: 1.75;
  }

  .member-more {
    font-size: 28px;
  }
}
</style>
