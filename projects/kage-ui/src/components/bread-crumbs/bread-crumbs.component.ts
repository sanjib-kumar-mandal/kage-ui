import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { KageBreadCrumb } from '../bread-crumb/bread-crumb.component';
import { KageIcon } from '../icon/icon.component';

@Component({
  selector: 'kage-bread-crumbs',
  imports: [KageIcon, RouterLink],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KageBreadCrumbs {
  @ContentChildren(KageBreadCrumb)
  breadCrumps!: QueryList<KageBreadCrumb>;
}
