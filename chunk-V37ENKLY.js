import{a as u}from"./chunk-I7LMNX23.js";import{Q as y,g as d,o as f}from"./chunk-YQTPIHLU.js";import"./chunk-QSYZJPWV.js";import{Da as i,Jb as r,Lb as p,Oa as m,Vb as g,Wb as c,jb as n,kb as e,lb as t,mb as a}from"./chunk-GXREA3OA.js";var C=class s{title="My Awesome Blog Post!";tsCode=`
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
  `;scssCode="";static \u0275fac=function(l){return new(l||s)};static \u0275cmp=m({type:s,selectors:[["app-slugify-preview"]],decls:22,vars:10,consts:[[1,"page-tag"],[1,"pipe"],[3,"iconDepth"],["label","Library",3,"href"],["label","Slugify Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(l,o){l&1&&(e(0,"p",0)(1,"span",1),r(2,"Pipe"),t()(),e(3,"h1"),r(4,"Slugify Pipe"),t(),e(5,"kage-bread-crumbs",2),a(6,"kage-bread-crumb",3)(7,"kage-bread-crumb",4),t(),e(8,"p",5),r(9,"The Kage-UI Slugify Pipe transforms a string into a URL-friendly slug by converting it to lowercase, removing special characters, and replacing spaces with hyphens. It's ideal for generating SEO-friendly URLs, IDs, or anchors in Angular applications."),t(),e(10,"app-code-preview",6)(11,"h2"),r(12,"Slugify Example"),t(),a(13,"br")(14,"br"),e(15,"p"),r(16),t(),a(17,"br")(18,"br"),e(19,"p"),r(20),g(21,"slugify"),t()()),l&2&&(i(5),n("iconDepth",3),i(),n("href","/library"),i(),n("href","/library/bytes"),i(3),n("htmlCode",o.htmlCode)("tsCode",o.tsCode)("scssCode",o.scssCode),i(6),p("Original: ",o.title),i(4),p("Slug: ",c(21,8,o.title)))},dependencies:[u,d,f,y],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin:10px 0}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as SlugifyPreviewComponent};
