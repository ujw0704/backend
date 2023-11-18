const EventEmmitter = require("node:events")

const emmitter = new EventEmmitter()

emmitter.on("order-pizza",(size,topping) =>{
 console.log(`order recived Baking a ${size} pizza with ${topping}`);
});


emmitter.emit("order-pizza", "large","mashroom");