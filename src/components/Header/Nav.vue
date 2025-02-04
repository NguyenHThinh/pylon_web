<template>
  <nav class="main__nav ms-auto">
    <ul class="el__menu">
      <li
        v-for="item in navList"
        :key="item.id"
        :class="{ 'menu-item': true, 'active': currentActive === item.id }"
      >
        <a :href="'#' + item.id" @click="$emit('selectNav', item.id)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  navList: {
    type: Array as PropType<{id: string, label: string}[]>,
    required: true,
  },
  currentActive: {
    type: String,
    required: true,
  }
})
</script>
