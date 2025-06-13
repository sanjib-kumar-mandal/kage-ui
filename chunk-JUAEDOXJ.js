import{a as E}from"./chunk-2UWFFPLZ.js";import{C as c,f as d,h as s,s as g,v as x}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as i,bb as p,mb as r,ub as e,vb as t,wb as o}from"./chunk-KDFRMSR3.js";var S=class l{htmlCode=`
    <kage-grid>
        <kage-row>
            <kage-col [span]="6"><p>Col 1</p></kage-col>
            <kage-col [span]="6"> Col 2</kage-col>
        </kage-row>
        <kage-row>
            <kage-col [span]="12">Col 3</kage-col>
        </kage-row>
    </kage-grid>
  `;tsCode=`
  import { Component } from '@angular/core';
  import { KageGrid, KageRow, KageCol } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageGrid, KageRow, KageCol, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=p({type:l,selectors:[["app-grid-preview"]],decls:131,vars:7,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Grid",3,"href"],[1,"description"],[3,"tsCode","htmlCode"],[3,"span"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,m){a&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Grid"),t(),e(5,"kage-bread-crumbs"),o(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"kage-grid")(14,"kage-row")(15,"kage-col",6)(16,"p"),n(17,"Col 1"),t()(),e(18,"kage-col",6),n(19," Col 2"),t()(),e(20,"kage-row")(21,"kage-col",6),n(22,"Col 3"),t()()()(),e(23,"h3"),n(24,"Inputs (k-grid)"),t(),e(25,"p",4),n(26,"List of Input Parameters."),t(),e(27,"div",7)(28,"div",8)(29,"p"),n(30,"Name"),t(),e(31,"p"),n(32,"Default Value | Type"),t()(),e(33,"div",9)(34,"div",10)(35,"p"),n(36,"gap"),t(),e(37,"p"),n(38,"0 | 1 | 2 | 3 | 4"),t()()()(),e(39,"h3"),n(40,"Inputs (k-row)"),t(),e(41,"p",4),n(42,"List of Input Parameters."),t(),e(43,"div",7)(44,"div",8)(45,"p"),n(46,"Name"),t(),e(47,"p"),n(48,"Default Value | Type"),t()(),e(49,"div",9)(50,"div",10)(51,"p"),n(52,"align"),t(),e(53,"p"),n(54,"'start' | 'center' | 'end'. Default 'start'"),t()(),e(55,"div",10)(56,"p"),n(57,"justify"),t(),e(58,"p"),n(59,"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'. Default 'start'"),t()()()(),e(60,"h3"),n(61,"Inputs (k-col)"),t(),e(62,"p",4),n(63,"List of Input Parameters."),t(),e(64,"div",7)(65,"div",8)(66,"p"),n(67,"Name"),t(),e(68,"p"),n(69,"Default Value | Type"),t()(),e(70,"div",9)(71,"div",10)(72,"p"),n(73,"xs"),t(),e(74,"p"),n(75,"Type `number`"),t()(),e(76,"div",10)(77,"p"),n(78,"sm"),t(),e(79,"p"),n(80,"Type `number`"),t()(),e(81,"div",10)(82,"p"),n(83,"md"),t(),e(84,"p"),n(85,"Type `number`"),t()(),e(86,"div",10)(87,"p"),n(88,"lg"),t(),e(89,"p"),n(90,"Type `number`"),t()(),e(91,"div",10)(92,"p"),n(93,"xl"),t(),e(94,"p"),n(95,"Type `number`"),t()(),e(96,"div",10)(97,"p"),n(98,"offsetXs"),t(),e(99,"p"),n(100,"Type `number`"),t()(),e(101,"div",10)(102,"p"),n(103,"offsetSm"),t(),e(104,"p"),n(105,"Type `number`"),t()(),e(106,"div",10)(107,"p"),n(108,"offsetMd"),t(),e(109,"p"),n(110,"Type `number`"),t()(),e(111,"div",10)(112,"p"),n(113,"offsetLg"),t(),e(114,"p"),n(115,"Type `number`"),t()(),e(116,"div",10)(117,"p"),n(118,"offsetXl"),t(),e(119,"p"),n(120,"Type `number`"),t()(),e(121,"div",10)(122,"p"),n(123,"span"),t(),e(124,"p"),n(125,"Type `number`"),t()(),e(126,"div",10)(127,"p"),n(128,"offset"),t(),e(129,"p"),n(130,"Type `number`"),t()()()()),a&2&&(i(6),r("href","/library"),i(),r("href","/library/grid"),i(5),r("tsCode",m.tsCode)("htmlCode",m.htmlCode),i(3),r("span",6),i(3),r("span",6),i(3),r("span",12))},dependencies:[E,d,s,x,c,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{S as GridPreviewComponent};
