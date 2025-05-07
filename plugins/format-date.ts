import { DateTime } from 'luxon';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  const formatDate = (value: string | Date | number, format: string = 'dd LLL yyyy'): string => {
    const date = DateTime.fromISO(
      typeof value === 'string' ? value : new Date(value).toISOString()
    );
    return date.isValid ? date.toFormat(format) : '';
  };

  return {
    provide: {
      formatDate
    }
  };
});
