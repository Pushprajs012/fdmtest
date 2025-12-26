export {};

declare global {
  interface Window {
    Native: {
      showToast: (data?: {
        text?: string;
        duration?: 'short' | 'long';
        position?: 'top' | 'center' | 'bottom';
      }) => void;
    };
  }
}
