import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class KageMaskPipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    maskChar: string = '*',
    visibleStart: number = 0,
    visibleEnd: number = 0,
    preset?: 'email' | 'phone' | 'card'
  ): string {
    if (!value || typeof value !== 'string') return '';

    // Handle presets
    if (preset) {
      switch (preset) {
        case 'email':
          return this.maskEmail(value, maskChar);
        case 'phone':
          return this.maskPhone(value, maskChar);
        case 'card':
          return this.maskCard(value, maskChar);
      }
    }

    // Default masking logic
    const start = value.slice(0, visibleStart);
    const end = visibleEnd > 0 ? value.slice(-visibleEnd) : '';
    const maskedLength = value.length - (visibleStart + visibleEnd);
    const masked = maskChar.repeat(Math.max(maskedLength, 0));
    return `${start}${masked}${end}`;
  }

  private maskEmail(email: string, maskChar: string): string {
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const visible = 2;
    const masked = maskChar.repeat(Math.max(local.length - visible, 0));
    return local.slice(0, visible) + masked + '@' + domain;
  }

  private maskPhone(phone: string, maskChar: string): string {
    const clean = phone.replace(/\D/g, '');
    if (clean.length < 10) return phone;
    return (
      clean.slice(0, 2) + maskChar.repeat(clean.length - 6) + clean.slice(-4)
    );
  }

  private maskCard(card: string, maskChar: string): string {
    const clean = card.replace(/\D/g, '');
    if (clean.length < 12) return card;
    return maskChar.repeat(clean.length - 4) + clean.slice(-4);
  }
}
