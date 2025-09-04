import{a as D}from"./chunk-H3NPU7JE.js";import{U as y,g as b,o as T,p as _}from"./chunk-DQZS6GQ3.js";import"./chunk-QSYZJPWV.js";import{Da as p,Fb as w,Ia as h,Jb as r,Oa as u,Ta as v,_b as g,ca as d,da as s,jb as l,kb as e,lb as t,mb as C,sb as x,wb as c}from"./chunk-GXREA3OA.js";function S(n,i){n&1&&(e(0,"div",13),r(1,"This is a drawer template!"),t())}function R(n,i){n&1&&(e(0,"div",13),r(1,"This is a drawer template!"),t())}var k=class n{constructor(i){this.drawer=i}htmlCode=`
    <ng-template #drawerTplRight>
      <div style="padding: 20px;">This is a drawer template!</div>
    </ng-template>
    <ng-template #drawerTplLeft>
      <div style="padding: 20px;">This is a drawer template!</div>
    </ng-template>
    <kage-button (click)="openRight(drawerTplRight)">Open Drawer Right</kage-button>
    <kage-button (click)="openLeft(drawerTplLeft)">Open Drawer Left</kage-button>
  `;tsCode=`
  import { Component } from '@angular/core';
  import { KageDrawerCtrl } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
  
    constructor(private drawer: KageDrawerCtrl) {}

    openRight(template: TemplateRef<any>) {
      this.drawer.openFromTemplate(template, {
        position: 'right',
        width: '320px',
      });
    }

    openLeft(template: TemplateRef<any>) {
      this.drawer.openFromTemplate(template, {
        position: 'left',
        width: '320px',
      });
    }
  }
  `;openRight(i){this.drawer.openFromTemplate(i,{position:"right",width:"320px"})}openLeft(i){this.drawer.openFromTemplate(i,{position:"left",width:"320px"})}static \u0275fac=function(a){return new(a||n)(h(y))};static \u0275cmp=u({type:n,selectors:[["app-drawer-preview"]],decls:45,vars:4,consts:[["drawerTplRight",""],["drawerTplLeft",""],[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Drawer",3,"href"],[1,"description"],[3,"tsCode","htmlCode"],[3,"click"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"],[2,"padding","20px"]],template:function(a,o){if(a&1){let f=x();e(0,"p",2)(1,"span",3),r(2,"Component"),t()(),e(3,"h1"),r(4,"Drawer"),t(),e(5,"kage-bread-crumbs"),C(6,"kage-bread-crumb",4)(7,"kage-bread-crumb",5),t(),e(8,"p",6),r(9,"The Drawer Service provides programmatic control over side panels (drawers) that slide in from screen edges. It supports dynamic content injection, customizable width and position, backdrop handling, and lifecycle hooks\u2014ideal for modals, forms, or navigation in Angular apps."),t(),e(10,"app-code-preview",7),v(11,S,2,0,"ng-template",null,0,g)(13,R,2,0,"ng-template",null,1,g),e(15,"kage-button",8),c("click",function(){d(f);let m=w(12);return s(o.openRight(m))}),r(16,"Open Drawer Right"),t(),e(17,"kage-button",8),c("click",function(){d(f);let m=w(14);return s(o.openLeft(m))}),r(18,"Open Drawer Left"),t()(),e(19,"h3"),r(20,"Inputs"),t(),e(21,"p",6),r(22,"List of Input Parameters."),t(),e(23,"div",9)(24,"div",10)(25,"p"),r(26,"Name"),t(),e(27,"p"),r(28,"Default Value | Type"),t()(),e(29,"div",11)(30,"div",12)(31,"p"),r(32,"content"),t(),e(33,"p"),r(34,"Type `TemplateRef`."),t()(),e(35,"div",12)(36,"p"),r(37,"position"),t(),e(38,"p"),r(39,"'left' | 'right', Default 'left'"),t()(),e(40,"div",12)(41,"p"),r(42,"width"),t(),e(43,"p"),r(44,"Type '300px'"),t()()()()}a&2&&(p(6),l("href","/library"),p(),l("href","/library/drawer"),p(3),l("tsCode",o.tsCode)("htmlCode",o.htmlCode))},dependencies:[D,b,T,_],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{k as DrawerPreviewComponent};
