<template>
  <span v-html="label"></span>
</template>

<script setup lang="ts">
  defineProps<{ label: string }>();
</script>
