import{a as b}from"./chunk-3Z46KEDQ.js";import{G as S,f,h as v,y as C}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Qb as g,Sa as a,bb as c,mb as l,rb as d,sb as s,tb as u,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var x=()=>["Apple","Banana","Orange"];function y(r,o){if(r&1&&m(0,"kage-option",8),r&2){let i=o.$implicit;l("value",i)("label",i)}}var h=class r{htmlCode=`
    <kage-select placeholder="Choose fruits" [name]="'test'" [multiple]="false">
        @for (fruit of ['Apple', 'Banana', 'Orange']; track $index) {
            <kage-option [value]="fruit" [label]="fruit"></kage-option>
        }
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
  `;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=c({type:r,selectors:[["app-select-preview"]],decls:52,vars:8,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Select",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[1,"previewer"],["placeholder","Choose fruits",3,"name","multiple"],[3,"value","label"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(i,p){i&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Select"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-select",7),s(13,y,1,2,"kage-option",8,d),t()()(),e(15,"h3"),n(16,"Input"),t(),e(17,"p",4),n(18,"List of Input Parameters."),t(),e(19,"div",9)(20,"div",10)(21,"p"),n(22,"Name"),t(),e(23,"p"),n(24,"Default Value | Type"),t()(),e(25,"div",11)(26,"div",12)(27,"p"),n(28,"placeholder"),t(),e(29,"p"),n(30,"Type `string`. Default 'Select...'"),t()(),e(31,"div",12)(32,"p"),n(33,"multiple"),t(),e(34,"p"),n(35,"Type `boolean`. Default false"),t()()()(),e(36,"h3"),n(37,"Output"),t(),e(38,"p",4),n(39,"List of Output Parameters."),t(),e(40,"div",9)(41,"div",10)(42,"p"),n(43,"Name"),t(),e(44,"p"),n(45,"Default Value | Type"),t()(),e(46,"div",11)(47,"div",12)(48,"p"),n(49,"valueChange"),t(),e(50,"p"),n(51,"Type `any`"),t()()()()),i&2&&(a(6),l("href","/library"),a(),l("href","/library/select"),a(3),l("htmlCode",p.htmlCode)("scssCode",p.scssCode)("tsCode",p.tsCode),a(2),l("name","test")("multiple",!1),a(),u(g(7,x)))},dependencies:[b,f,v,S,C],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.previewer[_ngcontent-%COMP%]{min-height:300px}"]})};export{h as SelectPreviewComponent};
