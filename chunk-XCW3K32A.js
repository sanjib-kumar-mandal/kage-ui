import{a as g}from"./chunk-NYX3SKFI.js";import{g as l,h as m,o as s}from"./chunk-WEB7ABMC.js";import"./chunk-LXJ7KHNF.js";import{Ga as i,Ra as d,ab as o,jb as e,kb as t,lb as r,zb as n}from"./chunk-TROVTPPJ.js";var h=class p{htmlCode=`
  <div class="line">
      <kage-icon name="home"></kage-icon>
      <kage-icon name="home" [depth]="2"></kage-icon>
      <kage-icon name="home" [depth]="3"></kage-icon>
      <kage-icon name="home" [depth]="4"></kage-icon>
      <kage-icon name="home" [depth]="5"></kage-icon>
      <kage-icon name="home" [depth]="6"></kage-icon>
  </div>
  <div class="line">
      <kage-icon name="add" [color]="'primary'"></kage-icon>
      <kage-icon name="add" [depth]="2" [color]="'secondary'"></kage-icon>
      <kage-icon name="add" [depth]="3" [color]="'tertiary'"></kage-icon>
      <kage-icon name="add" [depth]="4" [color]="'success'"></kage-icon>
      <kage-icon name="add" [depth]="5" [color]="'danger'"></kage-icon>
      <kage-icon name="add" [depth]="6" [color]="'warning'"></kage-icon>
  </div>
  `;scssCode=`
    .line{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }
  `;tsCode=`
    import { Component } from '@angular/core';
    import { KageIcon } from 'kage-ui';
    ...

    @Component({
      selector: 'app-example',
      imports: [ KageIcon, ... ],
      templateUrl: '...',
      styleUrl: '...',
    })
    export class AppExampleComponent {}
  `;static \u0275fac=function(a){return new(a||p)};static \u0275cmp=d({type:p,selectors:[["app-icon-preview"]],decls:62,vars:22,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["label","Library",3,"href"],["label","Icon",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"lines"],[1,"line"],["name","home"],["name","home",3,"depth"],["name","add",3,"color"],["name","add",3,"depth","color"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,c){a&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Icon"),t(),e(5,"kage-bread-crumbs",2),r(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),n(9,'A lightweight, customizable SVG-based icon component designed for modern Angular apps. Supports dynamic stroke width, color, accessibility, and sharp-edged designs with consistent viewBox="0 0 40 40" geometry.'),t(),e(10,"app-code-preview",6)(11,"div",7)(12,"div",8),r(13,"kage-icon",9)(14,"kage-icon",10)(15,"kage-icon",10)(16,"kage-icon",10)(17,"kage-icon",10)(18,"kage-icon",10),t(),e(19,"div",8),r(20,"kage-icon",11)(21,"kage-icon",12)(22,"kage-icon",12)(23,"kage-icon",12)(24,"kage-icon",12)(25,"kage-icon",12),t()()(),e(26,"h3"),n(27,"Input Signals"),t(),e(28,"p",5),n(29,"List of Input Parameters."),t(),e(30,"div",13)(31,"div",14)(32,"p"),n(33,"Name"),t(),e(34,"p"),n(35,"Default Value | Type"),t()(),e(36,"div",15)(37,"div",16)(38,"p"),n(39,"name"),t(),e(40,"p"),n(41,"`string`"),t()(),e(42,"div",16)(43,"p"),n(44,"svgSrc"),t(),e(45,"p"),n(46,"`string`"),t()(),e(47,"div",16)(48,"p"),n(49,"size"),t(),e(50,"p"),n(51,"`number`"),t()(),e(52,"div",16)(53,"p"),n(54,"depth"),t(),e(55,"p"),n(56,"`string`"),t()(),e(57,"div",16)(58,"p"),n(59,"color"),t(),e(60,"p"),n(61,"'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info'"),t()()()()),a&2&&(i(5),o("iconDepth",3),i(),o("href","/library"),i(),o("href","/library/icon"),i(3),o("htmlCode",c.htmlCode)("scssCode",c.scssCode)("tsCode",c.tsCode),i(4),o("depth",2),i(),o("depth",3),i(),o("depth",4),i(),o("depth",5),i(),o("depth",6),i(2),o("color","primary"),i(),o("depth",2)("color","secondary"),i(),o("depth",3)("color","tertiary"),i(),o("depth",4)("color","success"),i(),o("depth",5)("color","danger"),i(),o("depth",6)("color","warning"))},dependencies:[l,s,m,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.lines[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.lines[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:20px}"]})};export{h as IconPreviewComponent};
