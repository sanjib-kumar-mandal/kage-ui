import{a as c}from"./chunk-IEV3VUBJ.js";import{g as l,i as d}from"./chunk-YZ425KXR.js";import"./chunk-5X2QXVHB.js";import{Ga as o,Ra as s,ab as r,ib as e,jb as t,kb as m,yb as i}from"./chunk-6VEGNWUI.js";var y=class a{tsCode=`
  import { Component } from '@angular/core';
  import { KageBytesPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageBytesPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <p>{{ 1048576 | bytes }}</p>
    <!-- Output: "1 MB" -->

    <p>{{ 2048 | bytes:0 }}</p>
    <!-- Output: "2 KB" -->
  `;scssCode="";static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["app-bytes-preview"]],decls:12,vars:6,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","bytes Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,p){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Bytes Pipe"),t(),e(5,"kage-bread-crumbs",2),m(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),i(9,"The Kage-UI Bytes Pipe formats raw byte values into human-readable file sizes (e.g., 1024 \u2192 1 KB). It supports custom precision and units, making it ideal for displaying file sizes, memory usage, or network data in Angular applications."),t(),e(10,"app-code-preview",6),i(11,` No preview
`),t()),n&2&&(o(5),r("iconDepth",3),o(),r("href","/library"),o(),r("href","/library/bytes"),o(3),r("htmlCode",p.htmlCode)("tsCode",p.tsCode)("scssCode",p.scssCode))},dependencies:[c,l,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{y as BytesPreviewComponent};
