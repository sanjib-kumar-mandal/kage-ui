import{a as E}from"./chunk-I7LMNX23.js";import{a as u,b as S,c as b,g as D,o as x,q as C}from"./chunk-YQTPIHLU.js";import"./chunk-QSYZJPWV.js";import{Da as d,Jb as a,Nb as c,Oa as p,Ob as g,Pb as v,jb as r,kb as e,lb as t,mb as s}from"./chunk-GXREA3OA.js";var h=class m{htmlCode=`
  <kage-calendar 
      [mode]="'single'"
      [(ngModel)]="dateSelected" 
      [disabledDateFn]="datesToDisable" 
      [invalidDateFn]="invalidDate">
  </kage-calendar>
  `;scssCode="";tsCode=`
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

    datesToDisable(date: Date | null) {
      const dateToDisable = new Date('2025-06-25');
      if (date) {
        return (
          date.getDate() === dateToDisable.getDate() &&
          date.getMonth() === dateToDisable.getMonth() &&
          date.getFullYear() === dateToDisable.getFullYear()
        );
      } else {
        return false;
      }
    }

    invalidDate(date: Date | null) {
      const invalidDate = new Date('2025-07-12');
      if (date) {
        return (
          date.getDate() === invalidDate.getDate() &&
          date.getMonth() === invalidDate.getMonth() &&
          date.getFullYear() === invalidDate.getFullYear()
        );
      } else {
        return false;
      }
    }
  }
  `;dateSelected;dateChanged(n){console.log(this.dateSelected)}datesToDisable(n){let i=new Date("2025-06-25");return n?n.getDate()===i.getDate()&&n.getMonth()===i.getMonth()&&n.getFullYear()===i.getFullYear():!1}invalidDate(n){let i=new Date("2025-07-12");return n?n.getDate()===i.getDate()&&n.getMonth()===i.getMonth()&&n.getFullYear()===i.getFullYear():!1}static \u0275fac=function(i){return new(i||m)};static \u0275cmp=p({type:m,selectors:[["app-calendar-preview"]],decls:125,vars:10,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["label","Library",3,"href"],["label","Calendar",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"ngModelChange","mode","ngModel","disabledDateFn","invalidDateFn"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(i,l){i&1&&(e(0,"p",0)(1,"span",1),a(2,"Component"),t()(),e(3,"h1"),a(4,"Calendar"),t(),e(5,"kage-bread-crumbs",2),s(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),a(9,"The Calendar component lets users view and select dates or ranges in a monthly grid layout."),t(),e(10,"app-code-preview",6)(11,"kage-calendar",7),v("ngModelChange",function(o){return g(l.dateSelected,o)||(l.dateSelected=o),o}),t()(),e(12,"h3"),a(13,"Input Signals"),t(),e(14,"p",5),a(15,"List of Input Parameters."),t(),e(16,"div",8)(17,"div",9)(18,"p"),a(19,"Name"),t(),e(20,"p"),a(21,"Default Value | Type"),t()(),e(22,"div",10)(23,"div",11)(24,"p"),a(25,"mode"),t(),e(26,"p"),a(27,"'single' | 'range' | 'multiple'. Default 'single'"),t()(),e(28,"div",11)(29,"p"),a(30,"disabled"),t(),e(31,"p"),a(32,"`boolean`"),t()(),e(33,"div",11)(34,"p"),a(35,"disabledDateFn"),t(),e(36,"p"),a(37,"`(date: Date | null) => boolean`"),t()(),e(38,"div",11)(39,"p"),a(40,"invalidDateFn"),t(),e(41,"p"),a(42,"`(date: Date | null) => boolean`"),t()()()(),e(43,"h3"),a(44,"Output Signals"),t(),e(45,"p",5),a(46,"List of Output Parameters."),t(),e(47,"div",8)(48,"div",9)(49,"p"),a(50,"Name"),t(),e(51,"p"),a(52,"Default Value | Type"),t()(),e(53,"div",10)(54,"div",11)(55,"p"),a(56,"kageChange"),t(),e(57,"p"),a(58,"`void`"),t()(),e(59,"div",11)(60,"p"),a(61,"kageTouched"),t(),e(62,"p"),a(63,"`void`"),t()()()(),e(64,"h3"),a(65,"Custom CSS Variables"),t(),e(66,"p",5),a(67,"Recommended CSS Variable List \u2014 Defining values using these variables is advised to enhance maintainability and optimize CSS performance."),t(),e(68,"div",8)(69,"div",9)(70,"p"),a(71,"Name"),t(),e(72,"p"),a(73,"Fallback Values"),t()(),e(74,"div",10)(75,"div",11)(76,"p"),a(77,"--kage-calendar-background"),t(),e(78,"p"),a(79,"color-mix(in srgb, var(--color-background) 90%, var(--color-medium) 10%)"),t()(),e(80,"div",11)(81,"p"),a(82,"--kage-calendar-min-width"),t(),e(83,"p"),a(84,"260px"),t()(),e(85,"div",11)(86,"p"),a(87,"--kage-calendar-border-color"),t(),e(88,"p"),a(89,"--color-primary"),t()(),e(90,"div",11)(91,"p"),a(92,"--kage-calendar-border-width"),t(),e(93,"p"),a(94,"1px"),t()(),e(95,"div",11)(96,"p"),a(97,"--kage-calendar-sections-background"),t(),e(98,"p"),a(99,"color-mix(in srgb, var(--color-background) 80%, var(--color-primary) 20%)"),t()(),e(100,"div",11)(101,"p"),a(102,"--kage-calendar-disabled-date-color"),t(),e(103,"p"),a(104,"--color-medium"),t()(),e(105,"div",11)(106,"p"),a(107,"--kage-calendar-disabled-date-background"),t(),e(108,"p"),a(109,"rgba(var(--color-medium-rgb), .1)"),t()(),e(110,"div",11)(111,"p"),a(112,"--kage-calendar-invalid-date-color"),t(),e(113,"p"),a(114,"--color-danger"),t()(),e(115,"div",11)(116,"p"),a(117,"--kage-calendar-selection-color"),t(),e(118,"p"),a(119,"--color-secondary"),t()(),e(120,"div",11)(121,"p"),a(122,"--kage-calendar-selection-background"),t(),e(123,"p"),a(124,"rgba(var(--color-secondary-rgb), .4)"),t()()()()),i&2&&(d(5),r("iconDepth",3),d(),r("href","/library"),d(),r("href","/library/calendar"),d(3),r("htmlCode",l.htmlCode)("scssCode",l.scssCode)("tsCode",l.tsCode),d(),r("mode","single"),c("ngModel",l.dateSelected),r("disabledDateFn",l.datesToDisable)("invalidDateFn",l.invalidDate))},dependencies:[E,C,b,u,S,D,x],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{h as CalendarPreviewComponent};
