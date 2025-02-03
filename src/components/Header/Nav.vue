<template>
  <nav class="main__nav ms-auto">
    <ul class="el__menu">
      <li
        v-for="item in menuItems"
        :key="item.id"
        :class="{ 'menu-item': true, 'active': activeSection === item.id }"
      >
        <a :href="'#' + item.id" @click.prevent="scrollTo(item.id)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
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

const activeSection = ref("home");

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  activeSection.value = id;
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 40,
      behavior: "smooth",
    });
  }
};
</script>
