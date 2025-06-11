import{a as c}from"./chunk-ZAVUOA2O.js";import{f as d,h as l}from"./chunk-7SWJIUWC.js";import"./chunk-7WU6A5OC.js";import{Gb as o,Ra as r,ab as p,kb as n,sb as e,tb as t,ub as s}from"./chunk-6ZSAKAH2.js";var g=class a{tsCode=`
    publishedDate = new Date(Date.now() - 3600 * 1000 * 3);
  `;htmlCode=`
    <h2>Time Ago Example</h2>
    <p>Published: {{ publishedDate | timeAgo }}</p>
    <!-- 3 hours ago -->
  `;scssCode="No SCSS";static \u0275fac=function(i){return new(i||a)};static \u0275cmp=p({type:a,selectors:[["app-time-ago-preview"]],decls:11,vars:5,consts:[["label","Librery",3,"href"],["label","TimeAgo Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(i,m){i&1&&(e(0,"h1"),o(1,"Time Ago Pipe"),t(),e(2,"kage-bread-crumbs"),s(3,"kage-bread-crumb",0)(4,"kage-bread-crumb",1),t(),e(5,"p",2),o(6,"Pipe Behavior and Input Breakdown"),t(),e(7,"h3"),o(8,"Implementation"),t(),e(9,"k-code-preview",3),o(10,` No preview
`),t()),i&2&&(r(3),n("href","/librery"),r(),n("href","/librery/bytes"),r(5),n("htmlCode",m.htmlCode)("tsCode",m.tsCode)("scssCode",m.scssCode))},dependencies:[c,d,l],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{g as TimeAgoPreviewComponent};
