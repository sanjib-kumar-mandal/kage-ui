import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KageIcon } from 'kage-ui';

@Component({
  selector: 'k-header',
  imports: [RouterLink, KageIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
