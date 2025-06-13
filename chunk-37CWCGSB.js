import{a as u}from"./chunk-2UWFFPLZ.js";import{f as d,h as c,n as s}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as o,bb as m,mb as i,ub as e,vb as t,wb as p}from"./chunk-KDFRMSR3.js";var g=class l{htmlCode=`
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
  `;static \u0275fac=function(r){return new(r||l)};static \u0275cmp=m({type:l,selectors:[["app-button-preview"]],decls:71,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Button",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"btns"],["color","primary"],["color","secondary"],["color","tertiary"],["color","danger",3,"loading"],["color","success"],["color","warning"],["color","info"],["color","primary","fill","clear"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,a){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Button"),t(),e(5,"kage-bread-crumbs"),p(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"div",6)(14,"kage-button",7),n(15,"Primary"),t(),e(16,"kage-button",8),n(17,"Secondary"),t(),e(18,"kage-button",9),n(19,"Tertiary"),t(),e(20,"kage-button",10),n(21,"Danger"),t(),e(22,"kage-button",11),n(23,"Success"),t(),e(24,"kage-button",12),n(25,"Warning"),t(),e(26,"kage-button",13),n(27,"Info"),t(),e(28,"kage-button",14),n(29,"Clear"),t()()(),e(30,"h3"),n(31,"Inputs (k-bread-crumb)"),t(),e(32,"p",4),n(33,"List of Input Parameters."),t(),e(34,"div",15)(35,"div",16)(36,"p"),n(37,"Name"),t(),e(38,"p"),n(39,"Default Value | Type"),t()(),e(40,"div",17)(41,"div",18)(42,"p"),n(43,"type"),t(),e(44,"p"),n(45,"'button' | 'submit' | 'reset'"),t()(),e(46,"div",18)(47,"p"),n(48,"color"),t(),e(49,"p"),n(50,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(51,"div",18)(52,"p"),n(53,"loading"),t(),e(54,"p"),n(55,"Type `boolean`"),t()(),e(56,"div",18)(57,"p"),n(58,"iconRight"),t(),e(59,"p"),n(60,"Type `boolean`"),t()(),e(61,"div",18)(62,"p"),n(63,"ariaLabel"),t(),e(64,"p"),n(65,"Type `string`, Default 'Button'"),t()(),e(66,"div",18)(67,"p"),n(68,"fill"),t(),e(69,"p"),n(70,"'clear' | 'outline', Default 'outline'"),t()()()()),r&2&&(o(6),i("href","/library"),o(),i("href","/library/button"),o(5),i("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),o(8),i("loading",!0))},dependencies:[u,d,c,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.btns[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}"]})};export{g as ButtonPreviewComponent};
