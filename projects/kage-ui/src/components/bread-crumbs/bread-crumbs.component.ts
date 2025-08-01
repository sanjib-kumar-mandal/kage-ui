import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  inject,
  input,
  QueryList,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { KageBreadCrumb } from '../bread-crumb/bread-crumb.component';
import { KageIcon } from '../icon/icon.component';
import { KageRippleDirective } from "../../directives/directives";
import { Location } from '@angular/common';

@Component({
  selector: 'kage-bread-crumbs',
  imports: [KageIcon, KageRippleDirective, RouterLink],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageBreadCrumbs {
  cssClass = input<string>();
  iconDepth = input<number>();
  @ContentChildren(KageBreadCrumb)
  breadCrumps!: QueryList<KageBreadCrumb>;

  private location = inject(Location);

  backToPreviousPage() {
    this.location.back()
  }
}
