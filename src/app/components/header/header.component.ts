import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KageIcon } from 'kage-ui';
import { environment } from '@env/environment';

@Component({
  selector: 'app-header',
  imports: [RouterLink, KageIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  publishingAreas = environment.links;
}
