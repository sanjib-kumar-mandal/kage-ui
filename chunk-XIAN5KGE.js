import{a as x}from"./chunk-JN7NIASA.js";import{N as v,g as C,i as g}from"./chunk-IMUFFVJW.js";import"./chunk-DH4MXQE3.js";import{Ga as i,Ib as p,Jb as a,Ra as s,ab as d,ib as e,jb as t,kb as c,wb as n,xb as r}from"./chunk-23EHXD4H.js";var f=class l{tsCode=`
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
  `;scssCode="";static \u0275fac=function(o){return new(o||l)};static \u0275cmp=s({type:l,selectors:[["app-ordinate-preview"]],decls:29,vars:23,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Ordinate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,m){o&1&&(e(0,"p",0)(1,"span",1),n(2,"Pipe"),t()(),e(3,"h1"),n(4,"Ordinate Pipe"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p"),n(12),p(13,"ordinate"),t(),e(14,"p"),n(15),p(16,"ordinate"),t(),e(17,"p"),n(18),p(19,"ordinate"),t(),e(20,"p"),n(21),p(22,"ordinate"),t(),e(23,"p"),n(24),p(25,"ordinate"),t(),e(26,"p"),n(27),p(28,"ordinate"),t()()),o&2&&(i(6),d("href","/library"),i(),d("href","/library/ordinate"),i(3),d("htmlCode",m.htmlCode)("tsCode",m.tsCode)("scssCode",m.scssCode),i(2),r(a(13,11,1)),i(3),r(a(16,13,2)),i(3),r(a(19,15,3)),i(3),r(a(22,17,4)),i(3),r(a(25,19,11)),i(3),r(a(28,21,23)))},dependencies:[x,C,g,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as OrdinatePreviewComponent};
