<template>
  <header class="header -fix">
    <div class="container container-xl d-flex align-items-center">
      <h1 class="logo">
        <a href="#">
          <NuxtImg src="/images/logo.svg" alt="Logo" />
        </a>
      </h1>
      
      <HeaderNav />
      
      <div class="menu-mb__btn ms-auto" data-id="menu__mobile">
        <span class="iconz-bar"></span>
        <span class="iconz-bar"></span>
        <span class="iconz-bar"></span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
