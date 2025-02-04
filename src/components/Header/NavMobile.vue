<template>
  <nav id="menu__mobile" class="nav__mobile">
    <div class="nav__mobile__content px-3">
      <ul class="nav__mobile--ul">
        <li
          :class="{ 'menu-item': true, 'active': currentActive === item.id }"
          v-for="item in navList"
          :key="item.id"
          @click="$emit('selectNav', item.id)"
        >
          <a :href="'#' + item.id">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineProps({
  navList: {
    type: Array as PropType<{ id: string; label: string }[]>,
    required: true,
  },
  currentActive: {
    type: String,
    required: true,
  },
});
</script>
