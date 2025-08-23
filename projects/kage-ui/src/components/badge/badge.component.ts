import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'kage-badge',
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class KageBadge {
  cssClass = input<string>();
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'medium'
  >();
}
