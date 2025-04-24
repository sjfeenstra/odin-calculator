let firstNbr = document.querySelector(".firstNbr")
let oprText = document.querySelector(".oprText")
let secondNbr = document.querySelector(".secondNbr")
let buttons = document.querySelector(".buttons")
let dotBtn = document.querySelector(".dotBtn")

secondNbr.textContent = 0

buttons.addEventListener("click", (e) => {
    value = e.target.textContent

    numbersArray = ["0","1","2","3","4","5","6","7","8","9","."]
    operatorsArray = ["+","-", "/", "*", "="]
    etcArray = ["AC","+/-", "%"]
    if (numbersArray.includes(value)) {
        numberAdd(value)
    } else if(operatorsArray.includes(value)) {
        operatorAdd(value)
    } else if (etcArray.includes(value)){
        etcAdd(value)
    } else {
        console.log("Input "+ value + " is unknown")
    }
})

function numberAdd(value){
    if (oprText.textContent == "") {
        firstNbr.textContent = ""
    }
    if(secondNbr.textContent == "0" && value == "."){
        secondNbr.textContent += value
        dotBtn.disabled = true;
    } else if (secondNbr.textContent == "0"){
        secondNbr.textContent = value
    } else {
        secondNbr.textContent += value
    }
}

function operatorAdd(value){
    if(firstNbr.textContent != "" && oprText.textContent != "" && secondNbr.textContent != "") { 
        operate()
    }
    if(value != "="){
        oprText.textContent = value
    }
    if(firstNbr.textContent == ""){
        firstNbr.textContent = secondNbr.textContent
        secondNbr.textContent = ""
    }
    dotBtn.disabled = false;
}

function etcAdd(value){
    switch (value) {
        case "AC":
            firstNbr.textContent = ""
            oprText.textContent = ""
            secondNbr.textContent = ""
            break;
        case "+/-":
            secondNbr.textContent = (Number(secondNbr.textContent)*-1)
            break;
        case "%":
            if (secondNbr.textContent != "") {
                secondNbr.textContent = (Number(secondNbr.textContent)/100)
            }
            break;
        default:
            break;
    }
}


function operate(){
    let first = Number(firstNbr.textContent)
    let operator = oprText.textContent
    let second = Number(secondNbr.textContent)

    switch (operator) {
        case "+":
            firstNbr.textContent = add(first,second)
            break;
        case "-":
            firstNbr.textContent = subtract(first,second)
            break;
        case "*":
            firstNbr.textContent = multiply(first,second)
            break;
        case "/":
            firstNbr.textContent = divide(first,second)
            break;
        default:
            break;
    }
    oprText.textContent = ""
    secondNbr.textContent = ""
}

function pf(n) {
    return Math.round(n * 1e15) / 1e15;
}


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return pf(a*b);
}

function divide(a,b){
    return a/b;
}