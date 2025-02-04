<template>
  <header class="header -fix">
    <div class="container container-xl d-flex align-items-center">
      <h1 class="logo">
        <a href="#">
          <NuxtImg src="/images/logo.svg" alt="Logo" />
        </a>
      </h1>

      <HeaderNav
        :nav-list="menuItems"
        :current-active="activeSection"
        @select-nav="handleChangeSection"
      />

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

      <HeaderNavMobile
        :class="{ active: isOpenNavMenu }"
        @select-nav="handleChangeSection"
        :nav-list="menuItems"
        :current-active="activeSection"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
const menuItems: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "home-pylon", label: "Pylon" },
  { id: "home-power-up-players", label: "Power Up Players" },
  { id: "home-form", label: "Pylon Form" },
  { id: "home-pylon-effect", label: "Pylon Effect" },
  { id: "home-earning-token", label: "Earning Token" },
  { id: "home-multiverse", label: "Multiverse" },
  { id: "home-portal-key", label: "Mutiserve Portal Key" },
  { id: "home-minivault", label: "Pylon’s Level & Minivault" },
];

const isOpenNavMenu = ref(false);

const activeSection = ref("home");

const handleChangeNavMenu = () => {
  isOpenNavMenu.value = !isOpenNavMenu.value;
};

const handleChangeSection = (id: string) => {
  activeSection.value = id;
  if (isOpenNavMenu.value === true) {
    isOpenNavMenu.value = false;
  }
};
</script>
