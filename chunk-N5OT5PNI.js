import{a as u}from"./chunk-EBNXTHRV.js";import{f as c,h as p,n as d,q as g}from"./chunk-HX5R5U6X.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Sa as l,bb as s,mb as o,ub as e,vb as t,wb as n}from"./chunk-KDFRMSR3.js";var b=class m{tsCode=`
  import { Component } from '@angular/core';
  import { KageImageFallbackDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageImageFallbackDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <kage-card>
        <div slot="card-image" style="height: 220px;display: flex;align-items: center;justify-content: center;background: color-mix(in srgb, var(--color-background) 90%, var(--color-medium) 10%);">
            <img [kageImageFallback]="'assets/no-image.png'" src="assets/features/image-fallback.png" alt="">
        </div>
        <h2 slot="card-title">Image Fallback</h2>
        <p slot="card-content" class="line-limit-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem id illum mollitia sunt quis perspiciatis eaque amet delectus labore voluptas iure exercitationem laboriosam, sit, nostrum dolores, iste repellat tempore?</p>
    </kage-card>
  `;scssCode="";static \u0275fac=function(i){return new(i||m)};static \u0275cmp=s({type:m,selectors:[["app-image-fallback"]],decls:19,vars:4,consts:[[1,"page-tag"],[1,"directive"],["href","/library","label","Library"],["href","/library/copy","label","Copy Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"cards"],["slot","card-image",2,"height","220px","display","flex","align-items","center","justify-content","center","background","color-mix(in srgb, var(--color-background) 90%, var(--color-medium) 10%)"],["src","assets/features/image-fallback.png","alt","",3,"kageImageFallback"],["slot","card-title"],["slot","card-content",1,"line-limit-3"]],template:function(i,r){i&1&&(e(0,"p",0)(1,"span",1),a(2,"Directive"),t()(),e(3,"h1"),a(4,"Copy Directive"),t(),e(5,"kage-bread-crumbs"),n(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"Directive Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-card")(13,"div",7),n(14,"img",8),t(),e(15,"h2",9),a(16,"Image Fallback"),t(),e(17,"p",10),a(18,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem id illum mollitia sunt quis perspiciatis eaque amet delectus labore voluptas iure exercitationem laboriosam, sit, nostrum dolores, iste repellat tempore?"),t()()()()),i&2&&(l(10),o("htmlCode",r.htmlCode)("scssCode",r.scssCode)("tsCode",r.tsCode),l(4),o("kageImageFallback","assets/no-image.png"))},dependencies:[c,p,u,g,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}"]})};export{b as ImageFallbackComponent};
