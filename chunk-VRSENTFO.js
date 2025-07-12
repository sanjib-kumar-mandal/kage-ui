import{a as b}from"./chunk-UKFQHHSW.js";import{g as u,i as d,j as f,p as T}from"./chunk-3NKUUUGG.js";import"./chunk-5X2QXVHB.js";import{Ga as c,Ra as p,_ as l,ab as m,ib as t,jb as e,kb as g,pb as s,yb as o}from"./chunk-6VEGNWUI.js";var w=class r{htmlCode=`
  <kage-button (click)="infoToast()">Info Toast</kage-button>
  <kage-button (click)="errorToast()">Error Toast</kage-button>
  <kage-button (click)="successToast()">Success Toast</kage-button>
  <kage-button (click)="warningToast()">Warning Toast</kage-button>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageButton, KageToastCtrl } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    private toast = inject(KageToastCtrl);

    infoToast() {
      this.toast.show({
        message: 'New notification!',
        type: 'info',
        position: 'bottom-right',
        duration: 0, // persists until manually dismissed
      });
    }

    errorToast() {
      this.toast.show({
        message: 'Something went wrong!',
        type: 'danger',
        position: 'bottom-left',
        duration: 5000,
      });
    }

    successToast() {
      this.toast.show({
        message: 'Saved successfully!',
        type: 'success',
        position: 'top-right',
        duration: 3000,
      });
    }

    warningToast() {
      this.toast.show({
        message: 'New notification!',
        type: 'warning',
        position: 'top-left',
        duration: 0, // persists until manually dismissed
      });
    }
  }
  `;toast=l(f);infoToast(){this.toast.show({message:"New notification!",type:"info",position:"bottom-right",duration:0})}errorToast(){this.toast.show({message:"Something went wrong!",type:"danger",position:"bottom-left",duration:5e3})}successToast(){this.toast.show({message:"Saved successfully!",type:"success",position:"top-right",duration:3e3})}warningToast(){this.toast.show({message:"New notification!",type:"warning",position:"top-left",duration:0})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=p({type:r,selectors:[["app-toast-preview"]],decls:20,vars:3,consts:[[1,"page-tag"],[1,"service"],["href","/library","label","Library"],["href","/library/toast","label","Toast"],[1,"description"],[3,"htmlCode","tsCode","scssCode"],[1,"btns"],[3,"click"]],template:function(i,n){i&1&&(t(0,"p",0)(1,"span",1),o(2,"Service"),e()(),t(3,"h1"),o(4,"Toast"),e(),t(5,"kage-bread-crumbs"),g(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),e(),t(8,"p",4),o(9,"The Kage-UI Toast Service provides a simple way to display non-intrusive, timed notifications. It supports different types (success, error, info, warning), custom duration, positioning, icons, and styling\u2014ideal for user feedback and real-time alerts in Angular applications."),e(),t(10,"app-code-preview",5)(11,"div",6)(12,"kage-button",7),s("click",function(){return n.infoToast()}),o(13,"Info Toast"),e(),t(14,"kage-button",7),s("click",function(){return n.errorToast()}),o(15,"Error Toast"),e(),t(16,"kage-button",7),s("click",function(){return n.successToast()}),o(17,"Success Toast"),e(),t(18,"kage-button",7),s("click",function(){return n.warningToast()}),o(19,"Warning Toast"),e()()()),i&2&&(c(10),m("htmlCode",n.htmlCode)("tsCode",n.tsCode)("scssCode",n.scssCode))},dependencies:[b,T,u,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:10px;flex-wrap:wrap}"]})};export{w as ToastPreviewComponent};
