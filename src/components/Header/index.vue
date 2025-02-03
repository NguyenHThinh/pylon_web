<template>
  <header class="header -fix">
    <div class="container container-xl d-flex align-items-center">
      <h1 class="logo">
        <a href="#">
          <NuxtImg src="/images/logo.svg" alt="Logo" />
        </a>
      </h1>

      <HeaderNav />

      <div
        class="menu-mb__btn ms-auto"
        data-id="menu__mobile"
        :class="{ active: isOpenNavMenu }"
        @click="handleChangeNavMenu"
      >
        <span class="iconz-bar"></span>
        <span class="iconz-bar"></span>
        <span class="iconz-bar"></span>
      </div>

      <HeaderNavMobile :class="{ active: isOpenNavMenu }" />
    </div>
  </header>
</template>

<script lang="ts" setup>
const isOpenNavMenu = ref(false);

const handleChangeNavMenu = () => {
  isOpenNavMenu.value = !isOpenNavMenu.value;
};
</script>
