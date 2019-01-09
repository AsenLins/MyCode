
/*使用addClass的方式,没有则加元素，而非使用每个元素都加载*/

/*inline regx */
const blod=/(?!\**\`)\*{2}[^\*]+?\*{2}(?!.*\**\`)|(?!\_*\`)\_{2}[^\_]+?\_{2}(?!.*\_*\`)/g;
const italic=/(?!\**\`)\*{1}[^\*]+?\*{1}(?!.*\**\`)|(?!\_*\`)\_{1}[^\_]+?\_{1}(?!.*\_*\`)/g;
const backquote=/\`{1}[^\`]+?\`{1}/;
const link=/\[.*\]\(http(s)?:\/\/[^ \(\)]+\)|((?!.*\>)http(s)?:\/\/[^ \(\)]+(?!.*\"))/ig;
const img=/\!\[.*\]\(http(s)?:\/\/[^\s]+\)/;

/*block regx */
const h=/\n\#{1,6}/ig;
const refer=/\n[\>| ]+/ig;
const todoUnFinish=/\n\- \[\ \] [^\n]+/ig;
const todoFinish=/\n\- \[\x\] [^\n]+/ig
const disorderlist=/\n\- (?!.)/ig;
const orderlist=/\n\d+\. (?!.)/ig;
const code=/\n`{3}(?!.)(?:\n.*)*`{3}/ig;
const lineTip=/\n.+?\n[\*|\* ]+(?!.)|\n.+?\n[\-|\- ]+(?!.)/ig;
const line=/\n[\* ]*(?!.)|\n[\- ]*(?!.)/ig


const li=/\n-/ig


const list=/```([^`]+)```/ig

const li=/\<li\>.*\n*\<\/li\>/ig





renderMarkDown(
    `- a\n- b\n- c\n- d`)

function header(){
    return "<ui>";
}

function footer(){
    return "</ui>"
}


function renderMarkDown(input){
    input=input.replace("\r\n","\n");
    var blocks=input.split('\n');
    console.log(blocks);


    var listIndex=0;
    console.log(input.match(/d/ig));
    blocks.forEach(block => {
        
        //console.log(block);
    });
}



























