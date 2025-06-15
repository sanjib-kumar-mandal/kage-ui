import{a as v}from"./chunk-YF2ACYI7.js";import{L as b,f as k,h as g}from"./chunk-ACFFGCAZ.js";import"./chunk-CZ7SOAWQ.js";import{Ga as i,Ib as m,Jb as C,Mb as l,Ra as c,ab as p,ib as e,jb as t,kb as n,wb as a,xb as o}from"./chunk-WWKGYV7J.js";var f=class d{tsCode=`
  import { Component } from '@angular/core';
  import { KageMaskPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageMaskPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <!-- Mask all but last 4 digits of card -->
    <p>{{ '1234567812345678' | mask:'*':0:4 }}</p>

    <!-- Mask email address (keep 2 start + domain) -->
    <p>{{ 'john.doe@example.com' | mask:'*':2:12 }}</p>

    <!-- Mask everything -->
    <p>{{ 'SecretValue' | mask }}</p>
  `;scssCode="";static \u0275fac=function(r){return new(r||d)};static \u0275cmp=c({type:d,selectors:[["app-mask-preview"]],decls:24,vars:20,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Mask Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,s){r&1&&(e(0,"p",0)(1,"span",1),a(2,"Pipe"),t()(),e(3,"h1"),a(4,"Mask Pipe"),t(),e(5,"kage-bread-crumbs"),n(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p"),a(12),m(13,"mask"),t(),n(14,"br")(15,"br"),e(16,"p"),a(17),m(18,"mask"),t(),n(19,"br")(20,"br"),e(21,"p"),a(22),m(23,"mask"),t()()),r&2&&(i(6),p("href","/library"),i(),p("href","/library/bytes"),i(3),p("htmlCode",s.htmlCode)("tsCode",s.tsCode)("scssCode",s.scssCode),i(2),o(l(13,8,"1234567812345678","*",0,4)),i(5),o(l(18,13,"john.doe@example.com","*",2,12)),i(5),o(C(23,18,"SecretValue")))},dependencies:[v,k,g,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as MaskPreviewComponent};
