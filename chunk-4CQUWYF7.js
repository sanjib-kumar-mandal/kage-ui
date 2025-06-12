import{a as c,b as d}from"./chunk-SYOTSNR3.js";import{a as u}from"./chunk-XRDJCPEB.js";import{f as b,h as f,t as s,u as g}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as n,Sa as i,bb as p,mb as a,ub as e,vb as t,wb as o}from"./chunk-KDFRMSR3.js";var k=class r{htmlCode=`<k-fab-button color="success" position="top-right">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item color="danger"><mat-icon fontIcon="home"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="refresh"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button color="danger" position="top-left">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item [disabled]="true"><mat-icon fontIcon="sync"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="terminal"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button color="warning" position="bottom-left">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item><mat-icon fontIcon="file_open"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item><mat-icon fontIcon="downloading"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>
        <k-fab-button position="bottom-right">
            <mat-icon slot='icon' fontIcon="add"></mat-icon>
            <k-fab-button-expand-item><mat-icon fontIcon="token"></mat-icon></k-fab-button-expand-item>
            <k-fab-button-expand-item [disabled]="true"><mat-icon fontIcon="assistant_navigation"></mat-icon></k-fab-button-expand-item>
        </k-fab-button>`;tsCode=`
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
  `;static \u0275fac=function(m){return new(m||r)};static \u0275cmp=p({type:r,selectors:[["app-fab-preview"]],decls:80,vars:6,consts:[[1,"page-tag"],[1,"component"],["label","Library",3,"href"],["label","Fab",3,"href"],[1,"description"],[3,"htmlCode","tsCode"],[1,"fab-container"],["color","success","position","top-right"],["slot","icon","fontIcon","add"],["color","danger"],["fontIcon","home"],["fontIcon","refresh"],["color","danger","position","top-left"],[3,"disabled"],["fontIcon","sync"],["fontIcon","terminal"],["color","warning","position","bottom-left"],["fontIcon","file_open"],["fontIcon","downloading"],["position","bottom-right"],["fontIcon","token"],["fontIcon","assistant_navigation"],[1,"two-col-table"],[1,"two-col-table-head"],[1,"two-col-table-body"],[1,"each"]],template:function(m,l){m&1&&(e(0,"p",0)(1,"span",1),n(2,"Component"),t()(),e(3,"h1"),n(4,"Fab"),t(),e(5,"kage-bread-crumbs"),o(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),n(9,"Component Behavior and Input Breakdown"),t(),e(10,"h3"),n(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"div",6)(14,"kage-fab-button",7),o(15,"mat-icon",8),e(16,"kage-fab-item",9),o(17,"mat-icon",10),t(),e(18,"kage-fab-item"),o(19,"mat-icon",11),t()(),e(20,"kage-fab-button",12),o(21,"mat-icon",8),e(22,"kage-fab-item",13),o(23,"mat-icon",14),t(),e(24,"kage-fab-item"),o(25,"mat-icon",15),t()(),e(26,"kage-fab-button",16),o(27,"mat-icon",8),e(28,"kage-fab-item"),o(29,"mat-icon",17),t(),e(30,"kage-fab-item"),o(31,"mat-icon",18),t()(),e(32,"kage-fab-button",19),o(33,"mat-icon",8),e(34,"kage-fab-item"),o(35,"mat-icon",20),t(),e(36,"kage-fab-item",13),o(37,"mat-icon",21),t()()()(),e(38,"h3"),n(39,"Inputs"),t(),e(40,"p",4),n(41,"List of Input Parameters."),t(),e(42,"div",22)(43,"div",23)(44,"p"),n(45,"Name"),t(),e(46,"p"),n(47,"Default Value | Type"),t()(),e(48,"div",24)(49,"div",25)(50,"p"),n(51,"color"),t(),e(52,"p"),n(53,"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info'"),t()(),e(54,"div",25)(55,"p"),n(56,"position"),t(),e(57,"p"),n(58,"'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'"),t()()()(),e(59,"h3"),n(60,"Outputs"),t(),e(61,"p",4),n(62,"List of Output Parameters."),t(),e(63,"div",22)(64,"div",23)(65,"p"),n(66,"Name"),t(),e(67,"p"),n(68,"Default Value | Type"),t()(),e(69,"div",24)(70,"div",25)(71,"p"),n(72,"onClick"),t(),e(73,"p"),n(74,"Type `Event`"),t()(),e(75,"div",25)(76,"p"),n(77,"onChange"),t(),e(78,"p"),n(79,"Type `string`"),t()()()()),m&2&&(i(6),a("href","/library"),i(),a("href","/library/fab"),i(5),a("htmlCode",l.htmlCode)("tsCode",l.tsCode),i(10),a("disabled",!0),i(14),a("disabled",!0))},dependencies:[u,d,c,b,f,g,s],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}app-code-preview[_ngcontent-%COMP%]{display:block}app-code-preview[_ngcontent-%COMP%]   .fab-container[_ngcontent-%COMP%]{min-height:400px;position:relative}"]})};export{k as FabPreviewComponent};
