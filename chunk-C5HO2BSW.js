import{a as l}from"./chunk-XIOVG2OW.js";import{f as d,h as c}from"./chunk-5Q4OKSLA.js";import"./chunk-7WU6A5OC.js";import{Gb as r,Ra as i,ab as m,kb as n,sb as e,tb as t,ub as s}from"./chunk-6ZSAKAH2.js";var C=class p{tsCode="";htmlCode=`
    <!-- Repeat a character -->
    <p>{{ '*' | repeat:5 }}</p> 
    <!-- Output: ***** -->

    <!-- Repeat a string -->
    <p>{{ 'Hi ' | repeat:3 }}</p> 
    <!-- Output: Hi Hi Hi  -->

    <!-- Repeat dynamic content -->
    <p>{{ user.emoji | repeat:user.count }}</p>
  `;scssCode="No SCSS";static \u0275fac=function(o){return new(o||p)};static \u0275cmp=m({type:p,selectors:[["app-repeat-preview"]],decls:11,vars:5,consts:[["label","Library",3,"href"],["label","Repeat Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(o,a){o&1&&(e(0,"h1"),r(1,"Repeat Pipe"),t(),e(2,"kage-bread-crumbs"),s(3,"kage-bread-crumb",0)(4,"kage-bread-crumb",1),t(),e(5,"p",2),r(6,"Pipe Behavior and Input Breakdown"),t(),e(7,"h3"),r(8,"Implementation"),t(),e(9,"k-code-preview",3),r(10,` No preview
`),t()),o&2&&(i(3),n("href","/library"),i(),n("href","/library/ordinate"),i(5),n("htmlCode",a.htmlCode)("tsCode",a.tsCode)("scssCode",a.scssCode))},dependencies:[l,d,c],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as RepeatPreviewComponent};
