var input = document.getElementById('display')

function val(num) {

    var lastVal = input.value.slice(input.value.length - 1);

    var opr = ["+", "-", "*", "/"];

    if (opr.indexOf(lastVal) !== -1 && opr.indexOf(num) !== -1) {
        input.value = input.value.slice(0, input.value.length - 1) + num
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
