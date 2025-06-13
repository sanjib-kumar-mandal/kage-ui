import{a as b}from"./chunk-6UVKUOTH.js";import{E as c,f as d,h as s}from"./chunk-ZD2OAGNC.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Sa as r,bb as p,mb as n,ub as e,vb as t,wb as o}from"./chunk-KDFRMSR3.js";var h=class m{htmlCode=`
    <kage-searchbar></kage-searchbar>
    <kage-searchbar [disabled]="true"></kage-searchbar>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageSearchbar } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSearchbar, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(i){return new(i||m)};static \u0275cmp=p({type:m,selectors:[["app-searchbar-preview"]],decls:65,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Searchbar",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[2,"display","block","margin-top","20px",3,"disabled"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(i,l){i&1&&(e(0,"p",0)(1,"span",1),a(2,"Component"),t()(),e(3,"h1"),a(4,"Search Bar"),t(),e(5,"kage-bread-crumbs"),o(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5),o(11,"kage-searchbar")(12,"kage-searchbar",6),t(),e(13,"h3"),a(14,"Input"),t(),e(15,"p",4),a(16,"List of Input Parameters."),t(),e(17,"div",7)(18,"div",8)(19,"p"),a(20,"Name"),t(),e(21,"p"),a(22,"Default Value | Type"),t()(),e(23,"div",9)(24,"div",10)(25,"p"),a(26,"placeholder"),t(),e(27,"p"),a(28,"Type `string`"),t()(),e(29,"div",10)(30,"p"),a(31,"debounce"),t(),e(32,"p"),a(33,"Type `number`. Default 300"),t()(),e(34,"div",10)(35,"p"),a(36,"autofocus"),t(),e(37,"p"),a(38,"Type `boolean`. Default false"),t()(),e(39,"div",10)(40,"p"),a(41,"disabled"),t(),e(42,"p"),a(43,"Type `boolean`"),t()(),e(44,"div",10)(45,"p"),a(46,"showClear"),t(),e(47,"p"),a(48,"Type `boolean`. Default true"),t()()()(),e(49,"h3"),a(50,"Output"),t(),e(51,"p",4),a(52,"List of Output Parameters."),t(),e(53,"div",7)(54,"div",8)(55,"p"),a(56,"Name"),t(),e(57,"p"),a(58,"Default Value | Type"),t()(),e(59,"div",9)(60,"div",10)(61,"p"),a(62,"search"),t(),e(63,"p"),a(64,"Type `string`"),t()()()()),i&2&&(r(6),n("href","/library"),r(),n("href","/library/searchbar"),r(3),n("htmlCode",l.htmlCode)("scssCode",l.scssCode)("tsCode",l.tsCode),r(2),n("disabled",!0))},dependencies:[b,d,s,c],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{h as SearchbarPreviewComponent};
