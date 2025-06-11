import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@component/header/header.component';

@Component({
  selector: 'app-components',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {}
