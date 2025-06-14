import{a as u}from"./chunk-AOOLJF6A.js";import{f as b,h as c}from"./chunk-K5VWRVRZ.js";import{m as p}from"./chunk-3GFDRZ37.js";import{Ib as r,Qb as d,Sa as n,bb as l,mb as o,ub as e,vb as t,wb as m}from"./chunk-KDFRMSR3.js";var h=()=>({opr:"bread-crumb"}),g=class s{htmlCode=`
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
  `;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=l({type:s,selectors:[["app-bread-crumbs-preview"]],decls:37,vars:7,consts:[[1,"page-tag"],[1,"component"],["href","/library","label","Library"],["href","/library/bread-crumb","label","Bread Crumb"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"iconDepth"],["label","Test",3,"routerLink","queryParams"],["label","Test","href","#test"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,i){a&1&&(e(0,"p",0)(1,"span",1),r(2,"Component"),t()(),e(3,"h1"),r(4,"Bread Crumbs"),t(),e(5,"kage-bread-crumbs"),m(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"The Breadcrumbs component provides a navigational trail that shows the user's current location within a site's hierarchy. It helps users understand the structure of the application and quickly navigate to previous levels. Supports custom separators, links, and dynamic generation from routes."),t(),e(10,"app-code-preview",5)(11,"kage-bread-crumbs",6),m(12,"kage-bread-crumb",7)(13,"kage-bread-crumb",8)(14,"kage-bread-crumb",8)(15,"kage-bread-crumb",8),t()(),e(16,"h3"),r(17,"Inputs (k-bread-crumb)"),t(),e(18,"p",4),r(19,"List of Input Parameters."),t(),e(20,"div",9)(21,"div",10)(22,"p"),r(23,"Name"),t(),e(24,"p"),r(25,"Default Value | Type"),t()(),e(26,"div",11)(27,"div",12)(28,"p"),r(29,"label"),t(),e(30,"p"),r(31,"Type `string`"),t()(),e(32,"div",12)(33,"p"),r(34,"href"),t(),e(35,"p"),r(36,"Type `string`"),t()()()()),a&2&&(n(10),o("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode),n(),o("iconDepth",3),n(),o("routerLink","/ui-components")("queryParams",d(6,h)))},dependencies:[u,b,c,p],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{g as BreadCrumbsPreviewComponent};
