import{a as c}from"./chunk-3Z46KEDQ.js";import{C as g,f as d,h as s}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as i,bb as p,mb as a,ub as e,vb as t,wb as l}from"./chunk-KDFRMSR3.js";var u=class m{htmlCode=`
    <kage-range></kage-range>
    <kage-range color="danger" [showTooltip]="true"></kage-range>
    <kage-range color="success" [showTooltip]="true"></kage-range>
    <kage-range color="warning" [showTooltip]="true"></kage-range>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageRange } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageRange, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(r){return new(r||m)};static \u0275cmp=p({type:m,selectors:[["app-range-preview"]],decls:87,vars:8,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Range",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["color","danger",3,"showTooltip"],["color","success",3,"showTooltip"],["color","warning",3,"showTooltip"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,o){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Range"),t(),e(5,"kage-bread-crumbs"),l(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5),l(11,"kage-range")(12,"kage-range",6)(13,"kage-range",7)(14,"kage-range",8),t(),e(15,"h3"),n(16,"Input"),t(),e(17,"p",4),n(18,"List of Input Parameters."),t(),e(19,"div",9)(20,"div",10)(21,"p"),n(22,"Name"),t(),e(23,"p"),n(24,"Default Value | Type"),t()(),e(25,"div",11)(26,"div",12)(27,"p"),n(28,"min"),t(),e(29,"p"),n(30,"Type `number`. Default 0"),t()(),e(31,"div",12)(32,"p"),n(33,"max"),t(),e(34,"p"),n(35,"Type `number`. Default 100"),t()(),e(36,"div",12)(37,"p"),n(38,"step"),t(),e(39,"p"),n(40,"Type `number`. Default 1"),t()(),e(41,"div",12)(42,"p"),n(43,"disabled"),t(),e(44,"p"),n(45,"Type `boolean`. Default false"),t()(),e(46,"div",12)(47,"p"),n(48,"ticks"),t(),e(49,"p"),n(50,"Type `boolean | Array<string>`. Default false"),t()(),e(51,"div",12)(52,"p"),n(53,"showTooltip"),t(),e(54,"p"),n(55,"Type `boolean`. Default false"),t()(),e(56,"div",12)(57,"p"),n(58,"color"),t(),e(59,"p"),n(60,"'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info'"),t()()()(),e(61,"h3"),n(62,"Output"),t(),e(63,"p",4),n(64,"List of Output Parameters."),t(),e(65,"div",9)(66,"div",10)(67,"p"),n(68,"Name"),t(),e(69,"p"),n(70,"Default Value | Type"),t()(),e(71,"div",11)(72,"div",12)(73,"p"),n(74,"valueChange"),t(),e(75,"p"),n(76,"Type `number`"),t()(),e(77,"div",12)(78,"p"),n(79,"focus"),t(),e(80,"p"),n(81,"Type `void`"),t()(),e(82,"div",12)(83,"p"),n(84,"blur"),t(),e(85,"p"),n(86,"Type `void`"),t()()()()),r&2&&(i(6),a("href","/library"),i(),a("href","/library/range"),i(3),a("htmlCode",o.htmlCode)("scssCode",o.scssCode)("tsCode",o.tsCode),i(2),a("showTooltip",!0),i(),a("showTooltip",!0),i(),a("showTooltip",!0))},dependencies:[c,d,s,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{u as RangePreviewComponent};
