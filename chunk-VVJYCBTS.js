import{a as f}from"./chunk-OPPKJ6H4.js";import{N as v,g,o as C}from"./chunk-A4CCQ3TQ.js";import"./chunk-LXJ7KHNF.js";import{Ab as r,Ga as e,Lb as a,Mb as p,Ra as s,ab as o,jb as t,kb as i,lb as c,zb as n}from"./chunk-TROVTPPJ.js";var x=class m{tsCode=`
  import { Component } from '@angular/core';
  import { KageOrdinatePipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageOrdinatePipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <p>{{ 1 | ordinate }}</p>    
    <p>{{ 2 | ordinate }}</p>    
    <p>{{ 3 | ordinate }}</p>    
    <p>{{ 4 | ordinate }}</p>    
    <p>{{ 11 | ordinate }}</p>   
    <p>{{ 23 | ordinate }}</p>   
  `;scssCode="";static \u0275fac=function(d){return new(d||m)};static \u0275cmp=s({type:m,selectors:[["app-ordinate-preview"]],decls:29,vars:24,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Ordinate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(d,l){d&1&&(t(0,"p",0)(1,"span",1),n(2,"Pipe"),i()(),t(3,"h1"),n(4,"Ordinate Pipe"),i(),t(5,"kage-bread-crumbs",2),c(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),i(),t(8,"p",5),n(9,"The Kage-UI Ordinate Pipe appends the correct ordinal suffix (e.g., 1st, 2nd, 3rd) to a number. It handles special cases like 11th, 12th, and 13th, making it useful for dates, rankings, or positions in Angular applications."),i(),t(10,"app-code-preview",6)(11,"p"),n(12),a(13,"ordinate"),i(),t(14,"p"),n(15),a(16,"ordinate"),i(),t(17,"p"),n(18),a(19,"ordinate"),i(),t(20,"p"),n(21),a(22,"ordinate"),i(),t(23,"p"),n(24),a(25,"ordinate"),i(),t(26,"p"),n(27),a(28,"ordinate"),i()()),d&2&&(e(5),o("iconDepth",3),e(),o("href","/library"),e(),o("href","/library/ordinate"),e(3),o("htmlCode",l.htmlCode)("tsCode",l.tsCode)("scssCode",l.scssCode),e(2),r(p(13,12,1)),e(3),r(p(16,14,2)),e(3),r(p(19,16,3)),e(3),r(p(22,18,4)),e(3),r(p(25,20,11)),e(3),r(p(28,22,23)))},dependencies:[f,g,C,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{x as OrdinatePreviewComponent};
