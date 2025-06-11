import{a as l}from"./chunk-ZAVUOA2O.js";import{f as m,h as d}from"./chunk-7SWJIUWC.js";import"./chunk-7WU6A5OC.js";import{Gb as r,Ra as o,ab as s,kb as i,sb as e,tb as t,ub as c}from"./chunk-6ZSAKAH2.js";var u=class p{tsCode="";htmlCode=`
    <!-- Truncate to 10 characters -->
    <p>{{ 'This is a long sentence that needs truncation.' | truncate:10 }}</p>
    <!-- Output: "This is a ..." -->

    <!-- Custom suffix -->
    <p>{{ 'Stick UI is awesome' | truncate:8:' >>' }}</p>
    <!-- Output: "Stick UI >>" -->

    <!-- No truncation needed -->
    <p>{{ 'Short' | truncate:10 }}</p>
    <!-- Output: "Short" -->
  `;scssCode="No SCSS";static \u0275fac=function(n){return new(n||p)};static \u0275cmp=s({type:p,selectors:[["app-truncate-preview"]],decls:11,vars:5,consts:[["label","Librery",3,"href"],["label","Truncate Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(n,a){n&1&&(e(0,"h1"),r(1,"Truncate Pipe"),t(),e(2,"kage-bread-crumbs"),c(3,"kage-bread-crumb",0)(4,"kage-bread-crumb",1),t(),e(5,"p",2),r(6,"Pipe Behavior and Input Breakdown"),t(),e(7,"h3"),r(8,"Implementation"),t(),e(9,"k-code-preview",3),r(10,` No preview
`),t()),n&2&&(o(3),i("href","/librery"),o(),i("href","/librery/ordinate"),o(5),i("htmlCode",a.htmlCode)("tsCode",a.tsCode)("scssCode",a.scssCode))},dependencies:[l,m,d],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{u as TruncatePreviewComponent};
