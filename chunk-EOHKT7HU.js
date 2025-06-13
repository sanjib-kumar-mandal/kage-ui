import{a as b}from"./chunk-2UWFFPLZ.js";import{J as C,f as h,h as c}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Oa as m,Sa as r,Tb as g,Vb as d,bb as s,mb as n,ub as e,vb as i,wb as a}from"./chunk-KDFRMSR3.js";var f=class l{description="Kage UI is a powerful library for building web apps.";searchTerm="Kage";tsCode=`
  import { Component } from '@angular/core';
  import { KageHighlightPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageHighlightPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    description = 'Kage UI is a powerful library for building web apps.';
    searchTerm = 'Kage';
  }
  `;htmlCode='<p [innerHTML]="description | highlight:searchTerm"></p>';scssCode="";static \u0275fac=function(p){return new(p||l)};static \u0275cmp=s({type:l,selectors:[["app-highlight-preview"]],decls:15,vars:9,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Highlight Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"],[3,"innerHTML"]],template:function(p,t){p&1&&(e(0,"p",0)(1,"span",1),o(2,"Pipe"),i()(),e(3,"h1"),o(4,"Highlight Pipe"),i(),e(5,"kage-bread-crumbs"),a(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),i(),e(8,"p",4),o(9,"Pipe Behavior and Input Breakdown"),i(),e(10,"h3"),o(11,"Implementation"),i(),e(12,"app-code-preview",5),a(13,"p",6),g(14,"highlight"),i()),p&2&&(r(6),n("href","/library"),r(),n("href","/library/bytes"),r(5),n("htmlCode",t.htmlCode)("tsCode",t.tsCode)("scssCode",t.scssCode),r(),n("innerHTML",d(14,6,t.description,t.searchTerm),m))},dependencies:[b,h,c,C],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as HighlightPreviewComponent};
