<template>
  <section id="home-pylon" class="home-about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2 wow fadeInUp">
          <div class="ratio ratio-16x9 video-play__wrapper">
            <video
              id="video"
              preload="auto"
              autoplay
              muted
              loop
              playsinline
              poster=""
            >
              <source src="/images/home-video.mp4" type="video/mp4" />
            </video>

            <!--  <div class="play-button-wrapper">
              <div title="Play video" class="play-gif btn-video-play">
              </div>
            </div> -->
          </div>
        </div>

        <div class="col-lg-6 order-lg-2 wow fadeInRight">
          <div class="el__meta">
            <header class="sc__header">
              <h2 class="sc__header__title">Pylon</h2>
              <p class="sc__header__sub">
                Collectible BEP-721 NFT built on
                <strong>Binance Smart Chain</strong>
              </p>
              <div class="sc__header__excerpt">
                To "upgrade" players as they play games and equip Pylons.<br />
                The details of the “upgrade” will depend on the type and quality
                of the Pylon equipped.
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
