import{a as u}from"./chunk-NYX3SKFI.js";import{O as f,g,o as C}from"./chunk-WEB7ABMC.js";import"./chunk-LXJ7KHNF.js";import{Ab as o,Ga as e,Lb as m,Nb as s,Ra as c,ab as a,jb as t,kb as p,lb as d,zb as r}from"./chunk-TROVTPPJ.js";var v=class l{tsCode=`
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
  `;scssCode="";static \u0275fac=function(i){return new(i||l)};static \u0275cmp=c({type:l,selectors:[["app-repeat-preview"]],decls:17,vars:14,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Repeat Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(i,n){i&1&&(t(0,"p",0)(1,"span",1),r(2,"Pipe"),p()(),t(3,"h1"),r(4,"Repeat Pipe"),p(),t(5,"kage-bread-crumbs",2),d(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),p(),t(8,"p",5),r(9,"The Kage-UI Repeat Pipe repeats a given string or character a specified number of times. It's useful for generating placeholders, padding, or creating visual patterns directly within Angular templates."),p(),t(10,"app-code-preview",6)(11,"p"),r(12),m(13,"repeat"),p(),t(14,"p"),r(15),m(16,"repeat"),p()()),i&2&&(e(5),a("iconDepth",3),e(),a("href","/library"),e(),a("href","/library/ordinate"),e(3),a("htmlCode",n.htmlCode)("tsCode",n.tsCode)("scssCode",n.scssCode),e(2),o(s(13,8,"*",5)),e(3),o(s(16,11,"Hi ",3)))},dependencies:[u,g,C,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as RepeatPreviewComponent};
