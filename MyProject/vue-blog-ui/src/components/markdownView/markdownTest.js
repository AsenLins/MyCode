
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


const test=/^( {4}[^\n]+\n*)+/ig

const list=/```([^`]+)```/ig

//const li=/\<li\>.*\n*\<\/li\>/ig



function Markdown(){

}

Markdown.prototype.split_blocks = function splitBlocks( input ) {
    // Normalize linebreaks to \n.
    input = input.replace(/\r\n?/g, "\n");
    // Match until the end of the string, a newline followed by #, or two or more newlines.
    // [\s\S] matches _anything_ (newline or space)
    // [^] is equivalent but doesn't work in IEs.
    var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
        blocks = [],
        m;

    var line_no = 1;

    if ( ( m = /^(\s*\n)/.exec(input) ) !== null ) {
      // skip (but count) leading blank lines
      //line_no += count_lines( m[0] );
      re.lastIndex = m[0].length;
    }

    while ( ( m = re.exec(input) ) !== null ) {
      if (m[2] === "\n#") {
        m[2] = "\n";
        re.lastIndex--;
      }
      blocks.push(m );
      //line_no += count_lines( m[0] );
    }

    return blocks;
  };


  const md=new Markdown();
  const block=md.split_blocks(`
  
  编写解析器的主要困难在于未能正确组织代码。解析器应该在比从字符串读取字符更高的级别上操作。关于如何使复杂性易于管理的一些建议：

- 编写许多函数，并保持它们的小。在每一种功能中，做一件事并把它做好。

- 不要尝试使用regexp进行解析。它们不起作用，我建议把它们限制在非常简单的事情上。

- 不要试图猜测。当不确定如何解析某些内容时，抛出一个错误并确保消息包含错误位置(行/列)。

- 为了保持简单，我将我的代码分成了三个部分，这些部分被进一步分成许多小函数：
  
  
  `)


  console.log(block);






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



























