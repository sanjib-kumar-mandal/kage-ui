import{a as C}from"./chunk-YX7X4TWZ.js";import{f as l,h as s,j as d}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as n,bb as m,mb as p,ub as e,vb as t,wb as c}from"./chunk-KDFRMSR3.js";var y=class a{htmlCode=`<p [kCopy]="'text here'">Click to copy</p>`;scssCode="";tsCode=`
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
  `;static \u0275fac=function(r){return new(r||a)};static \u0275cmp=m({type:a,selectors:[["app-copy-preview"]],decls:15,vars:4,consts:[[1,"page-tag"],[1,"directive"],["href","/library","label","Library"],["href","/library/copy","label","Copy Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"kageCopy"]],template:function(r,i){r&1&&(e(0,"p",0)(1,"span",1),o(2,"Directive"),t()(),e(3,"h1"),o(4,"Copy Directive"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Directive Behavior and Input Breakdown"),t(),e(10,"h3"),o(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"p",6),o(14,"Click to copy"),t()()),r&2&&(n(12),p("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode),n(),p("kageCopy","text here"))},dependencies:[C,d,l,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{y as CopyPreviewComponent};
