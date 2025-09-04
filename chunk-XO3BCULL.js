import{a as x}from"./chunk-SBKFTLTF.js";import{H as E,a as S,b as v,c as h,g as y,o as f}from"./chunk-LMKEWPLL.js";import"./chunk-QSYZJPWV.js";import{Da as i,Jb as n,Lb as c,Nb as u,Oa as s,Ob as b,Pb as C,jb as o,kb as e,lb as t,mb as d,wb as g}from"./chunk-GXREA3OA.js";var w=class p{htmlCode=`
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
  `;tabId="2";options=[{label:"Active",value:"1"},{label:"Normal",value:"2"},{label:"Disabled",value:"3",disabled:!0}];segmentChanged(m){console.log("Segment changed",m)}static \u0275fac=function(l){return new(l||p)};static \u0275cmp=s({type:p,selectors:[["app-segment-preview"]],decls:51,vars:9,consts:[[1,"page-tag"],[1,"component"],[3,"iconDepth"],["label","Library",3,"href"],["label","Segment",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"onSegmentChange","ngModelChange","options","ngModel"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(l,a){l&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Segment"),t(),e(5,"kage-bread-crumbs",2),d(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),n(9,"Segment is a customer data platform (CDP) that helps you collect, unify, and route user data across your apps and tools. It enables businesses to streamline analytics, marketing, and data infrastructure by providing a single API for all event tracking and customer interactions."),t(),e(10,"app-code-preview",6)(11,"kage-segment",7),g("onSegmentChange",function(r){return a.segmentChanged(r)}),C("ngModelChange",function(r){return b(a.tabId,r)||(a.tabId=r),r}),e(12,"p"),n(13),t()()(),e(14,"h3"),n(15,"Input"),t(),e(16,"p",5),n(17,"List of Input Parameters."),t(),e(18,"div",8)(19,"div",9)(20,"p"),n(21,"Name"),t(),e(22,"p"),n(23,"Default Value | Type"),t()(),e(24,"div",10)(25,"div",11)(26,"p"),n(27,"options"),t(),e(28,"p"),n(29,"Type `Array<string> | Array<SegmentOption>`"),t()(),e(30,"div",11)(31,"p"),n(32,"disabled"),t(),e(33,"p"),n(34,"Type `bollean`. Default false"),t()()()(),e(35,"h3"),n(36,"Output"),t(),e(37,"p",5),n(38,"List of Output Parameters."),t(),e(39,"div",8)(40,"div",9)(41,"p"),n(42,"Name"),t(),e(43,"p"),n(44,"Default Value | Type"),t()(),e(45,"div",10)(46,"div",11)(47,"p"),n(48,"onSegmentChange"),t(),e(49,"p"),n(50,"Type `string | number`"),t()()()()),l&2&&(i(5),o("iconDepth",3),i(),o("href","/library"),i(),o("href","/library/segment"),i(3),o("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),i(),o("options",a.options),u("ngModel",a.tabId),i(2),c("Tab ",a.tabId))},dependencies:[x,E,h,S,v,f,y],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{w as SegmentPreviewComponent};
