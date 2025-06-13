import { Component } from '@angular/core';
import { KageCard, KageImageFallbackDirective } from "kage-ui";

@Component({
  selector: 'k-all',
  imports: [KageCard, KageImageFallbackDirective],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllComponent {}
