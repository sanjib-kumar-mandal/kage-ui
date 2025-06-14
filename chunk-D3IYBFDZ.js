import{a as g}from"./chunk-AOOLJF6A.js";import{f as m,h as c,o as p,q as u}from"./chunk-K5VWRVRZ.js";import"./chunk-3GFDRZ37.js";import{Ib as a,Sa as o,bb as d,mb as i,ub as e,vb as t,wb as l}from"./chunk-KDFRMSR3.js";var b=class s{htmlCode=`
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
  `;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=d({type:s,selectors:[["app-card-preview"]],decls:40,vars:5,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Card",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[2,"width","300px"],["slot","card-image","src","https://images.unsplash.com/photo-1748810417930-987996d1a9e9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","alt",""],["slot","card-title"],["slot","card-subtitle"],["slot","card-content"],["slot","card-action",1,"btns"],["fill","clear"],["fill","clear","color","danger"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,n){r&1&&(e(0,"p",0)(1,"span",1),a(2,"Component"),t()(),e(3,"h1"),a(4,"Card"),t(),e(5,"kage-bread-crumbs"),l(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),a(9,"The Card component is a flexible container used to group related content. It supports customizable sections like header, body, and footer, and can display images, actions, and structured information in a clean, bordered layout."),t(),e(10,"app-code-preview",5)(11,"kage-card",6),l(12,"img",7),e(13,"h2",8),a(14,"Card title"),t(),e(15,"p",9),a(16,"Card subtitle"),t(),e(17,"p",10),a(18,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nesciunt consequatur rerum suscipit dolores, harum magnam, corrupti sunt reprehenderit, doloremque architecto ab esse voluptatum voluptatibus blanditiis. Dolores, atque consectetur."),t(),e(19,"div",11)(20,"kage-button",12),a(21,"Explore"),t(),e(22,"kage-button",13),a(23,"Explore"),t()()()(),e(24,"h3"),a(25,"Inputs"),t(),e(26,"p",4),a(27,"List of Input Parameters."),t(),e(28,"div",14)(29,"div",15)(30,"p"),a(31,"Name"),t(),e(32,"p"),a(33,"Default Value | Type"),t()(),e(34,"div",16)(35,"div",17)(36,"p"),a(37,"href"),t(),e(38,"p"),a(39,"Type `string`"),t()()()()),r&2&&(o(6),i("href","/library"),o(),i("href","/library/card"),o(3),i("htmlCode",n.htmlCode)("scssCode",n.scssCode)("tsCode",n.tsCode))},dependencies:[g,m,c,u,p],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}.btns[_ngcontent-%COMP%]{display:flex}.btns[_ngcontent-%COMP%]   k-button[_ngcontent-%COMP%]{display:block;margin-right:5px}.btns[_ngcontent-%COMP%]   k-button[_ngcontent-%COMP%]:last-child{margin-right:0!important}"]})};export{b as CardPreviewComponent};
