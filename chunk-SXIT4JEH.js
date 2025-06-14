import{a as u}from"./chunk-GEEGI6SP.js";import{A as c,B as g,f as p,h as s}from"./chunk-J4VQ6NPB.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Sa as i,bb as d,mb as r,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var v=class l{htmlCode=`
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
  `;static \u0275fac=function(o){return new(o||l)};static \u0275cmp=d({type:l,selectors:[["app-radio-preview"]],decls:73,vars:7,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Radio",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["name","colorChoice",3,"disabled"],["color","primary","value","primary"],["color","secondary","value","secondary"],["color","tertiary","value","tertiary"],["color","warning","value","warning"],["color","info","value","blue"],["value","danger","color","danger",3,"disabled"],["value","success","color","success"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(o,n){o&1&&(e(0,"p",0)(1,"span",1),a(2,"Component"),t()(),e(3,"h1"),a(4,"Radio"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"The Radio component lets users select a single option from a group. It supports custom styling, disabled states and integration with Angular forms."),t(),e(10,"app-code-preview",5)(11,"kage-radio-group",6)(12,"kage-radio",7),a(13,"Primary"),t(),e(14,"kage-radio",8),a(15,"Secondary"),t(),e(16,"kage-radio",9),a(17,"Tertiary"),t(),e(18,"kage-radio",10),a(19,"Warning"),t(),e(20,"kage-radio",11),a(21,"Info"),t(),e(22,"kage-radio",12),a(23,"Danger"),t(),e(24,"kage-radio",13),a(25,"Success"),t()()(),e(26,"h3"),a(27,"Input (kage-radio-group)"),t(),e(28,"p",4),a(29,"List of Input Parameters."),t(),e(30,"div",14)(31,"div",15)(32,"p"),a(33,"Name"),t(),e(34,"p"),a(35,"Default Value | Type"),t()(),e(36,"div",16)(37,"div",17)(38,"p"),a(39,"name"),t(),e(40,"p"),a(41,"Type `string`."),t()(),e(42,"div",17)(43,"p"),a(44,"disabled"),t(),e(45,"p"),a(46,"Type `boolean`. Default false"),t()()()(),e(47,"h3"),a(48,"Input (kage-radio)"),t(),e(49,"p",4),a(50,"List of Input Parameters."),t(),e(51,"div",14)(52,"div",15)(53,"p"),a(54,"Name"),t(),e(55,"p"),a(56,"Default Value | Type"),t()(),e(57,"div",16)(58,"div",17)(59,"p"),a(60,"value"),t(),e(61,"p"),a(62,"Type `any`."),t()(),e(63,"div",17)(64,"p"),a(65,"disabled"),t(),e(66,"p"),a(67,"Type `boolean`. Default false"),t()(),e(68,"div",17)(69,"p"),a(70,"color"),t(),e(71,"p"),a(72,"'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info'"),t()()()()),o&2&&(i(6),r("href","/library"),i(),r("href","/library/radio"),i(3),r("htmlCode",n.htmlCode)("scssCode",n.scssCode)("tsCode",n.tsCode),i(),r("disabled",!1),i(11),r("disabled",!0))},dependencies:[u,p,s,c,g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{v as RadioPreviewComponent};
