import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'kage-grid',
  imports: [NgClass],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class KageGrid {
  gap = input<0 | 1 | 2 | 3 | 4>(0);
}
