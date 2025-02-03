<template>
  <Header />

  <div class="wrapper">
    <div class="el__stars">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>

    <SectionsHomeBanner />

    <SectionsHomePylon />

    <SectionsHomePlayer />

    <SectionsHomeForm />

    <SectionsHomeEffect />

    <SectionsHomeEarnToken />

    <SectionsHomeMultiverse />

    <SectionsHomePortalkey />

    <SectionsHomeMinivault />

    <SectionsFooterBanner />

    <FooterMenu />

    <Footer />

    <HeaderNavMobile />
  </div>
  <!-- .wrapper -->
</template>

<script lang="ts" setup>
useHead({
  title: "Gate Game",
  link: [
    {
      rel: "icon",
      href: "/images/favicon.png",
    }
  ],

  bodyAttrs: {
    class: "home",
  },
});
</script>

