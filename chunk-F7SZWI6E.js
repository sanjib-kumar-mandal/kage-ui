import{a as d}from"./chunk-6UVKUOTH.js";import{f as p,h as x,r as k}from"./chunk-ZD2OAGNC.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as r,bb as l,mb as c,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var s=class a{htmlCode=`
    <kage-checkbox>Default Checkbox</kage-checkbox>
    <kage-checkbox color="primary">Primary Checkbox</kage-checkbox>
    <kage-checkbox color="secondary">Secondary Checkbox</kage-checkbox>
    <kage-checkbox color="tertiary">Tertiary Checkbox</kage-checkbox>
    <kage-checkbox color="warning">Warning Checkbox</kage-checkbox>
    <kage-checkbox color="success">Success Checkbox</kage-checkbox>
    <kage-checkbox color="danger">Danger Checkbox</kage-checkbox>
    <kage-checkbox color="info">Info Checkbox</kage-checkbox>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageCheckbox } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCheckbox, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(n){return new(n||a)};static \u0275cmp=l({type:a,selectors:[["app-checkbox-preview"]],decls:59,vars:5,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Checkbox",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"checkboxes"],["color","primary"],["color","secondary"],["color","tertiary"],["color","warning"],["color","success"],["color","danger"],["color","info"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,i){n&1&&(e(0,"p",0)(1,"span",1),o(2,"Component"),t()(),e(3,"h1"),o(4,"Checkbox"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-checkbox"),o(13,"Default Checkbox"),t(),e(14,"kage-checkbox",7),o(15,"Primary Checkbox"),t(),e(16,"kage-checkbox",8),o(17,"Secondary Checkbox"),t(),e(18,"kage-checkbox",9),o(19,"Tertiary Checkbox"),t(),e(20,"kage-checkbox",10),o(21,"Warning Checkbox"),t(),e(22,"kage-checkbox",11),o(23,"Success Checkbox"),t(),e(24,"kage-checkbox",12),o(25,"Danger Checkbox"),t(),e(26,"kage-checkbox",13),o(27,"Info Checkbox"),t()()(),e(28,"h3"),o(29,"Inputs"),t(),e(30,"p",4),o(31,"List of Input Parameters."),t(),e(32,"div",14)(33,"div",15)(34,"p"),o(35,"Name"),t(),e(36,"p"),o(37,"Default Value | Type"),t()(),e(38,"div",16)(39,"div",17)(40,"p"),o(41,"label"),t(),e(42,"p"),o(43,"Type `string`"),t()(),e(44,"div",17)(45,"p"),o(46,"color"),t(),e(47,"p"),o(48,"'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info'"),t()(),e(49,"div",17)(50,"p"),o(51,"name"),t(),e(52,"p"),o(53,"Type `string`"),t()(),e(54,"div",17)(55,"p"),o(56,"id"),t(),e(57,"p"),o(58,"Type `string`"),t()()()()),n&2&&(r(6),c("href","/library"),r(),c("href","/library/checkbox"),r(3),c("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode))},dependencies:[p,x,k,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.checkboxes[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:10px;flex-wrap:wrap}"]})};export{s as CheckboxPreviewComponent};
