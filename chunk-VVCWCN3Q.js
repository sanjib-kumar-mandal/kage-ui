import{a as u}from"./chunk-GEEGI6SP.js";import{d as m,f as p,h as l}from"./chunk-J4VQ6NPB.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Sa as n,bb as c,mb as r,ub as e,vb as t,wb as d}from"./chunk-KDFRMSR3.js";var g=class s{htmlCode=`
  <kage-accordion [expanded]="true">
      <p slot="header">Section 1</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="success">
      <p slot="header">Section 2</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="danger">
      <p slot="header">Section 3</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  <kage-accordion color="warning">
      <p slot="header">Section 4</p>
      <p slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!</p>
  </kage-accordion>
  `;scssCode="";tsCode=`
      import { Component } from '@angular/core';
      import { KageAccordion } from 'kage-ui';
      ...

      @Component({
        selector: 'app-example',
        imports: [ KageAccordion, ... ],
        templateUrl: '...',
        styleUrl: '...',
      })
      export class AppExampleComponent {}
    `;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=c({type:s,selectors:[["app-accordion-preview"]],decls:52,vars:5,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["href","/library","label","Library"],["href","/library/accordion","label","Accordion"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"expanded"],["slot","header"],["slot","content"],["color","success"],["color","danger"],["color","warning"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(o,a){o&1&&(e(0,"p",0)(1,"span",1),i(2,"Component"),t()(),e(3,"h1"),i(4,"Accordion"),t(),e(5,"kage-bread-crumbs",2),d(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),i(9,"The Accordion component organizes content into collapsible sections, allowing users to expand and collapse panels as needed. It supports smooth animations and dynamic content loading. Ideal for FAQs, settings panels, or any content that benefits from structured toggling. Custom header and theme compatibility are fully supported."),t(),e(10,"app-code-preview",6)(11,"kage-accordion",7)(12,"p",8),i(13,"Section 1"),t(),e(14,"p",9),i(15,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!"),t()(),e(16,"kage-accordion",10)(17,"p",8),i(18,"Section 2"),t(),e(19,"p",9),i(20,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!"),t()(),e(21,"kage-accordion",11)(22,"p",8),i(23,"Section 3"),t(),e(24,"p",9),i(25,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!"),t()(),e(26,"kage-accordion",12)(27,"p",8),i(28,"Section 4"),t(),e(29,"p",9),i(30,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos quo vitae sed sequi? Dolore, vero error explicabo est quos quibusdam nesciunt quo corrupti sint, adipisci accusamus? Tenetur, amet cum!"),t()()(),e(31,"h3"),i(32,"Inputs"),t(),e(33,"p",5),i(34,"List of Input Parameters."),t(),e(35,"div",13)(36,"div",14)(37,"p"),i(38,"Name"),t(),e(39,"p"),i(40,"Values"),t()(),e(41,"div",15)(42,"div",16)(43,"p"),i(44,"color"),t(),e(45,"p"),i(46,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(47,"div",16)(48,"p"),i(49,"expanded"),t(),e(50,"p"),i(51,"true | false"),t()()()()),o&2&&(n(5),r("iconDepth",2),n(5),r("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),n(),r("expanded",!0))},dependencies:[u,m,p,l],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]   kage-accordion[_ngcontent-%COMP%]{margin-bottom:20px;display:block}"]})};export{g as AccordionPreviewComponent};
