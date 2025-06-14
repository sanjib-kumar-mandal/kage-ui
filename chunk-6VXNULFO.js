import{a as w}from"./chunk-GEEGI6SP.js";import{a as h,b as f,c as v,f as S,h as y,p as b}from"./chunk-J4VQ6NPB.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Mb as g,Nb as C,Ob as u,Sa as i,bb as p,mb as r,ub as e,vb as t,wb as s,zb as c}from"./chunk-KDFRMSR3.js";var E=class d{htmlCode='<kage-calendar [(ngModel)]="dateSelected" (ngModelChange)="dateChanged($event)"></kage-calendar>';scssCode="";tsCode=`
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
  `;dateSelected;dateChanged(m){console.log(this.dateSelected)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=p({type:d,selectors:[["app-calendar-preview"]],decls:43,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Calendar",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"ngModelChange","ngModel"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(o,a){o&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Calendar"),t(),e(5,"kage-bread-crumbs"),s(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"The Calendar component lets users view and select dates or ranges in a monthly grid layout. It supports features like week numbers, inline display, custom date formats, time selection, and locale customization for internationalization."),t(),e(10,"app-code-preview",5)(11,"kage-calendar",6),u("ngModelChange",function(l){return C(a.dateSelected,l)||(a.dateSelected=l),l}),c("ngModelChange",function(l){return a.dateChanged(l)}),t()(),e(12,"h3"),n(13,"Inputs"),t(),e(14,"p",4),n(15,"List of Input Parameters."),t(),e(16,"div",7)(17,"div",8)(18,"p"),n(19,"Name"),t(),e(20,"p"),n(21,"Default Value | Type"),t()(),e(22,"div",9)(23,"div",10)(24,"p"),n(25,"selectionMode"),t(),e(26,"p"),n(27,"'single' | 'range' | 'multiple'. Default 'single'"),t()(),e(28,"div",10)(29,"p"),n(30,"showTimePicker"),t(),e(31,"p"),n(32,"Type `boolean`. Default false"),t()(),e(33,"div",10)(34,"p"),n(35,"timeFormat"),t(),e(36,"p"),n(37,"'12h' | '24h'. Default '24h'"),t()(),e(38,"div",10)(39,"p"),n(40,"locale"),t(),e(41,"p"),n(42,"Local. Default `LOCALE_ID`"),t()()()()),o&2&&(i(6),r("href","/library"),i(),r("href","/library/calendar"),i(3),r("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),i(),g("ngModel",a.dateSelected))},dependencies:[w,b,v,h,f,S,y],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{E as CalendarPreviewComponent};
