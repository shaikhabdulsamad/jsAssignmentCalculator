var input = document.getElementById('display')

function val(num) {

    if (input.value.match(/[-,+,*,/,%]$/) && num.match(/[-,+,*,/,%]/)) {

        input.value = input.value.slice(0,input.value.length -1) + num;
        
    }

    else { input.value += num }


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
