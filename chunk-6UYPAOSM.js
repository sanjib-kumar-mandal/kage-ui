import{a as c}from"./chunk-YX7X4TWZ.js";import{f as s,h as d,y as g}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as r,Sa as n,bb as l,mb as a,ub as e,vb as t,wb as i}from"./chunk-KDFRMSR3.js";var b=class m{htmlCode=`<k-progress-bar></k-progress-bar>
<k-progress-bar [value]="30" mode="determinate"></k-progress-bar>
<k-progress-bar mode="buffer" [value]="20"></k-progress-bar>`;tsCode=`
  import { Component } from '@angular/core';
  import { KageProgressBar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageProgressBar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(o){return new(o||m)};static \u0275cmp=l({type:m,selectors:[["app-progress-bar-preview"]],decls:42,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Progress Bar",3,"href"],[1,"description"],[3,"htmlCode","tsCode"],["mode","determinate",3,"value"],["mode","buffer",3,"value"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(o,p){o&1&&(e(0,"p",0)(1,"span",1),r(2,"Component"),t()(),e(3,"h1"),r(4,"Progress Bar"),t(),e(5,"kage-bread-crumbs"),i(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),r(11,"Implementation"),t(),e(12,"app-code-preview",5),i(13,"kage-progress-bar")(14,"kage-progress-bar",6)(15,"kage-progress-bar",7),t(),e(16,"h3"),r(17,"Input"),t(),e(18,"p",4),r(19,"List of Input Parameters."),t(),e(20,"div",8)(21,"div",9)(22,"p"),r(23,"Name"),t(),e(24,"p"),r(25,"Default Value | Type"),t()(),e(26,"div",10)(27,"div",11)(28,"p"),r(29,"mode"),t(),e(30,"p"),r(31,"'determinate' | 'buffer' | 'indeterminate'. Default 'indeterminate'"),t()(),e(32,"div",11)(33,"p"),r(34,"value"),t(),e(35,"p"),r(36,"Type `number`. Default 0"),t()(),e(37,"div",11)(38,"p"),r(39,"color"),t(),e(40,"p"),r(41,"Type `string`. Default 'var(--color-primary)'"),t()()()()),o&2&&(n(6),a("href","/library"),n(),a("href","/library/progress-bar"),n(5),a("htmlCode",p.htmlCode)("tsCode",p.tsCode),n(2),a("value",30),n(),a("value",20))},dependencies:[c,s,d,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]   kage-progress-bar[_ngcontent-%COMP%]{margin-bottom:20px;display:block}"]})};export{b as ProgressBarPreviewComponent};
