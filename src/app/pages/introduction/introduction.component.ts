import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@component/header/header.component';
import { KageIcon } from "../../../../projects/kage-ui/src/components/icon/icon.component";
import { KageCopyDirective } from 'kage-ui';
import { RouterLink } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [HeaderComponent, KageIcon, KageCopyDirective, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
}
