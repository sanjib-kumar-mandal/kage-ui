import{a as h}from"./chunk-3Z46KEDQ.js";import{P as b,f as c,h as C}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Kb as s,Sa as o,Tb as d,Ub as g,bb as m,mb as a,ub as e,vb as t,wb as l}from"./chunk-KDFRMSR3.js";var u=class p{publishedDate=new Date(Date.now()-3600*1e3*3);tsCode=`
  import { Component } from '@angular/core';
  import { KageTimeAgoPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageTimeAgoPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    publishedDate = new Date(Date.now() - 3600 * 1000 * 3);
  }
  `;htmlCode=`
    <h2>Time Ago Example</h2>
    <p>Published: {{ publishedDate | timeAgo }}</p>
    <!-- 3 hours ago -->
  `;scssCode="";static \u0275fac=function(n){return new(n||p)};static \u0275cmp=m({type:p,selectors:[["app-time-ago-preview"]],decls:18,vars:8,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","TimeAgo Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,r){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Time Ago Pipe"),t(),e(5,"kage-bread-crumbs"),l(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),i(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"h2"),i(14,"Time Ago Example"),t(),e(15,"p"),i(16),d(17,"timeAgo"),t()()),n&2&&(o(6),a("href","/library"),o(),a("href","/library/bytes"),o(5),a("htmlCode",r.htmlCode)("tsCode",r.tsCode)("scssCode",r.scssCode),o(4),s("Published: ",g(17,6,r.publishedDate),""))},dependencies:[h,c,C,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{u as TimeAgoPreviewComponent};
