import{a as f}from"./chunk-AOOLJF6A.js";import{Q as h,f as C,h as g}from"./chunk-K5VWRVRZ.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Jb as p,Sa as n,Tb as c,Vb as s,Wb as u,bb as d,mb as a,ub as e,vb as t,wb as o}from"./chunk-KDFRMSR3.js";var v=class l{tsCode=`
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
  `;scssCode="";static \u0275fac=function(r){return new(r||l)};static \u0275cmp=d({type:l,selectors:[["app-truncate-preview"]],decls:22,vars:18,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Truncate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,m){r&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Truncate Pipe"),t(),e(5,"kage-bread-crumbs"),o(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p"),i(12),c(13,"truncate"),t(),o(14,"br"),e(15,"p"),i(16),c(17,"truncate"),t(),o(18,"br"),e(19,"p"),i(20),c(21,"truncate"),t()()),r&2&&(n(6),a("href","/library"),n(),a("href","/library/ordinate"),n(3),a("htmlCode",m.htmlCode)("tsCode",m.tsCode)("scssCode",m.scssCode),n(2),p(s(13,8,"This is a long sentence that needs truncation.",10)),n(4),p(u(17,11,"Stick UI is awesome",8," >>")),n(4),p(s(21,15,"Short",10)))},dependencies:[f,C,g,h],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as TruncatePreviewComponent};
