import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'kage-card',
  imports: [RouterLink, RouterLinkWithHref, NgTemplateOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class KageCard {
  href = input<string>();
  cssClass = input<string>();
}
