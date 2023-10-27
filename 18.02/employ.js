let input =require("readline-sync");
let size = input.questionInt("Enter your Number");
let items =[]
for(let i=0; i<size; i++){
    const item =input.questionInt(`array size:${size}, item at pos ${i} is:`);
    items.push(item);

}Ff
let key = input.questionInt("Enter  the item you have search");
let isFound =False;
for(ele of items){
    if(ele == key){
        isFound =true;
        break;

    }
}
console.log("Element Found:"+isFound);