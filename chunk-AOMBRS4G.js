import{a as x}from"./chunk-YF2ACYI7.js";import{F as E,a as u,b as v,c as h,f,h as y}from"./chunk-ACFFGCAZ.js";import"./chunk-CZ7SOAWQ.js";import{Ab as b,Bb as C,Cb as S,Ga as i,Ra as d,ab as m,ib as e,jb as t,kb as g,nb as s,wb as n,yb as c}from"./chunk-WWKGYV7J.js";var w=class p{htmlCode=`
    <kage-segment [options]="options" (onSegmentChange)="segmentChanged($event)" [(ngModel)]="tabId">
        <p>Tab {{tabId}}</p>
    </kage-segment>
  `;scssCode="";tsCode=`
  import { Component } from '@angular/core';
  import { KageSegment } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSegment, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    tabId = '2';

    options: Array<KageSegmentOption> = [
      { label: 'Active', value: '1' },
      { label: 'Normal', value: '2' },
      { label: 'Disabled', value: '3', disabled: true },
    ];

    segmentChanged(event: any) {
      console.log('Segment changed', event);
    }
  }
  `;tabId="2";options=[{label:"Active",value:"1"},{label:"Normal",value:"2"},{label:"Disabled",value:"3",disabled:!0}];segmentChanged(l){console.log("Segment changed",l)}static \u0275fac=function(r){return new(r||p)};static \u0275cmp=d({type:p,selectors:[["app-segment-preview"]],decls:51,vars:8,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Segment",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"onSegmentChange","ngModelChange","options","ngModel"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,a){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Segment"),t(),e(5,"kage-bread-crumbs"),g(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"kage-segment",6),s("onSegmentChange",function(o){return a.segmentChanged(o)}),S("ngModelChange",function(o){return C(a.tabId,o)||(a.tabId=o),o}),e(12,"p"),n(13),t()()(),e(14,"h3"),n(15,"Input"),t(),e(16,"p",4),n(17,"List of Input Parameters."),t(),e(18,"div",7)(19,"div",8)(20,"p"),n(21,"Name"),t(),e(22,"p"),n(23,"Default Value | Type"),t()(),e(24,"div",9)(25,"div",10)(26,"p"),n(27,"options"),t(),e(28,"p"),n(29,"Type `Array<string> | Array<SegmentOption>`"),t()(),e(30,"div",10)(31,"p"),n(32,"disabled"),t(),e(33,"p"),n(34,"Type `bollean`. Default false"),t()()()(),e(35,"h3"),n(36,"Output"),t(),e(37,"p",4),n(38,"List of Output Parameters."),t(),e(39,"div",7)(40,"div",8)(41,"p"),n(42,"Name"),t(),e(43,"p"),n(44,"Default Value | Type"),t()(),e(45,"div",9)(46,"div",10)(47,"p"),n(48,"onSegmentChange"),t(),e(49,"p"),n(50,"Type `string | number`"),t()()()()),r&2&&(i(6),m("href","/library"),i(),m("href","/library/segment"),i(3),m("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),i(),m("options",a.options),b("ngModel",a.tabId),i(2),c("Tab ",a.tabId,""))},dependencies:[x,E,h,u,v,y,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{w as SegmentPreviewComponent};
