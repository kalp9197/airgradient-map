declare module 'nuxt/app' {
  interface NuxtApp {
    $formatDate: (value: string | Date | number, format?: string) => string;
  }
}

export {};
