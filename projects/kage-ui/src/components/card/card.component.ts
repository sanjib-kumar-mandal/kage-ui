import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'kage-card',
  imports: [RouterLink, RouterLinkWithHref, NgTemplateOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KageCard {
  href = input<string>();
  routerLink = input<string>();
}
