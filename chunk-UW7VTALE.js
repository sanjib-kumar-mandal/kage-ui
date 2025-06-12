import{a as y}from"./chunk-YX7X4TWZ.js";import{N as u,f as c,h as f}from"./chunk-AQZ4Q2VB.js";import"./chunk-3GFDRZ37.js";import{Ib as i,Kb as a,Sa as o,Tb as g,Ub as d,bb as s,mb as l,ub as e,vb as t,wb as p}from"./chunk-KDFRMSR3.js";var C=class m{title="My Awesome Blog Post!";tsCode=`
  import { Component } from '@angular/core';
  import { KageSlugifyPipe } from 'kage-ui';
  ...

  @Component({
    selector: 'app-example',
    imports: [ KageSlugifyPipe, ... ],
    templateUrl: '...',
    styleUrl: '...',
  })
  export class AppExampleComponent {
    title = 'My Awesome Blog Post!';
  }
  `;htmlCode=`
    <h2>Slugify Example</h2>
    <p>Original: {{ title }}</p>
    <!-- Original: My Awesome Blog Post! -->
    <p>Slug: {{ title | slugify }}</p>
    <!-- Slug: my-awesome-blog-post -->
  `;scssCode="";static \u0275fac=function(n){return new(n||m)};static \u0275cmp=s({type:m,selectors:[["app-slugify-preview"]],decls:24,vars:9,consts:[[1,"page-tag"],[1,"pipe"],["label","Library",3,"href"],["label","Slugify Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,r){n&1&&(e(0,"p",0)(1,"span",1),i(2,"Pipe"),t()(),e(3,"h1"),i(4,"Slugify Pipe"),t(),e(5,"kage-bread-crumbs"),p(6,"kage-bread-crumb",2)(7,"kage-bread-crumb",3),t(),e(8,"p",4),i(9,"Pipe Behavior and Input Breakdown"),t(),e(10,"h3"),i(11,"Implementation"),t(),e(12,"app-code-preview",5)(13,"h2"),i(14,"Slugify Example"),t(),p(15,"br")(16,"br"),e(17,"p"),i(18),t(),p(19,"br")(20,"br"),e(21,"p"),i(22),g(23,"slugify"),t()()),n&2&&(o(6),l("href","/library"),o(),l("href","/library/bytes"),o(5),l("htmlCode",r.htmlCode)("tsCode",r.tsCode)("scssCode",r.scssCode),o(6),a("Original: ",r.title,""),o(4),a("Slug: ",d(23,7,r.title),""))},dependencies:[y,c,f,u],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as SlugifyPreviewComponent};
