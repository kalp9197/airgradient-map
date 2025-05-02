Location
<template>
  <UiDialog
    :title="props.dialog?.data.location.locationName"
    :size="DialogSize.XL"
    :hideFooter="true"
    :dialog="props.dialog"
  >
    <template #header>
      <div class="d-flex align-center justify-center gap-2 gap-md-3 pl-2 py-2 pr-5 flex-wrap">
        <h5 class="m-0">{{ mapLocationData?.locationName }}</h5>
        <v-chip>
          {{
            mapLocationData?.sensorType === SensorType.reference ? 'Reference' : 'Small Sensor'
          }}</v-chip
        >
      </div>
    </template>
    <template #body>
      <v-card-text>
      </v-card-text>
    </template>
  </UiDialog>
</template>

<script setup lang="ts">
  import { DialogSize, SensorType } from '~/types';
  import { onMounted, ref, Ref } from 'vue';

  import { DialogInstance, AGMapLocationData, LocationHistoryData } from '~/types';

  const props = defineProps<{
    dialog: DialogInstance<{ location: AGMapLocationData }>;
  }>();

  const mapLocationData: Ref<AGMapLocationData> = ref(null);
  const locationHistoryData: Ref<LocationHistoryData> = ref(null);
  const selectedPeriod: Ref<string> = ref('1h');

  onMounted(() => {
    mapLocationData.value = props.dialog?.data.location;
  });
</script>
