export type AlertButtonColor = 'info' | 'success' | 'warning' | 'danger';

export interface AlertButton {
  label: string;
  role?: 'confirm' | 'cancel' | string;
  handler?: () => void | Promise<void>;
  primary?: boolean;
  disabled?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info';
}

export interface AlertInput {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
}

export interface AlertOptions {
  title?: string;
  message: string;
  dismissible?: boolean;
  buttons?: AlertButton[];
  inputs?: AlertInput[];
}
