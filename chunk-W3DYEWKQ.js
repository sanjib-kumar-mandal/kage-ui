import{a as c}from"./chunk-XIOVG2OW.js";import{f as d,h as l}from"./chunk-5Q4OKSLA.js";import"./chunk-7WU6A5OC.js";import{Gb as o,Ra as a,ab as m,kb as i,sb as e,tb as t,ub as p}from"./chunk-6ZSAKAH2.js";var C=class s{tsCode="";htmlCode=`
    <!-- Mask all but last 4 digits of card -->
    <p>{{ '1234567812345678' | mask:'*':0:4 }}</p>
    <!-- Output: ************5678 -->

    <!-- Mask email address (keep 2 start + domain) -->
    <p>{{ 'john.doe@example.com' | mask:'*':2:12 }}</p>
    <!-- Output: jo*********@example.com -->

    <!-- Mask everything -->
    <p>{{ 'SecretValue' | mask }}</p>
    <!-- Output: *********** -->
  `;scssCode="No SCSS";static \u0275fac=function(r){return new(r||s)};static \u0275cmp=m({type:s,selectors:[["app-mask-preview"]],decls:11,vars:5,consts:[["label","Library",3,"href"],["label","Mask Pipe",3,"href"],[1,"description"],[3,"htmlCode","tsCode","scssCode"]],template:function(r,n){r&1&&(e(0,"h1"),o(1,"Mask Pipe"),t(),e(2,"kage-bread-crumbs"),p(3,"kage-bread-crumb",0)(4,"kage-bread-crumb",1),t(),e(5,"p",2),o(6,"Pipe Behavior and Input Breakdown"),t(),e(7,"h3"),o(8,"Implementation"),t(),e(9,"k-code-preview",3),o(10,` No preview
`),t()),r&2&&(a(3),i("href","/library"),a(),i("href","/library/bytes"),a(5),i("htmlCode",n.htmlCode)("tsCode",n.tsCode)("scssCode",n.scssCode))},dependencies:[c,d,l],styles:["h1[_ngcontent-%COMP%]{margin-bottom:10px}.description[_ngcontent-%COMP%]{color:var(--color-medium);margin-top:10px}h3[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--color-dark) 80%,var(--color-light) 20%);margin:10px 0}"]})};export{C as MaskPreviewComponent};
