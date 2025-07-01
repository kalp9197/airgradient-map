import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.airgradient.map',
  appName: 'AirGradient Map',
  webDir: '.output/public',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    url: process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000',
    cleartext: true
  }
};
export default config;
