import{a as c}from"./chunk-EMCF4G2S.js";import{g as l,i as d}from"./chunk-D5UNUWQL.js";import"./chunk-QPQTBMLC.js";import{Ga as i,Ra as s,ab as n,ib as e,jb as t,kb as m,yb as r}from"./chunk-6VEGNWUI.js";var C=class a{tsCode=`
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
  `;scssCode="";static \u0275fac=function(o){return new(o||a)};static \u0275cmp=s({type:a,selectors:[["app-bytes-preview"]],decls:12,vars:5,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","bytes Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,p){o&1&&(e(0,"p",0)(1,"span",1),r(2,"Pipe"),t()(),e(3,"h1"),r(4,"Bytes Pipe"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5),r(11,` No preview
`),t()),o&2&&(i(6),n("href","/library"),i(),n("href","/library/bytes"),i(3),n("htmlCode",p.htmlCode)("tsCode",p.tsCode)("scssCode",p.scssCode))},dependencies:[c,l,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as BytesPreviewComponent};
