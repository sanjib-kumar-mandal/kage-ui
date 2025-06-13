import{a as p,b as d}from"./chunk-SYOTSNR3.js";import{a as k}from"./chunk-6UVKUOTH.js";import{f,h as b,u as s,v as g}from"./chunk-ZD2OAGNC.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as o,bb as c,mb as a,ub as e,vb as t,wb as i}from"./chunk-KDFRMSR3.js";var u=class r{htmlCode=`
  <div class="fab-container">
      <kage-fab-button color="success" position="top-right">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item color="danger"><mat-icon fontIcon="home"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="refresh"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button color="danger" position="top-left">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item [disabled]="true"><mat-icon fontIcon="sync"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="terminal"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button color="warning" position="bottom-left">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item><mat-icon fontIcon="file_open"></mat-icon></kage-fab-item>
          <kage-fab-item><mat-icon fontIcon="downloading"></mat-icon></kage-fab-item>
      </kage-fab-button>
      <kage-fab-button position="bottom-right">
          <mat-icon slot='icon' fontIcon="add"></mat-icon>
          <kage-fab-item><mat-icon fontIcon="token"></mat-icon></kage-fab-item>
          <kage-fab-item [disabled]="true"><mat-icon fontIcon="assistant_navigation"></mat-icon></kage-fab-item>
      </kage-fab-button>
  </div>
  `;tsCode=`
    import { Component } from '@angular/core';
    import { KageCheckbox } from 'kage-ui';
    ...

    @Component({
      selector: 'app-example',
      imports: [ KageFab, KageFabItem, ... ],
      templateUrl: '...',
      styleUrl: '...',
    })
    export class AppExampleComponent {}
  `;static \u0275fac=function(m){return new(m||r)};static \u0275cmp=c({type:r,selectors:[["app-fab-preview"]],decls:78,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Fab",3,"href"],[1,"description"],[3,"htmlCode","tsCode"],[1,"fab-container"],["color","success","position","top-right"],["slot","icon","fontIcon","add"],["color","danger"],["fontIcon","home"],["fontIcon","refresh"],["color","danger","position","top-left"],[3,"disabled"],["fontIcon","sync"],["fontIcon","terminal"],["color","warning","position","bottom-left"],["fontIcon","file_open"],["fontIcon","downloading"],["position","bottom-right"],["fontIcon","token"],["fontIcon","assistant_navigation"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(m,l){m&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Fab"),t(),e(5,"kage-bread-crumbs"),i(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"app-code-preview",5)(11,"div",6)(12,"kage-fab-button",7),i(13,"mat-icon",8),e(14,"kage-fab-item",9),i(15,"mat-icon",10),t(),e(16,"kage-fab-item"),i(17,"mat-icon",11),t()(),e(18,"kage-fab-button",12),i(19,"mat-icon",8),e(20,"kage-fab-item",13),i(21,"mat-icon",14),t(),e(22,"kage-fab-item"),i(23,"mat-icon",15),t()(),e(24,"kage-fab-button",16),i(25,"mat-icon",8),e(26,"kage-fab-item"),i(27,"mat-icon",17),t(),e(28,"kage-fab-item"),i(29,"mat-icon",18),t()(),e(30,"kage-fab-button",19),i(31,"mat-icon",8),e(32,"kage-fab-item"),i(33,"mat-icon",20),t(),e(34,"kage-fab-item",13),i(35,"mat-icon",21),t()()()(),e(36,"h3"),n(37,"Inputs"),t(),e(38,"p",4),n(39,"List of Input Parameters."),t(),e(40,"div",22)(41,"div",23)(42,"p"),n(43,"Name"),t(),e(44,"p"),n(45,"Default Value | Type"),t()(),e(46,"div",24)(47,"div",25)(48,"p"),n(49,"color"),t(),e(50,"p"),n(51,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(52,"div",25)(53,"p"),n(54,"position"),t(),e(55,"p"),n(56,"'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'"),t()()()(),e(57,"h3"),n(58,"Outputs"),t(),e(59,"p",4),n(60,"List of Output Parameters."),t(),e(61,"div",22)(62,"div",23)(63,"p"),n(64,"Name"),t(),e(65,"p"),n(66,"Default Value | Type"),t()(),e(67,"div",24)(68,"div",25)(69,"p"),n(70,"onClick"),t(),e(71,"p"),n(72,"Type `Event`"),t()(),e(73,"div",25)(74,"p"),n(75,"onChange"),t(),e(76,"p"),n(77,"Type `string`"),t()()()()),m&2&&(o(6),a("href","/library"),o(),a("href","/library/fab"),o(3),a("htmlCode",l.htmlCode)("tsCode",l.tsCode),o(10),a("disabled",!0),o(14),a("disabled",!0))},dependencies:[k,d,p,f,b,g,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]{display:block;position:relative}app-code-preview[_ngcontent-%COMP%]   .fab-container[_ngcontent-%COMP%]{min-height:400px;position:relative}"]})};export{u as FabPreviewComponent};
