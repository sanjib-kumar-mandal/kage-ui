import { Component } from '@angular/core';
import { CodePreviewComponent } from '@component/code-preview/code-preview.component';
import { KageBreadCrumb, KageBreadCrumbs, KageCard, KageButton } from 'kage-ui';

@Component({
  selector: 'app-card-preview',
  imports: [
    CodePreviewComponent,
    KageBreadCrumb,
    KageBreadCrumbs,
    KageCard,
    KageButton,
  ],
  templateUrl: './card-preview.component.html',
  styleUrl: './card-preview.component.scss',
})
export class CardPreviewComponent {
  htmlCode = `
  <kage-card style="width: 300px;">
      <img slot="card-image" src="https://images.unsplash.com/photo-1748810417930-987996d1a9e9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <h2 slot="card-title">Card title</h2>
      <p slot="card-subtitle">Card subtitle</p>
      <p slot="card-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nesciunt consequatur rerum suscipit dolores, harum magnam, corrupti sunt reprehenderit, doloremque architecto ab esse voluptatum voluptatibus blanditiis. Dolores, atque consectetur.</p>
      <div class="btns" slot="card-action">
          <kage-button fill="clear">Explore</kage-button>
          <kage-button fill="clear" color="danger">Explore</kage-button>
      </div>
  </kage-card>
  `;
  scssCode = ``;
  tsCode = `
  import { Component } from '@angular/core';
  import { KageCard } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCard, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;
}
