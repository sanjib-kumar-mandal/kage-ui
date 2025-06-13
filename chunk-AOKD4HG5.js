import{a as g}from"./chunk-3Z46KEDQ.js";import{f as d,h as p,o as c,q as u}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as r,Sa as i,bb as m,mb as n,ub as e,vb as t,wb as l}from"./chunk-KDFRMSR3.js";var b=class s{htmlCode=`
  <kage-card style="width: 300px;">
      <img slot="card-image" src="https://images.unsplash.com/photo-1748810417930-987996d1a9e9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <h2 slot="card-title">Card title</h2>
      <p slot="card-subtitle">Card subtitle</p>
      <p slot="card-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nesciunt consequatur rerum suscipit dolores, harum magnam, corrupti sunt reprehenderit, doloremque architecto ab esse voluptatum voluptatibus blanditiis. Dolores, atque consectetur.</p>
      <div class="btns" slot="card-action">
          <kage-button fill="clear">Explore</kage-button>
          <kage-button fill="clear" color="danger">Explore</kage-button>
      </div>
  </kage-card>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageCard } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageCard, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {}
  `;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=m({type:s,selectors:[["app-card-preview"]],decls:42,vars:5,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Card",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[2,"width","300px"],["slot","card-image","src","https://images.unsplash.com/photo-1748810417930-987996d1a9e9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","alt",""],["slot","card-title"],["slot","card-subtitle"],["slot","card-content"],["slot","card-action",1,"btns"],["fill","clear"],["fill","clear","color","danger"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(a,o){a&1&&(e(0,"p",0)(1,"span",1),r(2,"Component"),t()(),e(3,"h1"),r(4,"Card"),t(),e(5,"kage-bread-crumbs"),l(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),r(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"kage-card",6),l(14,"img",7),e(15,"h2",8),r(16,"Card title"),t(),e(17,"p",9),r(18,"Card subtitle"),t(),e(19,"p",10),r(20,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nesciunt consequatur rerum suscipit dolores, harum magnam, corrupti sunt reprehenderit, doloremque architecto ab esse voluptatum voluptatibus blanditiis. Dolores, atque consectetur."),t(),e(21,"div",11)(22,"kage-button",12),r(23,"Explore"),t(),e(24,"kage-button",13),r(25,"Explore"),t()()()(),e(26,"h3"),r(27,"Inputs"),t(),e(28,"p",4),r(29,"List of Input Parameters."),t(),e(30,"div",14)(31,"div",15)(32,"p"),r(33,"Name"),t(),e(34,"p"),r(35,"Default Value | Type"),t()(),e(36,"div",16)(37,"div",17)(38,"p"),r(39,"href"),t(),e(40,"p"),r(41,"Type `string`"),t()()()()),a&2&&(i(6),n("href","/library"),i(),n("href","/library/card"),i(5),n("htmlCode",o.htmlCode)("scssCode",o.scssCode)("tsCode",o.tsCode))},dependencies:[g,d,p,u,c],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.btns[_ngcontent-%COMP%]{display:flex}.btns[_ngcontent-%COMP%]   k-button[_ngcontent-%COMP%]{display:block;margin-right:5px}.btns[_ngcontent-%COMP%]   k-button[_ngcontent-%COMP%]:last-child{margin-right:0!important}"]})};export{b as CardPreviewComponent};
