import{a as C}from"./chunk-EMCF4G2S.js";import{g as l,i as s,k as d}from"./chunk-D5UNUWQL.js";import"./chunk-QPQTBMLC.js";import{Ga as p,Ra as m,ab as n,ib as e,jb as t,kb as c,yb as o}from"./chunk-6VEGNWUI.js";var y=class a{htmlCode=`<p [kageCopy]="'text here'">Click to copy</p>`;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageCopyDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCopyDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(r){return new(r||a)};static \u0275cmp=m({type:a,selectors:[["app-copy-preview"]],decls:13,vars:4,consts:[[1,"page-tag"],[1,"directive"],["href","/library","label","Library"],["href","/library/copy","label","Copy Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"kageCopy"]],template:function(r,i){r&1&&(e(0,"p",0)(1,"span",1),o(2,"Directive"),t()(),e(3,"h1"),o(4,"Copy Directive"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Directive Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p",6),o(12,"Click to copy"),t()()),r&2&&(p(10),n("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode),p(),n("kageCopy","text here"))},dependencies:[C,d,l,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{y as CopyPreviewComponent};
