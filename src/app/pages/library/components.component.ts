import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  ViewChild,
  DOCUMENT
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@component/header/header.component';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-components',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  @ViewChild('container') container!: ElementRef;
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(
          filter((ev) => ev instanceof NavigationEnd),
          debounceTime(200)
        )
        .subscribe({
          next: () => {
            this.container.nativeElement.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          },
        });
    }
  }
}
