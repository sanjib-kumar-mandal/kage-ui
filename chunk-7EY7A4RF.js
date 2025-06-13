import{a as c}from"./chunk-3Z46KEDQ.js";import{I as s,f as p,h as d}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as n,bb as g,mb as r,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var y=class i{htmlCode=`
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
  `;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-toggle-preview"]],decls:51,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Toggle",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"toggles"],[3,"disabled"],["color","primary"],["color","secondary"],["color","tertiary"],["color","success"],["color","danger"],["color","warning"],["color","info"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,l){a&1&&(e(0,"p",0)(1,"span",1),o(2,"Component"),t()(),e(3,"h1"),o(4,"Toggle"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),o(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"div",6)(14,"kage-toggle",7),o(15,"Disabled here"),t(),e(16,"kage-toggle",8),o(17,"Primary"),t(),e(18,"kage-toggle",9),o(19,"Secondary"),t(),e(20,"kage-toggle",10),o(21,"Tertiary"),t(),e(22,"kage-toggle",11),o(23,"Success"),t(),e(24,"kage-toggle",12),o(25,"Danger"),t(),e(26,"kage-toggle",13),o(27,"Warning"),t(),e(28,"kage-toggle",14),o(29,"Info"),t()()(),e(30,"h3"),o(31,"Input"),t(),e(32,"p",4),o(33,"List of Input Parameters."),t(),e(34,"div",15)(35,"div",16)(36,"p"),o(37,"Name"),t(),e(38,"p"),o(39,"Default Value | Type"),t()(),e(40,"div",17)(41,"div",18)(42,"p"),o(43,"color"),t(),e(44,"p"),o(45,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(46,"div",18)(47,"p"),o(48,"disabled"),t(),e(49,"p"),o(50,"Type `boolean`. Default false"),t()()()()),a&2&&(n(6),r("href","/library"),n(),r("href","/library/toggle"),n(5),r("htmlCode",l.htmlCode)("scssCode",l.scssCode)("tsCode",l.tsCode),n(2),r("disabled",!0))},dependencies:[c,p,d,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.toggles[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:10px}"]})};export{y as TogglePreviewComponent};
