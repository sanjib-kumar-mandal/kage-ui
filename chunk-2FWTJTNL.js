import{a as u}from"./chunk-OPPKJ6H4.js";import{g as c,n as p,o as d,r as g}from"./chunk-A4CCQ3TQ.js";import"./chunk-LXJ7KHNF.js";import{Ga as l,Ra as m,ab as r,jb as e,kb as a,lb as n,zb as t}from"./chunk-TROVTPPJ.js";var b=class s{tsCode=`
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
  `;scssCode="";static \u0275fac=function(i){return new(i||s)};static \u0275cmp=m({type:s,selectors:[["app-image-fallback"]],decls:19,vars:5,consts:[[1,"page-tag"],[1,"directive"],[3,"iconDepth"],["href","/library","label","Library"],["href","/library/copy","label","Copy Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"cards"],["slot","card-image",2,"height","220px","display","flex","align-items","center","justify-content","center","background","color-mix(in srgb, var(--color-background) 90%, var(--color-medium) 10%)"],["src","assets/features/image-fallback.png","alt","",3,"kageImageFallback"],["slot","card-title"],["slot","card-content",1,"line-limit-3"]],template:function(i,o){i&1&&(e(0,"p",0)(1,"span",1),t(2,"Directive"),a()(),e(3,"h1"),t(4,"Copy Directive"),a(),e(5,"kage-bread-crumbs",2),n(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),a(),e(8,"p",5),t(9,"The Kage-UI Image Fallback Directive automatically replaces broken or failed image sources with a fallback image. It ensures graceful degradation, improves UX, and works seamlessly with dynamic src values\u2014ideal for handling unreliable image URLs in Angular apps."),a(),e(10,"app-code-preview",6)(11,"div",7)(12,"kage-card")(13,"div",8),n(14,"img",9),a(),e(15,"h2",10),t(16,"Image Fallback"),a(),e(17,"p",11),t(18,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem id illum mollitia sunt quis perspiciatis eaque amet delectus labore voluptas iure exercitationem laboriosam, sit, nostrum dolores, iste repellat tempore?"),a()()()()),i&2&&(l(5),r("iconDepth",3),l(5),r("htmlCode",o.htmlCode)("scssCode",o.scssCode)("tsCode",o.tsCode),l(4),r("kageImageFallback","assets/no-image.png"))},dependencies:[c,d,u,g,p],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}"]})};export{b as ImageFallbackComponent};
