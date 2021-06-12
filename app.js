var input = document.getElementById('display')

function val(num) {
   
    input.value += num
    // if (num === "+" || num === "-" || num === "*" || num === "/" || num === "%") {
    //     var arr = ["+", "-", "*", "/", "%"]

    //     for (var i = 0; i < arr.length; i++) {
    
    //         if (input.value.charAt(input.value.length - 1) === "+") {
    //             input.value.slice(0, input.value.length - 3) +  input.value.slice(input.value.length - 2, input.value.length)
    //             // input.value.slice(input.value.length-2,input.value.length) = input.value.slice(input.value.length-1,input.value.length)
    //         }else{ input.value += num}
    // //     }
    // }

  
}

function calc() {
    if (input.value === "") {
        input.value = ""
    } else {
        input.value = eval(input.value)
    }
}

function clr() {
    input.value = ''
}

function back() {
    input.value = input.value.slice(0, input.value.length - 1)
}
