export type KageToastType = 'success' | 'danger' | 'info' | 'warning';
export type KageToastPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export interface KageToastOptions {
  message: string;
  type?: KageToastType;
  duration?: number;
  position?: KageToastPosition;
}
