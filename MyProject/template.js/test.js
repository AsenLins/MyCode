var block="#for{<div></div>}#for{ asdasdad if(a>b>c){<div> {asasdasd if(){dc for(){qc>2} 123}dasdas} for(dv=0;dv>kc.lenght;dv++){n}</div>}}}}}#if(){2323} ";
var regBlock=/\#(for|if|else if|else).*?\{(.*?)[^\#]+\}/ig;
var regInnerBlock=/\#(for|if|else if|else).*?\{(.*?)[^\#]+\}/ig;



console.log("blocks",block.match(regBlock));
console.log("blocks2",block.match(regBlock)[1]);

/*先分离，然后再加#，然后一层一层解析：每一层解析包括：操作符 html，嵌套的if,for，数据参数等。*/

var innerHtml="#for(item){ #for(item2){ #for(item3){ #for(item4) } }  }#if(dc){123}";
console.log("item",innerHtml.match(regInnerBlock));


