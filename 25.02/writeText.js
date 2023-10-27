let fs = require("fs");
let content = "Hello everyon with new content";
fs.writeFileSync("demo.txt" ,content+"\n" ,{flag: "a+"});
console.log( "writing is done");