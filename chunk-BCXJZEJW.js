import{a as v}from"./chunk-H3NPU7JE.js";import{g as c,m as s,o as m}from"./chunk-DQZS6GQ3.js";import"./chunk-QSYZJPWV.js";import{Da as p,Jb as t,Oa as a,jb as o,kb as e,lb as i,mb as d}from"./chunk-GXREA3OA.js";var g=class l{htmlCode=`<div kageRipple [rippleColor]="'red'">Click me</div>`;scssCode=`
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
  `;static \u0275fac=function(r){return new(r||l)};static \u0275cmp=a({type:l,selectors:[["app-ripple-directive-preview"]],decls:13,vars:5,consts:[[1,"page-tag"],[1,"directive"],[3,"iconDepth"],["href","/library","label","Library"],["href","/library/ripple","label","Ripple Directive"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["kageRipple","",2,"display","inline-block","padding","7px 15px","border","2px solid red",3,"rippleColor"]],template:function(r,n){r&1&&(e(0,"p",0)(1,"span",1),t(2,"Directive"),i()(),e(3,"h1"),t(4,"Ripple Directive"),i(),e(5,"kage-bread-crumbs",2),d(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),i(),e(8,"p",5),t(9,"The Kage-UI Ripple Directive adds a material-style ripple animation to elements on interaction, enhancing user feedback. It's lightweight, customizable in color and duration, and works seamlessly with buttons, cards, or any clickable element in Angular applications."),i(),e(10,"app-code-preview",6)(11,"div",7),t(12,"Click me"),i()()),r&2&&(p(5),o("iconDepth",3),p(5),o("htmlCode",n.htmlCode)("scssCode",n.scssCode)("tsCode",n.tsCode),p(),o("rippleColor","red"))},dependencies:[v,c,m,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{g as RippleDirectivePreviewComponent};
