import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageAccordion } from 'kage-ui';

@Component({
  selector: 'app-accordion-preview',
  imports: [
    CodePreviewComponent,
    KageAccordion,
    KageBreadCrumb,
    KageBreadCrumbs,
  ],
  templateUrl: './accordion-preview.component.html',
  styleUrl: './accordion-preview.component.scss',
})
export class AccordionPreviewComponent {
  htmlCode = `<k-accordion [expanded]="true">
        <p slot="header">Section 1</p>
        <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
    </k-accordion>
    <k-accordion color="success">
        <p slot="header">Section 1</p>
        <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
    </k-accordion>
    <k-accordion color="danger">
        <p slot="header">Section 1</p>
        <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
    </k-accordion>
    <k-accordion color="warning">
        <p slot="header">Section 1</p>
        <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
    </k-accordion>`;
  scssCode = ``;
  tsCode = ``;
}
