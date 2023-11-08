class MySet{

    allItems = []

    push(item){
        if(!this.allItems.includes(item)){
            this.allItems.push(item)
        }
    }

    getAllItems(){
        return this.allItems;
    }
}


let set = new MySet();
set.push(5) 
set.push(6) 
set.push(7) 
set.push(8) 
set.push(7) 
set.push(17) 
set.push(27) 
set.push(7) 

console.log(set.getAllItems())


let m = new Map();




let temp = [56,7,32,34,76,34,42,34,33,54]
console.log('Array is ')
console.log(temp)


let s = new Set(temp)
console.log('Set is ')
console.log(s)



