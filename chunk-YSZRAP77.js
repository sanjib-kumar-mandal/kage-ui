import{a as f}from"./chunk-IEV3VUBJ.js";import{S as C,g as u,i as g,p as b}from"./chunk-YZ425KXR.js";import"./chunk-5X2QXVHB.js";import{Ga as s,Ra as m,_ as i,ab as p,f as l,ib as e,jb as t,kb as c,pb as d,yb as r}from"./chunk-6VEGNWUI.js";var w=class n{alert=i(C);prompt(){return l(this,null,function*(){yield this.alert.show({title:"Login Required",message:"Please enter your credentials.",dismissible:!0,inputs:[{name:"username",label:"Username",placeholder:"Enter username"},{name:"password",label:"Password",type:"password",placeholder:"Enter password"}],buttons:[{label:"Cancel",role:"cancel",color:"danger"},{label:"Login",role:"confirm",color:"success",primary:!0}]})})}htmlCode='<kage-button (click)="prompt()">Click me</kage-button>';scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageButton, KageAlertCtrl } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageButton, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    private alert = inject(KageAlertCtrl);

    async prompt() {
      await this.alert.show({
        title: 'Login Required',
        message: 'Please enter your credentials.',
        dismissible: true,
        inputs: [
          { name: 'username', label: 'Username', placeholder: 'Enter username' },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter password',
          },
        ],
        buttons: [
          { label: 'Cancel', role: 'cancel', color: 'danger' },
          { label: 'Login', role: 'confirm', color: 'success', primary: true },
        ],
      });
    }
  }
  `;static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["app-alert-preview"]],decls:13,vars:3,consts:[[1,"page-tag"],[1,"service"],["href","/library","label","Library"],["href","/library/alert","label","Alert"],[1,"description"],[3,"tsCode","htmlCode","scssCode"],[3,"click"]],template:function(o,a){o&1&&(e(0,"p",0)(1,"span",1),r(2,"Service"),t()(),e(3,"h1"),r(4,"Alert"),t(),e(5,"kage-bread-crumbs"),c(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),r(9,"The Alert Service allows you to trigger configurable alert dialogs such as confirmations, prompts, and custom modals. It supports dynamic content, button actions, input fields, and full lifecycle control, making it ideal for both simple alerts and complex interactions in Angular apps."),t(),e(10,"app-code-preview",5)(11,"kage-button",6),d("click",function(){return a.prompt()}),r(12,"Click me"),t()()),o&2&&(s(10),p("tsCode",a.tsCode)("htmlCode",a.htmlCode)("scssCode",a.scssCode))},dependencies:[f,u,g,b],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{w as AlertPreviewComponent};
