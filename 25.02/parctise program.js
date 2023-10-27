let fs = requre("fs");
let data = fs.readlineSync("emp.json")
let jsonString =data.tostring()
let jsObject =JSON.parse(jsonString);
console.log(`id ${jsObject.id}`)
console.log(`salary ${jsObject.salary}`)
console.log(`name ${jsObject.name}`)
