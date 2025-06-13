import{a as f}from"./chunk-3Z46KEDQ.js";import{Q as h,f as C,h as g}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Jb as p,Sa as i,Tb as m,Vb as s,Wb as u,bb as d,mb as a,ub as e,vb as t,wb as o}from"./chunk-KDFRMSR3.js";var v=class l{tsCode=`
  import { Component } from '@angular/core';
  import { KageTruncatePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageTruncatePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <!-- Truncate to 10 characters -->
    <p>{{ 'This is a long sentence that needs truncation.' | truncate:10 }}</p>
    <!-- Output: "This is a ..." -->

    <!-- Custom suffix -->
    <p>{{ 'Stick UI is awesome' | truncate:8:' >>' }}</p>
    <!-- Output: "Stick UI >>" -->

    <!-- No truncation needed -->
    <p>{{ 'Short' | truncate:10 }}</p>
    <!-- Output: "Short" -->
  `;scssCode="";static \u0275fac=function(r){return new(r||l)};static \u0275cmp=d({type:l,selectors:[["app-truncate-preview"]],decls:24,vars:18,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Truncate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,c){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Pipe"),t()(),e(3,"h1"),n(4,"Truncate Pipe"),t(),e(5,"kage-bread-crumbs"),o(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"p"),n(14),m(15,"truncate"),t(),o(16,"br"),e(17,"p"),n(18),m(19,"truncate"),t(),o(20,"br"),e(21,"p"),n(22),m(23,"truncate"),t()()),r&2&&(i(6),a("href","/library"),i(),a("href","/library/ordinate"),i(5),a("htmlCode",c.htmlCode)("tsCode",c.tsCode)("scssCode",c.scssCode),i(2),p(s(15,8,"This is a long sentence that needs truncation.",10)),i(4),p(u(19,11,"Stick UI is awesome",8," >>")),i(4),p(s(23,15,"Short",10)))},dependencies:[f,C,g,h],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as TruncatePreviewComponent};
