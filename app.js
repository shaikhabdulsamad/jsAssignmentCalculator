function val(num){
    document.getElementById('display').value += num
}

function calc(){
    if(document.getElementById('display').value === ""){
        document.getElementById('display').value = ""
    }else{
 document.getElementById('display').value = eval(document.getElementById('display').value)
}
}

function clr(){
    document.getElementById('display').value = ''
}
