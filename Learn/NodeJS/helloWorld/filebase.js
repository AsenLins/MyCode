
/*使用nodeJs的流模块处理文件 */
const fs=require("fs");
const zlib=require("zlib");
const gzip=zlib.createGzip();
const outStream=fs.createWriteStream("output.js.gz");

fs.createReadStream("./testfile.js")
    .pipe(gzip)
    .pipe(outStream);