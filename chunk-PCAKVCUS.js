import{a as s}from"./chunk-3Z46KEDQ.js";import{f as m,h as d,s as h}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Sa as a,bb as l,mb as r,ub as e,vb as t,wb as c}from"./chunk-KDFRMSR3.js";var g=class p{htmlCode=`
    <kage-chip>Chip</kage-chip>
    <kage-chip color="danger" [removable]="true">Danger</kage-chip>
    <kage-chip color="success">Success</kage-chip>
    <kage-chip color="warning">Warning</kage-chip>
    <kage-chip color="primary">Primary</kage-chip>
    <kage-chip color="secondary">Secondary</kage-chip>
    <kage-chip color="tertiary">Tertiary</kage-chip>
    <kage-chip color="info">Info</kage-chip>

    <kage-chip shape="radial">Chip</kage-chip>
    <kage-chip color="danger" shape="radial">Chip</kage-chip>
    <kage-chip color="success" shape="radial" [removable]="true">Chip</kage-chip>
    <kage-chip color="warning" shape="radial">Chip</kage-chip>
    <kage-chip color="primary" shape="radial">Primary</kage-chip>
    <kage-chip color="secondary" shape="radial">Secondary</kage-chip>
    <kage-chip color="tertiary" shape="radial">Tertiary</kage-chip>
    <kage-chip color="info" shape="radial">Info</kage-chip>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageChip } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageChip, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(n){return new(n||p)};static \u0275cmp=l({type:p,selectors:[["app-chip-preview"]],decls:71,vars:7,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Chip",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"chip-previewer"],["color","danger",3,"removable"],["color","success"],["color","warning"],["color","primary"],["color","secondary"],["color","tertiary"],["color","info"],["shape","radial"],["color","danger","shape","radial"],["color","success","shape","radial",3,"removable"],["color","warning","shape","radial"],["color","primary","shape","radial"],["color","secondary","shape","radial"],["color","tertiary","shape","radial"],["color","info","shape","radial"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,o){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Component"),t()(),e(3,"h1"),i(4,"Chip"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-chip"),i(13,"Chip"),t(),e(14,"kage-chip",7),i(15,"Danger"),t(),e(16,"kage-chip",8),i(17,"Success"),t(),e(18,"kage-chip",9),i(19,"Warning"),t(),e(20,"kage-chip",10),i(21,"Primary"),t(),e(22,"kage-chip",11),i(23,"Secondary"),t(),e(24,"kage-chip",12),i(25,"Tertiary"),t(),e(26,"kage-chip",13),i(27,"Info"),t()(),e(28,"div",6)(29,"kage-chip",14),i(30,"Chip"),t(),e(31,"kage-chip",15),i(32,"Chip"),t(),e(33,"kage-chip",16),i(34,"Chip"),t(),e(35,"kage-chip",17),i(36,"Chip"),t(),e(37,"kage-chip",18),i(38,"Primary"),t(),e(39,"kage-chip",19),i(40,"Secondary"),t(),e(41,"kage-chip",20),i(42,"Tertiary"),t(),e(43,"kage-chip",21),i(44,"Info"),t()()(),e(45,"h3"),i(46,"Inputs"),t(),e(47,"p",4),i(48,"List of Input Parameters."),t(),e(49,"div",22)(50,"div",23)(51,"p"),i(52,"Name"),t(),e(53,"p"),i(54,"Default Value | Type"),t()(),e(55,"div",24)(56,"div",25)(57,"p"),i(58,"removable"),t(),e(59,"p"),i(60,"Type `boolean`. Default false"),t()(),e(61,"div",25)(62,"p"),i(63,"color"),t(),e(64,"p"),i(65,"'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info'"),t()(),e(66,"div",25)(67,"p"),i(68,"shape"),t(),e(69,"p"),i(70,"'radial' | 'sharp'. Default 'sharp'"),t()()()()),n&2&&(a(6),r("href","/library"),a(),r("href","/library/chip"),a(3),r("htmlCode",o.htmlCode)("scssCode",o.scssCode)("tsCode",o.tsCode),a(4),r("removable",!0),a(19),r("removable",!0))},dependencies:[s,m,d,h],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}app-code-preview[_ngcontent-%COMP%]   .chip-previewer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}app-code-preview[_ngcontent-%COMP%]   .chip-previewer[_ngcontent-%COMP%]   kage-chip[_ngcontent-%COMP%]{margin:10px}"]})};export{g as ChipPreviewComponent};
