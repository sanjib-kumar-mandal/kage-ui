import{a as v}from"./chunk-AOOLJF6A.js";import{f as m,h as c,m as s}from"./chunk-K5VWRVRZ.js";import"./chunk-3GFDRZ37.js";import{Ib as r,Sa as o,bb as a,mb as n,ub as e,vb as i,wb as d}from"./chunk-KDFRMSR3.js";var C=class l{htmlCode=`<div kageRipple [rippleColor]="'red'">Click me</div>`;scssCode=`
    div {
      display: inline-block; 
      padding: 7px 15px; 
      border: 2px solid red;
    }
  `;tsCode=`
  import { Component } from '@angular/core';
  import { KageRippleDirective } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRippleDirective, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(t){return new(t||l)};static \u0275cmp=a({type:l,selectors:[["app-ripple-directive-preview"]],decls:13,vars:4,consts:[[1,"page-tag"],[1,"directive"],["href","/library","label","Library"],["href","/library/ripple","label","Ripple Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["kageRipple","",2,"display","inline-block","padding","7px 15px","border","2px solid red",3,"rippleColor"]],template:function(t,p){t&1&&(e(0,"p",0)(1,"span",1),r(2,"Directive"),i()(),e(3,"h1"),r(4,"Ripple Directive"),i(),e(5,"kage-bread-crumbs"),d(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),i(),e(8,"p",4),r(9,"Directive Behavior and Input Breakdown"),i(),e(10,"app-code-preview",5)(11,"div",6),r(12,"Click me"),i()()),t&2&&(o(10),n("htmlCode",p.htmlCode)("scssCode",p.scssCode)("tsCode",p.tsCode),o(),n("rippleColor","red"))},dependencies:[v,m,c,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as RippleDirectivePreviewComponent};
