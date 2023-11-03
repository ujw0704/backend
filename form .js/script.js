
let name = document.getElementById("username");
let password = document.getElementById("password")
let flag =1;

    

    
function validation(){
    
    if(username.value == ""){
        document.getElementById("userError").innerHTML= "name is Empty";
        let flag = 0;
    }
    else if(username.value.length<3){
        document.getElementById("userError"). innerHTML= "Alteast three letter required ";
        flag = 0;
    }else{

        document.getElementById("userError"). innerHTML= " ";
        flag =1;
    }



    if(password.value ==""){
        document.getElementById("passwordError").innerHTML="please enter password";
        let flag = 0;

    }
    else if (password.value.length<8){
        document.getElementById("passwordError").innerHTML="please enter 8 char";
        flag =0;


    } else{
        document.getElementById("passwordError").innerHTML="";
        flag =1;
    }

    if(flag){

        return true;

    }else{
        return false;
    }
}

       

