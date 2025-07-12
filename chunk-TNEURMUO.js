import{a as C}from"./chunk-UKFQHHSW.js";import{g as m,i as l,k as d}from"./chunk-3NKUUUGG.js";import"./chunk-5X2QXVHB.js";import{Ga as i,Ra as c,ab as n,ib as e,jb as t,kb as s,yb as o}from"./chunk-6VEGNWUI.js";var y=class a{htmlCode=`<p [kageCopy]="'text here'">Click to copy</p>`;scssCode="";tsCode=`
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
  `;static \u0275fac=function(r){return new(r||a)};static \u0275cmp=c({type:a,selectors:[["app-copy-preview"]],decls:13,vars:5,consts:[[1,"page-tag"],[1,"directive"],[3,"iconDepth"],["href","/library","label","Library"],["href","/library/copy","label","Copy Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"kageCopy"]],template:function(r,p){r&1&&(e(0,"p",0)(1,"span",1),o(2,"Directive"),t()(),e(3,"h1"),o(4,"Copy Directive"),t(),e(5,"kage-bread-crumbs",2),s(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),o(9,"The Kage-UI Copy Directive lets you easily copy text or values to the clipboard on user interaction. It supports click and hover triggers, custom feedback messages, and works seamlessly with both static and dynamic content\u2014ideal for enhancing UX in Angular apps."),t(),e(10,"app-code-preview",6)(11,"p",7),o(12,"Click to copy"),t()()),r&2&&(i(5),n("iconDepth",3),i(5),n("htmlCode",p.htmlCode)("scssCode",p.scssCode)("tsCode",p.tsCode),i(),n("kageCopy","text here"))},dependencies:[C,d,m,l],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{y as CopyPreviewComponent};
