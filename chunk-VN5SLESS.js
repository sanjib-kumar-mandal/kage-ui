import{a as u}from"./chunk-6UVKUOTH.js";import{f as d,h as c,o as s}from"./chunk-ZD2OAGNC.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as o,bb as m,mb as i,ub as e,vb as t,wb as p}from"./chunk-KDFRMSR3.js";var g=class l{htmlCode=`
  <kage-button color="primary">Primary</kage-button>
  <kage-button color="secondary">Secondary</kage-button>
  <kage-button color="tertiary">Tertiary</kage-button>
  <kage-button color="danger" [loading]="true">Danger</kage-button>
  <kage-button color="success">Success</kage-button>
  <kage-button color="warning">Warning</kage-button>
  <kage-button color="info">Info</kage-button>
  <kage-button color="primary" fill="clear">Clear</kage-button>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageButton } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(r){return new(r||l)};static \u0275cmp=m({type:l,selectors:[["app-button-preview"]],decls:69,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Button",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"btns"],["color","primary"],["color","secondary"],["color","tertiary"],["color","danger",3,"loading"],["color","success"],["color","warning"],["color","info"],["color","primary","fill","clear"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,a){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Button"),t(),e(5,"kage-bread-crumbs"),p(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-button",7),n(13,"Primary"),t(),e(14,"kage-button",8),n(15,"Secondary"),t(),e(16,"kage-button",9),n(17,"Tertiary"),t(),e(18,"kage-button",10),n(19,"Danger"),t(),e(20,"kage-button",11),n(21,"Success"),t(),e(22,"kage-button",12),n(23,"Warning"),t(),e(24,"kage-button",13),n(25,"Info"),t(),e(26,"kage-button",14),n(27,"Clear"),t()()(),e(28,"h3"),n(29,"Inputs"),t(),e(30,"p",4),n(31,"List of Input Parameters."),t(),e(32,"div",15)(33,"div",16)(34,"p"),n(35,"Name"),t(),e(36,"p"),n(37,"Default Value | Type"),t()(),e(38,"div",17)(39,"div",18)(40,"p"),n(41,"type"),t(),e(42,"p"),n(43,"'button' | 'submit' | 'reset'"),t()(),e(44,"div",18)(45,"p"),n(46,"color"),t(),e(47,"p"),n(48,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(49,"div",18)(50,"p"),n(51,"loading"),t(),e(52,"p"),n(53,"Type `boolean`"),t()(),e(54,"div",18)(55,"p"),n(56,"iconRight"),t(),e(57,"p"),n(58,"Type `boolean`"),t()(),e(59,"div",18)(60,"p"),n(61,"ariaLabel"),t(),e(62,"p"),n(63,"Type `string`, Default 'Button'"),t()(),e(64,"div",18)(65,"p"),n(66,"fill"),t(),e(67,"p"),n(68,"'clear' | 'outline', Default 'outline'"),t()()()()),r&2&&(o(6),i("href","/library"),o(),i("href","/library/button"),o(3),i("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),o(8),i("loading",!0))},dependencies:[u,d,c,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.btns[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}"]})};export{g as ButtonPreviewComponent};
