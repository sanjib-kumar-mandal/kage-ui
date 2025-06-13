import{a as x}from"./chunk-3Z46KEDQ.js";import{F as E,a as u,b as v,c as h,f,h as y}from"./chunk-KCOPEIAH.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Kb as c,Mb as b,Nb as C,Ob as S,Sa as i,bb as d,mb as m,ub as e,vb as t,wb as g,zb as s}from"./chunk-KDFRMSR3.js";var w=class p{htmlCode=`
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
  `;tabId="2";options=[{label:"Active",value:"1"},{label:"Normal",value:"2"},{label:"Disabled",value:"3",disabled:!0}];segmentChanged(l){console.log("Segment changed",l)}static \u0275fac=function(r){return new(r||p)};static \u0275cmp=d({type:p,selectors:[["app-segment-preview"]],decls:53,vars:8,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Segment",3,"href"],[1,"description"],[3,"htmlCode","scssCode","tsCode"],[3,"onSegmentChange","ngModelChange","options","ngModel"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(r,a){r&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Segment"),t(),e(5,"kage-bread-crumbs"),g(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"kage-segment",6),s("onSegmentChange",function(o){return a.segmentChanged(o)}),S("ngModelChange",function(o){return C(a.tabId,o)||(a.tabId=o),o}),e(14,"p"),n(15),t()()(),e(16,"h3"),n(17,"Input"),t(),e(18,"p",4),n(19,"List of Input Parameters."),t(),e(20,"div",7)(21,"div",8)(22,"p"),n(23,"Name"),t(),e(24,"p"),n(25,"Default Value | Type"),t()(),e(26,"div",9)(27,"div",10)(28,"p"),n(29,"options"),t(),e(30,"p"),n(31,"Type `Array<string> | Array<SegmentOption>`"),t()(),e(32,"div",10)(33,"p"),n(34,"disabled"),t(),e(35,"p"),n(36,"Type `bollean`. Default false"),t()()()(),e(37,"h3"),n(38,"Output"),t(),e(39,"p",4),n(40,"List of Output Parameters."),t(),e(41,"div",7)(42,"div",8)(43,"p"),n(44,"Name"),t(),e(45,"p"),n(46,"Default Value | Type"),t()(),e(47,"div",9)(48,"div",10)(49,"p"),n(50,"onSegmentChange"),t(),e(51,"p"),n(52,"Type `string | number`"),t()()()()),r&2&&(i(6),m("href","/library"),i(),m("href","/library/segment"),i(5),m("htmlCode",a.htmlCode)("scssCode",a.scssCode)("tsCode",a.tsCode),i(),m("options",a.options),b("ngModel",a.tabId),i(2),c("Tab ",a.tabId,""))},dependencies:[x,E,h,u,v,y,f],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{w as SegmentPreviewComponent};
