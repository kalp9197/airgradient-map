<template>
  <v-btn
    v-if="icon && !customIcon"
    :ripple="ripple"
    :disabled="disabled"
    :icon="icon"
    variant="plain"
    :class="['custom-icon-button', style]"
    :size="size === ButtonSize.NORMAL ? 'default' : 'small'"
    @click="handleClick"
  >
  </v-btn>

  <v-btn
    v-else-if="customIcon"
    :ripple="ripple"
    :disabled="disabled"
    variant="plain"
    :class="['custom-icon-button', style]"
    :size="size === ButtonSize.NORMAL ? 'default' : 'small'"
    @click="handleClick"
  >
    <img
      width="24"
      height="24"
      :src="`/images/icons/${customIcon}`"
      :alt="iconAlt"
      class="custom-icon"
    />
  </v-btn>

  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { ButtonSize } from '~/types';

  const props = defineProps({
    /**
     * Size of the icon button.
     * @type {ButtonSize}
     * @default ButtonSize.NORMAL
     */
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonSize.NORMAL
    },
    /**
     * Whether the button is disabled.
     * @type {boolean}
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to show ripple effect on click.
     * @type {boolean}
     * @default false
     */
    ripple: {
      type: Boolean,
      default: false
    },
    /**
     * Icon name for v-btn (e.g. 'mdi-close').
     * @type {string}
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * Path to custom SVG icon. Please use the public/images/icons/ folder to store your icons.
     * @type {string}
     */
    customIcon: {
      type: String,
      default: ''
    },
    /**
     * Alt text for custom icon.
     * @type {string}
     */
    iconAlt: {
      type: String,
      default: 'Icon'
    },
    /**
     * Style of the icon button.
     * @type {'normal' | 'map'}
     * @default 'normal'
     */
    style: {
      type: String as PropType<'normal' | 'map'>,
      default: 'normal'
    }
  });

  const emit = defineEmits(['click']);
  /**
   * Handles the button click event.
   * Emits a click event if the button is not disabled.
   * @param {Event} event - The click event.
   */
  const handleClick = (event: Event) => {
    if (!props.disabled) {
      emit('click', event);
    }
  };
</script>

<style scoped>
  .custom-icon-button:hover {
    transition: all var(--main-transition);
    color: var(--primary-color) !important;

    .custom-icon {
      filter: invert(42%) sepia(73%) saturate(323%) hue-rotate(171deg) brightness(113%)
        contrast(90%);
    }
  }

  .custom-icon-button.map {
    background-color: var(--main-white-color);
    width: 34px;
    height: 34px;
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    opacity: 1;

    &:hover {
      background-color: #f4f4f4;
      color: #000000 !important;
    }
  }

  .custom-icon {
    transition: all var(--main-transition);
    object-fit: contain;
  }
</style>
