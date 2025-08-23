import { Component, computed, input, output } from '@angular/core';
import { PaginationInfo } from './pagination.interface';
import { KageButton } from '../button/button.component';
import { KageIcon } from '../icon/icon.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'kage-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  imports: [KageButton, KageIcon, DecimalPipe],
})
export class KagePagination {
  onPageChange = output<number>();
  info = input.required<PaginationInfo>();
  color = input<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'medium'
  >('primary');

  pages = computed(() => {
    const total = this.info().totalPages;
    const current = this.info().currentPage;
    const pages: (number | string)[] = [];

    if (total <= 8) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      // always show first 3
      pages.push(1, 2, 3);

      // if current is far from start, add ellipsis
      if (current > 5) pages.push('...');

      // middle pages (current-1, current, current+1)
      const start = Math.max(4, current - 1);
      const end = Math.min(total - 3, current + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      // if current is far from end, add ellipsis
      if (current < total - 4) pages.push('...');

      // last 3
      pages.push(total - 2, total - 1, total);
    }
    return pages;
  });

  previousPage() {
    this.toPage(this.info().currentPage - 1);
  }

  nextPage() {
    this.toPage(this.info().currentPage + 1);
  }

  toPage(page: number) {
    if (page >= 1 && page <= this.info().totalPages) {
      this.onPageChange.emit(page);
    }
  }
}
