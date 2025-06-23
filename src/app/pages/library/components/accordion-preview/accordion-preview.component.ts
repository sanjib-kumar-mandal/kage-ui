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
  htmlCode = `
  <kage-accordion [expanded]="true">
      <p slot="header">Section 1</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="success">
      <p slot="header">Section 2</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="danger">
      <p slot="header">Section 3</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="warning">
      <p slot="header">Section 4</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  `;
  scssCode = ``;
  tsCode = `
      import { Component } from '@angular/core';
      import { KageAccordion } from 'kage-ui';
      ...

      @Component({
        selector: 'app-example',
        imports: [ KageAccordion, ... ],
        templateUrl: '...',
        styleUrl: '...',
      })
      export class AppExampleComponent {}
    `;
}
