import{a as h}from"./chunk-I7LMNX23.js";import{L as f,g as C,o as g}from"./chunk-YQTPIHLU.js";import"./chunk-QSYZJPWV.js";import{Da as e,Jb as r,Kb as m,Oa as l,Vb as c,Wb as d,jb as a,kb as t,lb as i,mb as s}from"./chunk-GXREA3OA.js";var b=class n{tsCode=`
  import { Component } from '@angular/core';
  import { KageCapitalizePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCapitalizePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode="<p>{{ 'hello world from Kage UI' | capitalize }}</p>";scssCode="";static \u0275fac=function(o){return new(o||n)};static \u0275cmp=l({type:n,selectors:[["app-capitalize-preview"]],decls:14,vars:9,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Capitalize Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,p){o&1&&(t(0,"p",0)(1,"span",1),r(2,"Pipe"),i()(),t(3,"h1"),r(4,"Capitalize Pipe"),i(),t(5,"kage-bread-crumbs",2),s(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),i(),t(8,"p",5),r(9,"The Kage-UI Capitalize Pipe transforms the first letter of a string (or each word) to uppercase. It's perfect for formatting titles, labels, or user-generated content with consistent capitalization in Angular applications."),i(),t(10,"app-code-preview",6)(11,"p"),r(12),c(13,"capitalize"),i()()),o&2&&(e(5),a("iconDepth",3),e(),a("href","/library"),e(),a("href","/library/bytes"),e(3),a("htmlCode",p.htmlCode)("tsCode",p.tsCode)("scssCode",p.scssCode),e(2),m(d(13,7,"hello world from Kage UI")))},dependencies:[h,C,g,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{b as CapitalizePreviewComponent};
