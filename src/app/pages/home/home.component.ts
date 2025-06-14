import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { environment } from '@env/environment';
// import { environement } from 'src/environment/environment';
import { KageIcon } from 'kage-ui';

@Component({
  selector: 'k-home',
  imports: [RouterLink, MatIconModule, KageIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  published = environment.links;
  donate() {
    // window.open(environement.paypal, '_blank');
  }
}
