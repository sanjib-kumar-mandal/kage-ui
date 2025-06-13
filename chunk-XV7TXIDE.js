import{a as c}from"./chunk-6UVKUOTH.js";import{f as s,h as d,z as g}from"./chunk-ZD2OAGNC.js";import"./chunk-3GFDRZ37.js";import{Ib as r,Sa as a,bb as l,mb as o,ub as e,vb as t,wb as i}from"./chunk-KDFRMSR3.js";var b=class p{htmlCode=`
    <kage-progress-bar></kage-progress-bar>
    <kage-progress-bar [value]="30" mode="determinate"></kage-progress-bar>
    <kage-progress-bar mode="buffer" [value]="20"></kage-progress-bar>
  `;tsCode=`
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
  `;static \u0275fac=function(n){return new(n||p)};static \u0275cmp=l({type:p,selectors:[["app-progress-bar-preview"]],decls:40,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Progress Bar",3,"href"],[1,"description"],[3,"htmlCode","tsCode"],["mode","determinate",3,"value"],["mode","buffer",3,"value"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,m){n&1&&(e(0,"p",0)(1,"span",1),r(2,"Component"),t()(),e(3,"h1"),r(4,"Progress Bar"),t(),e(5,"kage-bread-crumbs"),i(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5),i(11,"kage-progress-bar")(12,"kage-progress-bar",6)(13,"kage-progress-bar",7),t(),e(14,"h3"),r(15,"Input"),t(),e(16,"p",4),r(17,"List of Input Parameters."),t(),e(18,"div",8)(19,"div",9)(20,"p"),r(21,"Name"),t(),e(22,"p"),r(23,"Default Value | Type"),t()(),e(24,"div",10)(25,"div",11)(26,"p"),r(27,"mode"),t(),e(28,"p"),r(29,"'determinate' | 'buffer' | 'indeterminate'. Default 'indeterminate'"),t()(),e(30,"div",11)(31,"p"),r(32,"value"),t(),e(33,"p"),r(34,"Type `number`. Default 0"),t()(),e(35,"div",11)(36,"p"),r(37,"color"),t(),e(38,"p"),r(39,"Type `string`. Default 'var(--color-primary)'"),t()()()()),n&2&&(a(6),o("href","/library"),a(),o("href","/library/progress-bar"),a(3),o("htmlCode",m.htmlCode)("tsCode",m.tsCode),a(2),o("value",30),a(),o("value",20))},dependencies:[c,s,d,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]   kage-progress-bar[_ngcontent-%COMP%]{margin-bottom:20px;display:block}"]})};export{b as ProgressBarPreviewComponent};
