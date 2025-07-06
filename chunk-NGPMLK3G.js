import{a as C}from"./chunk-TJVMDSM4.js";import{L as b,g as c,i as d}from"./chunk-M7POZHZX.js";import"./chunk-5X2QXVHB.js";import{Ca as l,Ga as e,Kb as g,Mb as h,Ra as m,ab as i,ib as t,jb as r,kb as p,yb as o}from"./chunk-6VEGNWUI.js";var f=class s{description="Kage UI is a powerful library for building web apps.";searchTerm="Kage";tsCode=`
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
  `;htmlCode='<p [innerHTML]="description | highlight:searchTerm"></p>';scssCode="";static \u0275fac=function(n){return new(n||s)};static \u0275cmp=m({type:s,selectors:[["app-highlight-preview"]],decls:13,vars:10,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Highlight Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"],[3,"innerHTML"]],template:function(n,a){n&1&&(t(0,"p",0)(1,"span",1),o(2,"Pipe"),r()(),t(3,"h1"),o(4,"Highlight Pipe"),r(),t(5,"kage-bread-crumbs",2),p(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),r(),t(8,"p",5),o(9,"The Kage-UI Highlight Pipe highlights matching text within a string based on a search term. It wraps matches with customizable HTML tags or classes, making it ideal for building search result UIs or emphasizing keywords in Angular applications."),r(),t(10,"app-code-preview",6),p(11,"p",7),g(12,"highlight"),r()),n&2&&(e(5),i("iconDepth",3),e(),i("href","/library"),e(),i("href","/library/bytes"),e(3),i("htmlCode",a.htmlCode)("tsCode",a.tsCode)("scssCode",a.scssCode),e(),i("innerHTML",h(12,7,a.description,a.searchTerm),l))},dependencies:[C,c,d,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as HighlightPreviewComponent};
