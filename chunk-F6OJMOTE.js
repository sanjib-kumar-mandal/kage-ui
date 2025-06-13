import{a as x}from"./chunk-3Z46KEDQ.js";import{M as v,f as C,h as g}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Jb as r,Sa as n,Tb as p,Ub as a,bb as s,mb as d,ub as e,vb as t,wb as c}from"./chunk-KDFRMSR3.js";var f=class l{tsCode=`
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
  `;scssCode="";static \u0275fac=function(o){return new(o||l)};static \u0275cmp=s({type:l,selectors:[["app-ordinate-preview"]],decls:31,vars:23,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Ordinate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,m){o&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Ordinate Pipe"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),i(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"p"),i(14),p(15,"ordinate"),t(),e(16,"p"),i(17),p(18,"ordinate"),t(),e(19,"p"),i(20),p(21,"ordinate"),t(),e(22,"p"),i(23),p(24,"ordinate"),t(),e(25,"p"),i(26),p(27,"ordinate"),t(),e(28,"p"),i(29),p(30,"ordinate"),t()()),o&2&&(n(6),d("href","/library"),n(),d("href","/library/ordinate"),n(5),d("htmlCode",m.htmlCode)("tsCode",m.tsCode)("scssCode",m.scssCode),n(2),r(a(15,11,1)),n(3),r(a(18,13,2)),n(3),r(a(21,15,3)),n(3),r(a(24,17,4)),n(3),r(a(27,19,11)),n(3),r(a(30,21,23)))},dependencies:[x,C,g,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{f as OrdinatePreviewComponent};
