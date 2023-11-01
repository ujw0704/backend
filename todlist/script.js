 let newTaskInput= document.getElementById("new-task");
 let addTask = document.getElementById("add-btn");
 let taskList =document.getElementById("task");

 addTask.addEventListener("click", function(e){
    e.preventDefault()

    addfunction()


    function addfunction(){
        let newTask= newTaskInput.value

        if(newTask!==""){
            let newTask1 =document.createElement("li");
        newTask1.textContent =newTask
        taskList.appendChild(newTask1);
        
        const removeBtn= document.createElement("button");
        removeBtn.textcontext ="Remove";
        newTask1.appendChild(removeBtn);


        
        removeBtn.addEventListener("click",function(){
            taskList.removeChild(newTask1)
            newTaskInput.value ="";
            
        });
    }

    

    
    
    
    
    
}
});