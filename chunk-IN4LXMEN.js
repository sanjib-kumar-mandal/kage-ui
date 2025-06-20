import{a as f}from"./chunk-EMCF4G2S.js";import{O as v,g as C,i as g}from"./chunk-D5UNUWQL.js";import"./chunk-QPQTBMLC.js";import{Ga as p,Kb as m,Mb as s,Ra as d,ab as i,ib as e,jb as t,kb as c,yb as r,zb as o}from"./chunk-6VEGNWUI.js";var b=class l{tsCode=`
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
  `;scssCode="";static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-repeat-preview"]],decls:17,vars:13,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Repeat Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(a,n){a&1&&(e(0,"p",0)(1,"span",1),r(2,"Pipe"),t()(),e(3,"h1"),r(4,"Repeat Pipe"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"p"),r(12),m(13,"repeat"),t(),e(14,"p"),r(15),m(16,"repeat"),t()()),a&2&&(p(6),i("href","/library"),p(),i("href","/library/ordinate"),p(3),i("htmlCode",n.htmlCode)("tsCode",n.tsCode)("scssCode",n.scssCode),p(2),o(s(13,7,"*",5)),p(3),o(s(16,10,"Hi ",3)))},dependencies:[f,C,g,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{b as RepeatPreviewComponent};
