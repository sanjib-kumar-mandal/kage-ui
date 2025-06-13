import{a as u}from"./chunk-6UVKUOTH.js";import{f as p,h as c}from"./chunk-ZD2OAGNC.js";import{m as b}from"./chunk-3GFDRZ37.js";import{Ib as r,Qb as s,Sa as m,bb as d,mb as o,ub as e,vb as t,wb as i}from"./chunk-KDFRMSR3.js";var k=()=>({opr:"bread-crumb"}),g=class l{htmlCode=`
  <kage-bread-crumbs>
      <kage-bread-crumb label="Test" [routerLink]="'/ui-components'" [queryParams]="{opr: 'bread-crumb'}"></kage-bread-crumb>
      <kage-bread-crumb label="Test" href="#test"></kage-bread-crumb>
      <kage-bread-crumb label="Test" href="#test"></kage-bread-crumb>
      <kage-bread-crumb label="Test" href="#test"></kage-bread-crumb>
  </kage-bread-crumbs>
  `;scssCode="";tsCode=`
      import { Component } from '@angular/core';
      import { KageBreadCrumb, KageBreadCrumbs } from 'kage-ui';
      ...

      @Component({
        selector: 'app-example',
        imports: [ KageBreadCrumb, KageBreadCrumbs, ... ],
        templateUrl: '...',
        styleUrl: '...',
      })
      export class AppExampleComponent {}
  `;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-bread-crumbs-preview"]],decls:37,vars:6,consts:[[1,"page-tag"],[1,"component"],["href","/library","label","Library"],["href","/library/bread-crumb","label","Bread Crumb"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],["label","Test",3,"routerLink","queryParams"],["label","Test","href","#test"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,n){a&1&&(e(0,"p",0)(1,"span",1),r(2,"Component"),t()(),e(3,"h1"),r(4,"Bread Crumbs"),t(),e(5,"kage-bread-crumbs"),i(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"kage-bread-crumbs"),i(12,"kage-bread-crumb",6)(13,"kage-bread-crumb",7)(14,"kage-bread-crumb",7)(15,"kage-bread-crumb",7),t()(),e(16,"h3"),r(17,"Inputs (k-bread-crumb)"),t(),e(18,"p",4),r(19,"List of Input Parameters."),t(),e(20,"div",8)(21,"div",9)(22,"p"),r(23,"Name"),t(),e(24,"p"),r(25,"Default Value | Type"),t()(),e(26,"div",10)(27,"div",11)(28,"p"),r(29,"label"),t(),e(30,"p"),r(31,"Type `string`"),t()(),e(32,"div",11)(33,"p"),r(34,"href"),t(),e(35,"p"),r(36,"Type `string`"),t()()()()),a&2&&(m(10),o("htmlCode",n.htmlCode)("scssCode",n.scssCode)("tsCode",n.tsCode),m(2),o("routerLink","/ui-components")("queryParams",s(5,k)))},dependencies:[u,p,c,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{g as BreadCrumbsPreviewComponent};
