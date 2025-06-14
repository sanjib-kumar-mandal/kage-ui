import{a as b}from"./chunk-GEEGI6SP.js";import{J as f,f as C,h as g}from"./chunk-J4VQ6NPB.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Jb as s,Sa as i,Tb as d,Ub as c,bb as l,mb as p,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var v=class n{tsCode=`
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
  `;htmlCode="<p>{{ 'hello world from Kage UI' | capitalize }}</p>";scssCode="";static \u0275fac=function(o){return new(o||n)};static \u0275cmp=l({type:n,selectors:[["app-capitalize-preview"]],decls:14,vars:8,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Capitalize Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,r){o&1&&(e(0,"p",0)(1,"span",1),a(2,"Pipe"),t()(),e(3,"h1"),a(4,"Capitalize Pipe"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p"),a(12),d(13,"capitalize"),t()()),o&2&&(i(6),p("href","/library"),i(),p("href","/library/bytes"),i(3),p("htmlCode",r.htmlCode)("tsCode",r.tsCode)("scssCode",r.scssCode),i(2),s(c(13,6,"hello world from Kage UI")))},dependencies:[b,C,g,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as CapitalizePreviewComponent};
