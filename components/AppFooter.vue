<template>
    <footer class="footer">
        <div class="footer-inner">
            <img src="/images/ReBear_mark.png" alt="" class="footer-logo">
            <p class="footer=copy">© 2025 ReBear LLC. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 250px 0 50px;

  background: linear-gradient(
    to bottom,
    rgba(255, 250, 250, 0) 0%,
    rgba(72, 68, 68, 0.15) 30%,
    rgba(140, 120, 120, 0.35) 70%
  );
  text-align: center;
}

.footer-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.footer-logo {
  width: 180px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.footer-copy {
  font-size: 16px;
  letter-spacing: 0.02em;
  color: rgba(77, 74, 74, 0.85);
}
</style>