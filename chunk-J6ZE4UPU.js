import{a as c}from"./chunk-GEEGI6SP.js";import{I as s,f as d,h as p}from"./chunk-J4VQ6NPB.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as n,bb as g,mb as r,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var y=class i{htmlCode=`
    <kage-toggle [disabled]="true">Disabled here</kage-toggle>
    <kage-toggle color="primary">Primary</kage-toggle>
    <kage-toggle color="secondary">Secondary</kage-toggle>
    <kage-toggle color="tertiary">Tertiary</kage-toggle>
    <kage-toggle color="success">Success</kage-toggle>
    <kage-toggle color="danger">Danger</kage-toggle>
    <kage-toggle color="warning">Warning</kage-toggle>
    <kage-toggle color="info">Info</kage-toggle>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageToggle } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageToggle, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-toggle-preview"]],decls:49,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Toggle",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"toggles"],[3,"disabled"],["color","primary"],["color","secondary"],["color","tertiary"],["color","success"],["color","danger"],["color","warning"],["color","info"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,l){a&1&&(e(0,"p",0)(1,"span",1),o(2,"Component"),t()(),e(3,"h1"),o(4,"Toggle"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-toggle",7),o(13,"Disabled here"),t(),e(14,"kage-toggle",8),o(15,"Primary"),t(),e(16,"kage-toggle",9),o(17,"Secondary"),t(),e(18,"kage-toggle",10),o(19,"Tertiary"),t(),e(20,"kage-toggle",11),o(21,"Success"),t(),e(22,"kage-toggle",12),o(23,"Danger"),t(),e(24,"kage-toggle",13),o(25,"Warning"),t(),e(26,"kage-toggle",14),o(27,"Info"),t()()(),e(28,"h3"),o(29,"Input"),t(),e(30,"p",4),o(31,"List of Input Parameters."),t(),e(32,"div",15)(33,"div",16)(34,"p"),o(35,"Name"),t(),e(36,"p"),o(37,"Default Value | Type"),t()(),e(38,"div",17)(39,"div",18)(40,"p"),o(41,"color"),t(),e(42,"p"),o(43,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(44,"div",18)(45,"p"),o(46,"disabled"),t(),e(47,"p"),o(48,"Type `boolean`. Default false"),t()()()()),a&2&&(n(6),r("href","/library"),n(),r("href","/library/toggle"),n(3),r("htmlCode",l.htmlCode)("scssCode",l.scssCode)("tsCode",l.tsCode),n(2),r("disabled",!0))},dependencies:[c,d,p,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.toggles[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}"]})};export{y as TogglePreviewComponent};
