/// <reference types="@capacitor/core" />
declare global {
  interface Window {
    Capacitor: typeof import('@capacitor/core');
  }
}
