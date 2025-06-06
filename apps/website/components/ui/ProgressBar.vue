<script setup lang="ts">
  // Define props for the ProgressBar component
  const props = defineProps({
    /**
     * Indicates whether the progress bar should be shown.
     * @type {boolean}
     * @required
     */
    show: {
      type: Boolean,
      required: true
    }
  });
</script>

<template>
  <div style="height: 4px">
    <v-progress-linear v-if="show" color="grey-lighten-1" indeterminate></v-progress-linear>
  </div>
</template>
