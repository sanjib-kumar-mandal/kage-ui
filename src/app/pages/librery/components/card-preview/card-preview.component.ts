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
  htmlCode = `<k-card style="width: 300px;">
        <img slot="card-image" src="Your image url" alt="">
        <h2 slot="card-title">Card title</h2>
        <p slot="card-subtitle">Card subtitle</p>
        <p slot="card-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nesciunt consequatur rerum suscipit dolores, harum magnam, corrupti sunt reprehenderit, doloremque architecto ab esse voluptatum voluptatibus blanditiis. Dolores, atque consectetur.</p>
        <div class="btns" slot="card-action">
            <k-button fill="clear">Explore</k-button>
            <k-button fill="clear" color="danger">Explore</k-button>
        </div>
    </k-card>`;
  scssCode = `scss code`;
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
