import{a as M}from"./chunk-3Z46KEDQ.js";import{T as u,f as g,h as v,o as f}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{$ as p,Ib as n,Sa as s,bb as i,mb as d,ub as o,vb as t,wb as c,zb as C}from"./chunk-KDFRMSR3.js";var m=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=i({type:a,selectors:[["app-modal-comp"]],decls:2,vars:0,template:function(e,r){e&1&&(o(0,"p"),n(1,"This is a modal"),t())},encapsulation:2})};var b=class a{modalService=p(u);showModal(){this.modalService.open(m)}tsCode=`
  import { Component } from '@angular/core';
  import { KageButton, KageModalCtrl } from 'kage-ui';
  import { ModalCompComponent } from 'path-to-my-modal-component';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    private modalService = inject(KageModalCtrl);
    showModal() {
      this.modalService.open(MyModalComponent);
    }
  }
  `;htmlCode='<kage-button (click)="showModal()">Click me</kage-button>';scssCode="";static \u0275fac=function(e){return new(e||a)};static \u0275cmp=i({type:a,selectors:[["app-modal-preview"]],decls:13,vars:3,consts:[[1,"page-tag"],[1,"service"],["href","/library","label","Library"],["href","/library/modal","label","Modal"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"click"]],template:function(e,r){e&1&&(o(0,"p",0)(1,"span",1),n(2,"Service"),t()(),o(3,"h1"),n(4,"Modal"),t(),o(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),o(8,"p",4),n(9,"Service Behavior Breakdown"),t(),o(10,"app-code-preview",5)(11,"kage-button",6),C("click",function(){return r.showModal()}),n(12,"Click me"),t()()),e&2&&(s(10),d("htmlCode",r.htmlCode)("scssCode",r.scssCode)("tsCode",r.tsCode))},dependencies:[M,f,g,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{b as ModalPreviewComponent};
