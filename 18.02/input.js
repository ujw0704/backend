 let input = require("readline-sync");
  let name = input.question("Enter Name");
  console.log(`hi ${name}`);
   let age = input.questionInt("Enter age");
   console.log(` Hi${name}  your age is ${age}`);
    let password = input.questionNewPassword("Enter password");
    console.log( `${password}`);
    let Email = input.questionEMail("enter Email");
    console.log(`${Email}`)