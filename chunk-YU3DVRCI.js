import{a as D}from"./chunk-YX7X4TWZ.js";import{R as E,f as b,h as _,n as T}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Hb as w,Ib as r,Sa as o,Xa as u,Yb as f,bb as h,fa as d,ga as c,gb as x,mb as p,ub as e,vb as t,wb as v,yb as C,zb as s}from"./chunk-KDFRMSR3.js";function k(n,i){n&1&&(e(0,"div",13),r(1,"This is a drawer template!"),t())}function R(n,i){n&1&&(e(0,"div",13),r(1,"This is a drawer template!"),t())}var y=class n{constructor(i){this.drawer=i}tsCode=`
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
  `;openRight(i){this.drawer.openFromTemplate(i,{position:"right",width:"320px"})}openLeft(i){this.drawer.openFromTemplate(i,{position:"left",width:"320px"})}static \u0275fac=function(a){return new(a||n)(u(E))};static \u0275cmp=h({type:n,selectors:[["app-drawer-preview"]],decls:47,vars:3,consts:[["drawerTplRight",""],["drawerTplLeft",""],[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Drawer",3,"href"],[1,"description"],[3,"tsCode"],[3,"click"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"],[2,"padding","20px"]],template:function(a,l){if(a&1){let g=C();e(0,"p",2)(1,"span",3),r(2,"Component"),t()(),e(3,"h1"),r(4,"Drawer"),t(),e(5,"kage-bread-crumbs"),v(6,"kage-bread-crumb",4)(7,"kage-bread-crumb",5),t(),e(8,"p",6),r(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),r(11,"Implementation"),t(),e(12,"app-code-preview",7),x(13,k,2,0,"ng-template",null,0,f)(15,R,2,0,"ng-template",null,1,f),e(17,"kage-button",8),s("click",function(){d(g);let m=w(14);return c(l.openRight(m))}),r(18,"Open Drawer Right"),t(),e(19,"kage-button",8),s("click",function(){d(g);let m=w(16);return c(l.openLeft(m))}),r(20,"Open Drawer Left"),t()(),e(21,"h3"),r(22,"Inputs"),t(),e(23,"p",6),r(24,"List of Input Parameters."),t(),e(25,"div",9)(26,"div",10)(27,"p"),r(28,"Name"),t(),e(29,"p"),r(30,"Default Value | Type"),t()(),e(31,"div",11)(32,"div",12)(33,"p"),r(34,"content"),t(),e(35,"p"),r(36,"Type `TemplateRef`."),t()(),e(37,"div",12)(38,"p"),r(39,"position"),t(),e(40,"p"),r(41,"'left' | 'right', Default 'left'"),t()(),e(42,"div",12)(43,"p"),r(44,"width"),t(),e(45,"p"),r(46,"Type '300px'"),t()()()()}a&2&&(o(6),p("href","/library"),o(),p("href","/library/drawer"),o(5),p("tsCode",l.tsCode))},dependencies:[D,b,_,T],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{y as DrawerPreviewComponent};
