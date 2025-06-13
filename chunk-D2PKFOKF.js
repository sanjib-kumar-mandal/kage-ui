import{a as c}from"./chunk-3Z46KEDQ.js";import{f as l,h as d}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as n,bb as s,mb as i,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var C=class a{tsCode=`
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
  `;scssCode="";static \u0275fac=function(r){return new(r||a)};static \u0275cmp=s({type:a,selectors:[["app-bytes-preview"]],decls:14,vars:5,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","bytes Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,p){r&1&&(e(0,"p",0)(1,"span",1),o(2,"Pipe"),t()(),e(3,"h1"),o(4,"Bytes Pipe"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),o(11,"Implementation"),t(),e(12,"app-code-preview",5),o(13,` No preview
`),t()),r&2&&(n(6),i("href","/library"),n(),i("href","/library/bytes"),n(5),i("htmlCode",p.htmlCode)("tsCode",p.tsCode)("scssCode",p.scssCode))},dependencies:[c,l,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as BytesPreviewComponent};
