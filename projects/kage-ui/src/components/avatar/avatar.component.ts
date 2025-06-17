import { Component, input } from '@angular/core';

@Component({
  selector: 'kage-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class KageAvatar {
  src = input<string>();
  alt = input<string>();
  cssClass = input<string>();
}
