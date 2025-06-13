import{a as d}from"./chunk-3Z46KEDQ.js";import{f as p,h as x,r as k}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as o,Sa as r,bb as l,mb as i,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var s=class a{htmlCode=`
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
  `;static \u0275fac=function(n){return new(n||a)};static \u0275cmp=l({type:a,selectors:[["app-checkbox-preview"]],decls:61,vars:5,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Checkbox",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"checkboxes"],["color","primary"],["color","secondary"],["color","tertiary"],["color","warning"],["color","success"],["color","danger"],["color","info"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,c){n&1&&(e(0,"p",0)(1,"span",1),o(2,"Component"),t()(),e(3,"h1"),o(4,"Checkbox"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),o(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),o(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"div",6)(14,"kage-checkbox"),o(15,"Default Checkbox"),t(),e(16,"kage-checkbox",7),o(17,"Primary Checkbox"),t(),e(18,"kage-checkbox",8),o(19,"Secondary Checkbox"),t(),e(20,"kage-checkbox",9),o(21,"Tertiary Checkbox"),t(),e(22,"kage-checkbox",10),o(23,"Warning Checkbox"),t(),e(24,"kage-checkbox",11),o(25,"Success Checkbox"),t(),e(26,"kage-checkbox",12),o(27,"Danger Checkbox"),t(),e(28,"kage-checkbox",13),o(29,"Info Checkbox"),t()()(),e(30,"h3"),o(31,"Inputs"),t(),e(32,"p",4),o(33,"List of Input Parameters."),t(),e(34,"div",14)(35,"div",15)(36,"p"),o(37,"Name"),t(),e(38,"p"),o(39,"Default Value | Type"),t()(),e(40,"div",16)(41,"div",17)(42,"p"),o(43,"label"),t(),e(44,"p"),o(45,"Type `string`"),t()(),e(46,"div",17)(47,"p"),o(48,"color"),t(),e(49,"p"),o(50,"'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info'"),t()(),e(51,"div",17)(52,"p"),o(53,"name"),t(),e(54,"p"),o(55,"Type `string`"),t()(),e(56,"div",17)(57,"p"),o(58,"id"),t(),e(59,"p"),o(60,"Type `string`"),t()()()()),n&2&&(r(6),i("href","/library"),r(),i("href","/library/checkbox"),r(5),i("htmlCode",c.htmlCode)("scssCode",c.scssCode)("tsCode",c.tsCode))},dependencies:[p,x,k,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.checkboxes[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:10px;flex-wrap:wrap}"]})};export{s as CheckboxPreviewComponent};
