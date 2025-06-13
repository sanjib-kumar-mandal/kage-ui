import{a as E}from"./chunk-3Z46KEDQ.js";import{a as u,b as f,c as v,f as S,h as b,p as y}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Mb as g,Nb as C,Ob as h,Sa as o,bb as p,mb as r,ub as e,vb as t,wb as s,zb as c}from"./chunk-KDFRMSR3.js";var w=class d{htmlCode='<kage-calendar [(ngModel)]="dateSelected" (ngModelChange)="dateChanged($event)"></kage-calendar>';scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageCalendar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCalendar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    dateSelected: any;

    dateChanged(event: any) {
      console.log(this.dateSelected);
    }
  }
  `;dateSelected;dateChanged(m){console.log(this.dateSelected)}static \u0275fac=function(i){return new(i||d)};static \u0275cmp=p({type:d,selectors:[["app-calendar-preview"]],decls:45,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Calendar",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"ngModelChange","ngModel"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(i,a){i&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Calendar"),t(),e(5,"kage-bread-crumbs"),s(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"kage-calendar",6),h("ngModelChange",function(l){return C(a.dateSelected,l)||(a.dateSelected=l),l}),c("ngModelChange",function(l){return a.dateChanged(l)}),t()(),e(14,"h3"),n(15,"Inputs (k-bread-crumb)"),t(),e(16,"p",4),n(17,"List of Input Parameters."),t(),e(18,"div",7)(19,"div",8)(20,"p"),n(21,"Name"),t(),e(22,"p"),n(23,"Default Value | Type"),t()(),e(24,"div",9)(25,"div",10)(26,"p"),n(27,"selectionMode"),t(),e(28,"p"),n(29,"'single' | 'range' | 'multiple'. Default 'single'"),t()(),e(30,"div",10)(31,"p"),n(32,"showTimePicker"),t(),e(33,"p"),n(34,"Type `boolean`. Default false"),t()(),e(35,"div",10)(36,"p"),n(37,"timeFormat"),t(),e(38,"p"),n(39,"'12h' | '24h'. Default '24h'"),t()(),e(40,"div",10)(41,"p"),n(42,"locale"),t(),e(43,"p"),n(44,"Local. Default `LOCALE_ID`"),t()()()()),i&2&&(o(6),r("href","/library"),o(),r("href","/library/calendar"),o(5),r("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),o(),g("ngModel",a.dateSelected))},dependencies:[E,y,v,u,f,S,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{w as CalendarPreviewComponent};
