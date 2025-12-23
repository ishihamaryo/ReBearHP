<template>
  <section class="contact">
    <div class="contact-inner">

      <!-- CONTACT 見出し -->
      <div class="contact-heading">
        <h2>CONTACT US</h2>
      </div>

      <!-- ボタン -->
      <div class="contact-buttons">
        <a
          href="https://www.wantedly.com/companies/ReBear#_=_" 
          class="contact-btn contact-btn--outline"
        >
          <span>採用情報</span>
          <div class="icon-circle">
            <span class="arrow">→</span>
          </div>
        </a>

        <a
          href="https://rebear-contact.studio.site/" 
          class="contact-btn contact-btn--filled"
        >
          <span>お問い合わせ</span>
          <div class="icon-circle black">
            <span class="arrow white">→</span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
</script>

<!-- 重要：scoped を付けない -->
<style>

.contact {
  padding: 348px 0 30px 0 ;
  text-align: center;
  color: #fff;
}

.contact-inner {
  margin: 0 auto;
}

.contact-heading h2 {
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 0.01em;
  margin-bottom: 50px;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.contact-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;

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

.contact-btn span {
  margin-left: auto;
  margin-right: auto;
}

.contact-btn--outline {
  border: 2px solid #ffffff;
  color: #ffffff;
}

.contact-btn--filled {
  background: #ffffff;
  color: #000000;
}

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
</style>
