import{a as k}from"./chunk-E4LTLPYW.js";import{I as x,g as v,h as f,o as S,z as h}from"./chunk-F6EKI6RD.js";import"./chunk-742PDQ6L.js";import{Ga as a,Hb as s,Ra as u,ab as r,gb as m,hb as d,ib as c,jb as e,kb as t,lb as l,zb as i}from"./chunk-TROVTPPJ.js";var E=()=>["Apple","Banana","Orange","Guava","Walnuts","Papaya","Mango","Grapes","Muskmelon","Strawberry","Peach"],b=()=>["Apple","Banana","Orange"];function y(o,p){if(o&1&&l(0,"kage-option",10),o&2){let n=p.$implicit;r("value",n)("label",n)}}function w(o,p){if(o&1&&l(0,"kage-option",10),o&2){let n=p.$implicit;r("value",n)("label",n)}}function _(o,p){if(o&1&&l(0,"kage-option",10),o&2){let n=p.$implicit;r("value",n)("label",n)}}var C=class o{htmlCode=`
    <kage-select placeholder="Choose fruits" [disabled]="true">
        <kage-icon name="document" slot="icon-start" [depth]="3"></kage-icon>
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
    </kage-select>
    <kage-select placeholder="Choose fruits">
        <kage-icon name="document" slot="icon-start" [depth]="3"></kage-icon>
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
        <kage-icon name="person" slot="icon-end" [depth]="3"></kage-icon>
    </kage-select>
    <kage-select placeholder="Choose fruits">
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
        <kage-icon name="person" slot="icon-end" [depth]="3"></kage-icon>
    </kage-select>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageSelect, KageOption } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSelect, KageOption, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=u({type:o,selectors:[["app-select-preview"]],decls:113,vars:14,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["label","Library",3,"href"],["label","Select",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"previewer"],["placeholder","Choose fruits",3,"disabled"],["name","document","slot","icon-start",3,"depth"],[3,"value","label"],["placeholder","Choose fruits","label","Select one"],["name","person","slot","icon-end",3,"depth"],["placeholder","Choose fruits"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(n,g){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Component"),t()(),e(3,"h1"),i(4,"Select"),t(),e(5,"kage-bread-crumbs",2),l(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),i(9,"The Select component provides a customizable dropdown menu allowing users to choose one option. It supports keyboard navigation, dynamic data binding, and full integration with Angular forms using FormControl or ngModel."),t(),e(10,"app-code-preview",6)(11,"div",7)(12,"kage-select",8),l(13,"kage-icon",9),d(14,y,1,2,"kage-option",10,m),t(),e(16,"kage-select",11),l(17,"kage-icon",9),d(18,w,1,2,"kage-option",10,m),l(20,"kage-icon",12),t(),e(21,"kage-select",13),d(22,_,1,2,"kage-option",10,m),l(24,"kage-icon",12),t()()(),e(25,"h3"),i(26,"Input"),t(),e(27,"p",5),i(28,"List of Input Parameters."),t(),e(29,"div",14)(30,"div",15)(31,"p"),i(32,"Name"),t(),e(33,"p"),i(34,"Default Value | Type"),t()(),e(35,"div",16)(36,"div",17)(37,"p"),i(38,"placeholder"),t(),e(39,"p"),i(40,"Type `string`. Default 'Select...'"),t()(),e(41,"div",17)(42,"p"),i(43,"multiple"),t(),e(44,"p"),i(45,"Type `boolean`. Default false"),t()()()(),e(46,"h3"),i(47,"Output"),t(),e(48,"p",5),i(49,"List of Output Parameters."),t(),e(50,"div",14)(51,"div",15)(52,"p"),i(53,"Name"),t(),e(54,"p"),i(55,"Default Value | Type"),t()(),e(56,"div",16)(57,"div",17)(58,"p"),i(59,"valueChange"),t(),e(60,"p"),i(61,"Type `any`"),t()()()(),e(62,"h3"),i(63,"Custom CSS Variables"),t(),e(64,"p",5),i(65,"Recommended CSS Variable List \u2014 Defining values using these variables is advised to enhance maintainability and optimize CSS performance."),t(),e(66,"div",14)(67,"div",15)(68,"p"),i(69,"Name"),t(),e(70,"p"),i(71,"Fallback Values"),t()(),e(72,"div",16)(73,"div",17)(74,"p"),i(75,"--kage-select-border-top-width"),t(),e(76,"p"),i(77,"1px"),t()(),e(78,"div",17)(79,"p"),i(80,"--kage-select-border-right-width"),t(),e(81,"p"),i(82,"1px"),t()(),e(83,"div",17)(84,"p"),i(85,"--kage-select-border-bottom-width"),t(),e(86,"p"),i(87,"1px"),t()(),e(88,"div",17)(89,"p"),i(90,"--kage-select-border-left-width"),t(),e(91,"p"),i(92,"1px"),t()(),e(93,"div",17)(94,"p"),i(95,"--kage-select-border-color"),t(),e(96,"p"),i(97,"--color-medium"),t()(),e(98,"div",17)(99,"p"),i(100,"--kage-select-background"),t(),e(101,"p"),i(102,"transparent"),t()(),e(103,"div",17)(104,"p"),i(105,"--kage-select-background-hover"),t(),e(106,"p"),i(107,"transparent"),t()(),e(108,"div",17)(109,"p"),i(110,"--kage-select-border-radius"),t(),e(111,"p"),i(112,"0px"),t()()()()),n&2&&(a(5),r("iconDepth",3),a(),r("href","/library"),a(),r("href","/library/select"),a(3),r("htmlCode",g.htmlCode)("scssCode",g.scssCode)("tsCode",g.tsCode),a(2),r("disabled",!0),a(),r("depth",3),a(),c(s(11,E)),a(3),r("depth",3),a(),c(s(12,b)),a(2),r("depth",3),a(2),c(s(13,b)),a(2),r("depth",3))},dependencies:[k,v,S,x,h,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.previewer[_ngcontent-%COMP%]{min-height:300px;display:flex;flex-direction:column;gap:20px}"]})};export{C as SelectPreviewComponent};
