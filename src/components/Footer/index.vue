<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="container">
        <div class="row gx-lg-5">
          <div class="col-lg-3">
            <div class="footer__logo">
              <NuxtLink href="/">
                <NuxtImg
                  src="/images/footer-logo.svg"
                  alt="Logo"
                  width="100%"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-2 col-6">
            <div class="footer__item">
              <h3 class="footer__title">Community</h3>
              <ul class="footer__list">
                <li>
                  <NuxtLink href="#">Suggest Feature</NuxtLink>
                </li>
                <li>
                  <NuxtLink href="#">Help Center</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-6">
            <div class="footer__item">
              <h3 class="footer__title">Legal</h3>
              <ul class="footer__list">
                <li>
                  <NuxtLink href="#">Privacy policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink href="#">Terms and conditions</NuxtLink>
                </li>
                <li>
                  <NuxtLink href="#">Cookie policy</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="footer__item">
              <h3 class="footer__title">Connect social</h3>
              <ul class="footer__socical">
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-telegram"></span>Telegram</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-youtube"></span>YouTube</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-instagram"></span>Instagram</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-wechat"></span>WeChat</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-linkedin"></span>Linkedin</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-twitter"></span>Twitter</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-facebook-circle"></span
                    >Facebook</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink href="#" target="_blank"
                    ><span class="icon-zalo"></span>Zalo</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
