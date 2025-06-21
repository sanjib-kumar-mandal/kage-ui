import{a as E}from"./chunk-IEV3VUBJ.js";import{E as x,g as d,i as s,u as c,x as g}from"./chunk-YZ425KXR.js";import"./chunk-5X2QXVHB.js";import{Ga as i,Ra as o,ab as r,ib as e,jb as t,kb as p,yb as n}from"./chunk-6VEGNWUI.js";var S=class l{htmlCode=`
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
  `;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=o({type:l,selectors:[["app-grid-preview"]],decls:129,vars:8,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["label","Library",3,"href"],["label","Grid",3,"href"],[1,"description"],[3,"tsCode","htmlCode"],[3,"span"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,m){a&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Grid"),t(),e(5,"kage-bread-crumbs",2),p(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),n(9,"The Grid component provides a flexible layout system based on rows and columns. It helps align content responsively across various screen sizes using customizable spacing, alignment, and breakpoints."),t(),e(10,"app-code-preview",6)(11,"kage-grid")(12,"kage-row")(13,"kage-col",7)(14,"p"),n(15,"Col 1"),t()(),e(16,"kage-col",7),n(17," Col 2"),t()(),e(18,"kage-row")(19,"kage-col",7),n(20,"Col 3"),t()()()(),e(21,"h3"),n(22,"Inputs (k-grid)"),t(),e(23,"p",5),n(24,"List of Input Parameters."),t(),e(25,"div",8)(26,"div",9)(27,"p"),n(28,"Name"),t(),e(29,"p"),n(30,"Default Value | Type"),t()(),e(31,"div",10)(32,"div",11)(33,"p"),n(34,"gap"),t(),e(35,"p"),n(36,"0 | 1 | 2 | 3 | 4"),t()()()(),e(37,"h3"),n(38,"Inputs (k-row)"),t(),e(39,"p",5),n(40,"List of Input Parameters."),t(),e(41,"div",8)(42,"div",9)(43,"p"),n(44,"Name"),t(),e(45,"p"),n(46,"Default Value | Type"),t()(),e(47,"div",10)(48,"div",11)(49,"p"),n(50,"align"),t(),e(51,"p"),n(52,"'start' | 'center' | 'end'. Default 'start'"),t()(),e(53,"div",11)(54,"p"),n(55,"justify"),t(),e(56,"p"),n(57,"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'. Default 'start'"),t()()()(),e(58,"h3"),n(59,"Inputs (k-col)"),t(),e(60,"p",5),n(61,"List of Input Parameters."),t(),e(62,"div",8)(63,"div",9)(64,"p"),n(65,"Name"),t(),e(66,"p"),n(67,"Default Value | Type"),t()(),e(68,"div",10)(69,"div",11)(70,"p"),n(71,"xs"),t(),e(72,"p"),n(73,"Type `number`"),t()(),e(74,"div",11)(75,"p"),n(76,"sm"),t(),e(77,"p"),n(78,"Type `number`"),t()(),e(79,"div",11)(80,"p"),n(81,"md"),t(),e(82,"p"),n(83,"Type `number`"),t()(),e(84,"div",11)(85,"p"),n(86,"lg"),t(),e(87,"p"),n(88,"Type `number`"),t()(),e(89,"div",11)(90,"p"),n(91,"xl"),t(),e(92,"p"),n(93,"Type `number`"),t()(),e(94,"div",11)(95,"p"),n(96,"offsetXs"),t(),e(97,"p"),n(98,"Type `number`"),t()(),e(99,"div",11)(100,"p"),n(101,"offsetSm"),t(),e(102,"p"),n(103,"Type `number`"),t()(),e(104,"div",11)(105,"p"),n(106,"offsetMd"),t(),e(107,"p"),n(108,"Type `number`"),t()(),e(109,"div",11)(110,"p"),n(111,"offsetLg"),t(),e(112,"p"),n(113,"Type `number`"),t()(),e(114,"div",11)(115,"p"),n(116,"offsetXl"),t(),e(117,"p"),n(118,"Type `number`"),t()(),e(119,"div",11)(120,"p"),n(121,"span"),t(),e(122,"p"),n(123,"Type `number`"),t()(),e(124,"div",11)(125,"p"),n(126,"offset"),t(),e(127,"p"),n(128,"Type `number`"),t()()()()),a&2&&(i(5),r("iconDepth",3),i(),r("href","/library"),i(),r("href","/library/grid"),i(3),r("tsCode",m.tsCode)("htmlCode",m.htmlCode),i(3),r("span",6),i(3),r("span",6),i(3),r("span",12))},dependencies:[E,d,s,g,x,c],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{S as GridPreviewComponent};
