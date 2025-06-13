import{a as f}from"./chunk-3Z46KEDQ.js";import{N as v,f as C,h as g}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as p,Jb as o,Sa as i,Tb as m,Vb as l,bb as d,mb as a,ub as e,vb as t,wb as c}from"./chunk-KDFRMSR3.js";var b=class s{tsCode=`
  import { Component } from '@angular/core';
  import { KageRepeatPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRepeatPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;htmlCode=`
    <!-- Repeat a character -->
    <p>{{ '*' | repeat:5 }}</p> 

    <!-- Repeat a string -->
    <p>{{ 'Hi ' | repeat:3 }}</p> 

    <!-- Repeat dynamic content -->
    <p>{{ user.emoji | repeat:user.count }}</p>
  `;scssCode="";static \u0275fac=function(r){return new(r||s)};static \u0275cmp=d({type:s,selectors:[["app-repeat-preview"]],decls:19,vars:13,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Repeat Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,n){r&1&&(e(0,"p",0)(1,"span",1),p(2,"Pipe"),t()(),e(3,"h1"),p(4,"Repeat Pipe"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),p(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),p(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"p"),p(14),m(15,"repeat"),t(),e(16,"p"),p(17),m(18,"repeat"),t()()),r&2&&(i(6),a("href","/library"),i(),a("href","/library/ordinate"),i(5),a("htmlCode",n.htmlCode)("tsCode",n.tsCode)("scssCode",n.scssCode),i(2),o(l(15,7,"*",5)),i(3),o(l(18,10,"Hi ",3)))},dependencies:[f,C,g,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{b as RepeatPreviewComponent};
