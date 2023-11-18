const fs = require("fs");
const  stream = require("stream");
const zlib = require("zlib");

let writestream = fs.createWriteStream("./fle.txt")

writestream.write("Ram\n")
writestream.write("Shyam\n")
writestream.write("Seeta\n")
writestream.write("Geeta\n")

console.log(writestream);
