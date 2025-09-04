import{a as h}from"./chunk-SBKFTLTF.js";import{V as M,g as f,o as v,p as b}from"./chunk-LMKEWPLL.js";import"./chunk-QSYZJPWV.js";import{Da as s,Jb as o,Oa as r,Z as p,jb as d,kb as t,lb as n,mb as c,nb as C,ob as g,wb as u}from"./chunk-GXREA3OA.js";var l=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["app-modal-comp"]],decls:2,vars:0,template:function(e,i){e&1&&(C(0,"p"),o(1,"This is a modal"),g())},encapsulation:2})};var k=class a{modalService=p(M);showModal(){this.modalService.open(l)}tsCode=`
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
  `;htmlCode='<kage-button (click)="showModal()">Click me</kage-button>';scssCode="";static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["app-modal-preview"]],decls:13,vars:3,consts:[[1,"page-tag"],[1,"service"],["href","/library","label","Library"],["href","/library/modal","label","Modal"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"click"]],template:function(e,i){e&1&&(t(0,"p",0)(1,"span",1),o(2,"Service"),n()(),t(3,"h1"),o(4,"Modal"),n(),t(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),n(),t(8,"p",4),o(9,"The Kage-UI Modal Service enables you to open custom modal dialogs with ease. It supports dynamic component or template injection, input/output bindings, lifecycle hooks, and configurable options like size, backdrop, and close behavior\u2014perfect for building interactive workflows in Angular apps."),n(),t(10,"app-code-preview",5)(11,"kage-button",6),u("click",function(){return i.showModal()}),o(12,"Click me"),n()()),e&2&&(s(10),d("htmlCode",i.htmlCode)("scssCode",i.scssCode)("tsCode",i.tsCode))},dependencies:[h,b,f,v],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{k as ModalPreviewComponent};
