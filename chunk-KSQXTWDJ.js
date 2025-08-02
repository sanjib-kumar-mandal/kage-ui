import{a as b}from"./chunk-OPPKJ6H4.js";import{U as v,g,o as u,p as f}from"./chunk-A4CCQ3TQ.js";import"./chunk-LXJ7KHNF.js";import{Ga as s,Ra as r,_ as p,ab as c,jb as o,kb as t,lb as d,qb as C,zb as n}from"./chunk-TROVTPPJ.js";var l=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["app-modal-comp"]],decls:2,vars:0,template:function(e,i){e&1&&(o(0,"p"),n(1,"This is a modal"),t())},encapsulation:2})};var M=class a{modalService=p(v);showModal(){this.modalService.open(l)}tsCode=`
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
  `;htmlCode='<kage-button (click)="showModal()">Click me</kage-button>';scssCode="";static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["app-modal-preview"]],decls:13,vars:3,consts:[[1,"page-tag"],[1,"service"],["href","/library","label","Library"],["href","/library/modal","label","Modal"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"click"]],template:function(e,i){e&1&&(o(0,"p",0)(1,"span",1),n(2,"Service"),t()(),o(3,"h1"),n(4,"Modal"),t(),o(5,"kage-bread-crumbs"),d(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),o(8,"p",4),n(9,"The Kage-UI Modal Service enables you to open custom modal dialogs with ease. It supports dynamic component or template injection, input/output bindings, lifecycle hooks, and configurable options like size, backdrop, and close behavior\u2014perfect for building interactive workflows in Angular apps."),t(),o(10,"app-code-preview",5)(11,"kage-button",6),C("click",function(){return i.showModal()}),n(12,"Click me"),t()()),e&2&&(s(10),c("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode))},dependencies:[b,f,g,u],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{M as ModalPreviewComponent};
