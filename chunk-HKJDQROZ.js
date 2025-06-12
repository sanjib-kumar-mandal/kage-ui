import{a as c}from"./chunk-XIOVG2OW.js";import{f as p,h as d}from"./chunk-5Q4OKSLA.js";import"./chunk-7WU6A5OC.js";import{Gb as i,Ra as r,ab as s,kb as n,sb as e,tb as t,ub as m}from"./chunk-6ZSAKAH2.js";var g=class a{tsCode=`
    title = 'My Awesome Blog Post!';
  `;htmlCode=`
    <h2>Slugify Example</h2>
    <p>Original: {{ title }}</p>
    <!-- Original: My Awesome Blog Post! -->
    <p>Slug: {{ title | slugify }}</p>
    <!-- Slug: my-awesome-blog-post -->
  `;scssCode="No SCSS";static \u0275fac=function(o){return new(o||a)};static \u0275cmp=s({type:a,selectors:[["app-slugify-preview"]],decls:11,vars:5,consts:[["label","Library",3,"href"],["label","Slugify Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,l){o&1&&(e(0,"h1"),i(1,"Slugify Pipe"),t(),e(2,"kage-bread-crumbs"),m(3,"kage-bread-crumb",0)(4,"kage-bread-crumb",1),t(),e(5,"p",2),i(6,"Pipe Behavior and Input Breakdown"),t(),e(7,"h3"),i(8,"Implementation"),t(),e(9,"k-code-preview",3),i(10,` No preview
`),t()),o&2&&(r(3),n("href","/library"),r(),n("href","/library/bytes"),r(5),n("htmlCode",l.htmlCode)("tsCode",l.tsCode)("scssCode",l.scssCode))},dependencies:[c,p,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{g as SlugifyPreviewComponent};
