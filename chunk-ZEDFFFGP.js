import{a as v}from"./chunk-2UWFFPLZ.js";import{K as b,f as k,h as g}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Jb as o,Sa as a,Tb as m,Ub as C,Xb as l,bb as c,mb as r,ub as e,vb as t,wb as p}from"./chunk-KDFRMSR3.js";var f=class d{tsCode=`
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
  `;scssCode="";static \u0275fac=function(n){return new(n||d)};static \u0275cmp=c({type:d,selectors:[["app-mask-preview"]],decls:26,vars:20,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Mask Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,s){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Mask Pipe"),t(),e(5,"kage-bread-crumbs"),p(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),i(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"p"),i(14),m(15,"mask"),t(),p(16,"br")(17,"br"),e(18,"p"),i(19),m(20,"mask"),t(),p(21,"br")(22,"br"),e(23,"p"),i(24),m(25,"mask"),t()()),n&2&&(a(6),r("href","/library"),a(),r("href","/library/bytes"),a(5),r("htmlCode",s.htmlCode)("tsCode",s.tsCode)("scssCode",s.scssCode),a(2),o(l(15,8,"1234567812345678","*",0,4)),a(5),o(l(20,13,"john.doe@example.com","*",2,12)),a(5),o(C(25,18,"SecretValue")))},dependencies:[v,k,g,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as MaskPreviewComponent};
