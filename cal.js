let outputsrc = document.getElementById("outputscreen");

function display(num){
    outputsrc.value = outputsrc.value + num;
} 

function Calculate(){
    try{
        outputsrc.value = eval(outputsrc.value)
    }
    catch{
        alert("Invalid")
    }
}

function Clear(){
    outputsrc.value = " ";
}

function del(){
    outputsrc.value = outputsrc.value.slice(0,-1);
}