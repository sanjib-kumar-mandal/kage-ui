import{a as u}from"./chunk-OPPKJ6H4.js";import{Q as h,g as c,o as C}from"./chunk-A4CCQ3TQ.js";import"./chunk-LXJ7KHNF.js";import{Bb as l,Ga as i,Lb as d,Mb as g,Ra as m,ab as a,jb as e,kb as t,lb as s,zb as o}from"./chunk-TROVTPPJ.js";var b=class p{publishedDate=new Date(Date.now()-3600*1e3*3);tsCode=`
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
  `;scssCode="";static \u0275fac=function(n){return new(n||p)};static \u0275cmp=m({type:p,selectors:[["app-time-ago-preview"]],decls:16,vars:9,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","TimeAgo Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,r){n&1&&(e(0,"p",0)(1,"span",1),o(2,"Pipe"),t()(),e(3,"h1"),o(4,"Time Ago Pipe"),t(),e(5,"kage-bread-crumbs",2),s(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),o(9,'The Kage-UI Time Ago Pipe converts a date or timestamp into a relative time string (e.g., "5 minutes ago", "2 days ago"). It auto-updates over time and supports localization, making it perfect for timestamps in feeds, comments, or notifications in Angular apps.'),t(),e(10,"app-code-preview",6)(11,"h2"),o(12,"Time Ago Example"),t(),e(13,"p"),o(14),d(15,"timeAgo"),t()()),n&2&&(i(5),a("iconDepth",3),i(),a("href","/library"),i(),a("href","/library/bytes"),i(3),a("htmlCode",r.htmlCode)("tsCode",r.tsCode)("scssCode",r.scssCode),i(4),l("Published: ",g(15,7,r.publishedDate),""))},dependencies:[u,c,C,h],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{b as TimeAgoPreviewComponent};
