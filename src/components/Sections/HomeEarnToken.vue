<template>
  <section id="home-earning-token" class="home-token">
    <div class="container">
      <header class="sc__header text-center">
        <h2 class="sc__header__title wow fadeInLeft">Earning Token</h2>
        <div class="sc__header__excerpt wow fadeInRight">
          When a player plays games in GG Metaverse, and equips pylon, the pylon
          becomes active and allows <br class="pc" />the player to earn tokens
          intrinsic to the Game being played
        </div>
      </header>
      <div class="wow fadeInUp">
        <div class="home-token__slider">
          <swiper-container
            class="col-12 slider__item__wrap earn-token__slider__wrap"
            ref="earnTokenSlider"
            :init="false"
          >
            <swiper-slide
              class="slider__item__thumb"
              v-for="slide in SLIDES_DATA"
              :key="slide.id"
            >
              <div class="dnfix__thumb -contain">
                <NuxtImg :src="slide.thumbnail" alt="" />
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="earn-token__controler">
            <div class="earn-token__button earn-token__button__prev">
              <NuxtImg src="/images/arrow-right.png" alt="" />
            </div>
            <div class="earn-token__button earn-token__button__next">
              <NuxtImg src="/images/arrow-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const SLIDES_DATA = [
  {
    id: "slide1",
    thumbnail: "/images/home-token-img-01.png",
  },
  {
    id: "slide2",
    thumbnail: "/images/home-token-img-02.png",
  },
  {
    id: "slide3",
    thumbnail: "/images/home-token-img-03.png",
  },
];

// swiper config
const earnTokenSlider = ref(null);
useSwiper(earnTokenSlider, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".earn-token__button__next",
    prevEl: ".earn-token__button__prev",
  },
});
</script>

<style scoped>
.earn-token__slider__wrap {
  max-width: 995px;
  position: relative;
}
.earn-token__controler {
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.earn-token__button {
  opacity: .3;
  cursor: pointer;
  transition: all .3s;
}
.earn-token__button:hover {
  opacity: 1;
}
.earn-token__button__prev {
  transform: rotate(180deg);
}
.earn-token__button__next {
}
</style>
