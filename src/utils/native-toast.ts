import { Toast } from '@capacitor/toast';
import { Capacitor } from '@capacitor/core';

const handler = async (event: any) => {
  const data = event.data;

  if (!data || data.type !== 'SHOW_TOAST') return;
  if (!Capacitor.isNativePlatform()) return;

  await Toast.show({
    text: data.text || 'Hello from Web',
    duration: 'short',
    position: 'bottom',
  });
};

// ✅ IMPORTANT
document.addEventListener('message', handler); // Android
window.addEventListener('message', handler);   // iOS / browser
