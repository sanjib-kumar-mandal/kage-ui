import{a as h}from"./chunk-E4LTLPYW.js";import{S as f,g,o as C}from"./chunk-F6EKI6RD.js";import"./chunk-742PDQ6L.js";import{Ab as p,Ga as e,Lb as s,Nb as m,Ob as u,Ra as d,ab as r,jb as t,kb as n,lb as o,zb as i}from"./chunk-TROVTPPJ.js";var v=class l{tsCode=`
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
    <p>{{ 'Kage UI is awesome' | truncate:8:' >>' }}</p>
    <!-- Output: "Kage UI >>" -->

    <!-- No truncation needed -->
    <p>{{ 'Short' | truncate:10 }}</p>
    <!-- Output: "Short" -->
  `;scssCode="";static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-truncate-preview"]],decls:22,vars:19,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Truncate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(a,c){a&1&&(t(0,"p",0)(1,"span",1),i(2,"Pipe"),n()(),t(3,"h1"),i(4,"Truncate Pipe"),n(),t(5,"kage-bread-crumbs",2),o(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),n(),t(8,"p",5),i(9,"The Kage-UI Truncate Pipe shortens long text to a specified length and appends an ellipsis or custom suffix. It's perfect for displaying concise previews of content like titles, summaries, or messages in Angular applications."),n(),t(10,"app-code-preview",6)(11,"p"),i(12),s(13,"truncate"),n(),o(14,"br"),t(15,"p"),i(16),s(17,"truncate"),n(),o(18,"br"),t(19,"p"),i(20),s(21,"truncate"),n()()),a&2&&(e(5),r("iconDepth",3),e(),r("href","/library"),e(),r("href","/library/ordinate"),e(3),r("htmlCode",c.htmlCode)("tsCode",c.tsCode)("scssCode",c.scssCode),e(2),p(m(13,9,"This is a long sentence that needs truncation.",10)),e(4),p(u(17,12,"Kage UI is awesome",8," >>")),e(4),p(m(21,16,"Short",10)))},dependencies:[h,g,C,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as TruncatePreviewComponent};
