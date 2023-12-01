import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ngcc-modules',
  webDir: 'dist/ngcc-modules',
  server: {
    androidScheme: 'https'
  }
};

export default config;
