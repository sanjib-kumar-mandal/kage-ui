import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';

@Component({
  selector: 'kage-col',
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrls: ['./col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageCol {
  // Responsive span inputs
  xs = input<number>();
  sm = input<number>();
  md = input<number>();
  lg = input<number>();
  xl = input<number>();
  // Responsive offsets
  offsetXs = input<number>();
  offsetSm = input<number>();
  offsetMd = input<number>();
  offsetLg = input<number>();
  offsetXl = input<number>();
  // Non-responsive fallback
  span = input<number>();
  offset = input<number>();

  @HostBinding('class.xs') get isXs() {
    return this.xs() != null;
  }
  @HostBinding('class.sm') get isSm() {
    return this.sm() != null;
  }
  @HostBinding('class.md') get isMd() {
    return this.md() != null;
  }
  @HostBinding('class.lg') get isLg() {
    return this.lg() != null;
  }
  @HostBinding('class.xl') get isXl() {
    return this.xl() != null;
  }

  // Default stack unless xs is provided
  @HostBinding('class.auto-stack') get autoStack() {
    return (
      this.xs() == null &&
      this.sm() == null &&
      this.md() == null &&
      this.lg() == null &&
      this.xl() == null
    );
  }

  // Dynamic CSS vars for responsive spans
  @HostBinding('style.--xs-span') get xsSpan() {
    return this.xs() ? `${(this.xs()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--sm-span') get smSpan() {
    return this.sm() ? `${(this.sm()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--md-span') get mdSpan() {
    return this.md() ? `${(this.md()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--lg-span') get lgSpan() {
    return this.lg() ? `${(this.lg()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--xl-span') get xlSpan() {
    return this.xl() ? `${(this.xl()! / 12) * 100}%` : null;
  }

  // Offsets
  @HostBinding('style.--xs-offset') get xsOffset() {
    return this.offsetXs() ? `${(this.offsetXs()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--sm-offset') get smOffset() {
    return this.offsetSm() ? `${(this.offsetSm()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--md-offset') get mdOffset() {
    return this.offsetMd() ? `${(this.offsetMd()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--lg-offset') get lgOffset() {
    return this.offsetLg() ? `${(this.offsetLg()! / 12) * 100}%` : null;
  }
  @HostBinding('style.--xl-offset') get xlOffset() {
    return this.offsetXl() ? `${(this.offsetXl()! / 12) * 100}%` : null;
  }

  // Non-responsive fallback
  @HostBinding('style.flex') get baseFlex() {
    return this.span() != null ? `0 0 ${(this.span()! / 12) * 100}%` : null;
  }

  @HostBinding('style.margin-left') get baseOffset() {
    return this.offset() != null ? `${(this.offset()! / 12) * 100}%` : null;
  }
}
