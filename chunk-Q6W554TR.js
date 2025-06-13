import{a as u}from"./chunk-YX7X4TWZ.js";import{A as g,f as p,h as s,z as c}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Sa as i,bb as d,mb as r,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var v=class l{htmlCode=`
    <kage-radio-group name="colorChoice" [disabled]="false">
        <kage-radio color="primary" value="primary">Primary</kage-radio>
        <kage-radio color="secondary" value="secondary">Secondary</kage-radio>
        <kage-radio color="tertiary" value="tertiary">Tertiary</kage-radio>
        <kage-radio color="warning" value="warning">Warning</kage-radio>
        <kage-radio color="info" value="blue">Info</kage-radio>
        <kage-radio value="danger" color="danger" [disabled]="true">Danger</kage-radio>
        <kage-radio value="success" color="success">Success</kage-radio>
    </kage-radio-group>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageRadio, KageRadioGroup } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRadio, KageRadioGroup, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["app-radio-preview"]],decls:75,vars:7,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Radio",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["name","colorChoice",3,"disabled"],["color","primary","value","primary"],["color","secondary","value","secondary"],["color","tertiary","value","tertiary"],["color","warning","value","warning"],["color","info","value","blue"],["value","danger","color","danger",3,"disabled"],["value","success","color","success"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,o){n&1&&(e(0,"p",0)(1,"span",1),a(2,"Component"),t()(),e(3,"h1"),a(4,"Radio"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),a(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"kage-radio-group",6)(14,"kage-radio",7),a(15,"Primary"),t(),e(16,"kage-radio",8),a(17,"Secondary"),t(),e(18,"kage-radio",9),a(19,"Tertiary"),t(),e(20,"kage-radio",10),a(21,"Warning"),t(),e(22,"kage-radio",11),a(23,"Info"),t(),e(24,"kage-radio",12),a(25,"Danger"),t(),e(26,"kage-radio",13),a(27,"Success"),t()()(),e(28,"h3"),a(29,"Input (kage-radio-group)"),t(),e(30,"p",4),a(31,"List of Input Parameters."),t(),e(32,"div",14)(33,"div",15)(34,"p"),a(35,"Name"),t(),e(36,"p"),a(37,"Default Value | Type"),t()(),e(38,"div",16)(39,"div",17)(40,"p"),a(41,"name"),t(),e(42,"p"),a(43,"Type `string`."),t()(),e(44,"div",17)(45,"p"),a(46,"disabled"),t(),e(47,"p"),a(48,"Type `boolean`. Default false"),t()()()(),e(49,"h3"),a(50,"Input (kage-radio)"),t(),e(51,"p",4),a(52,"List of Input Parameters."),t(),e(53,"div",14)(54,"div",15)(55,"p"),a(56,"Name"),t(),e(57,"p"),a(58,"Default Value | Type"),t()(),e(59,"div",16)(60,"div",17)(61,"p"),a(62,"value"),t(),e(63,"p"),a(64,"Type `any`."),t()(),e(65,"div",17)(66,"p"),a(67,"disabled"),t(),e(68,"p"),a(69,"Type `boolean`. Default false"),t()(),e(70,"div",17)(71,"p"),a(72,"color"),t(),e(73,"p"),a(74,"'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info'"),t()()()()),n&2&&(i(6),r("href","/library"),i(),r("href","/library/radio"),i(5),r("htmlCode",o.htmlCode)("scssCode",o.scssCode)("tsCode",o.tsCode),i(),r("disabled",!1),i(11),r("disabled",!0))},dependencies:[u,p,s,c,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as RadioPreviewComponent};
