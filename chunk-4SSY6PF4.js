import{a as u}from"./chunk-SBKFTLTF.js";import{N as b,g as k,o as C}from"./chunk-LMKEWPLL.js";import"./chunk-QSYZJPWV.js";import{Da as e,Jb as i,Kb as o,Oa as c,Vb as s,Wb as g,Zb as l,jb as r,kb as t,lb as a,mb as p}from"./chunk-GXREA3OA.js";var v=class d{tsCode=`
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
  `;scssCode="";static \u0275fac=function(n){return new(n||d)};static \u0275cmp=c({type:d,selectors:[["app-mask-preview"]],decls:24,vars:21,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Mask Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,m){n&1&&(t(0,"p",0)(1,"span",1),i(2,"Pipe"),a()(),t(3,"h1"),i(4,"Mask Pipe"),a(),t(5,"kage-bread-crumbs",2),p(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),a(),t(8,"p",5),i(9,"The Kage-UI Mask Pipe formats and masks sensitive or structured data like phone numbers, credit cards, or IDs. It supports custom patterns and placeholder characters, ensuring both privacy and readability in Angular applications."),a(),t(10,"app-code-preview",6)(11,"p"),i(12),s(13,"mask"),a(),p(14,"br")(15,"br"),t(16,"p"),i(17),s(18,"mask"),a(),p(19,"br")(20,"br"),t(21,"p"),i(22),s(23,"mask"),a()()),n&2&&(e(5),r("iconDepth",3),e(),r("href","/library"),e(),r("href","/library/bytes"),e(3),r("htmlCode",m.htmlCode)("tsCode",m.tsCode)("scssCode",m.scssCode),e(2),o(l(13,9,"1234567812345678","*",0,4)),e(5),o(l(18,14,"john.doe@example.com","*",2,12)),e(5),o(g(23,19,"SecretValue")))},dependencies:[u,k,C,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as MaskPreviewComponent};
