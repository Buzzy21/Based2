const inputField = document.getElementById("input");
const displayField = document.getElementById("display");

// Calculates A#B
var operate = (termA, termB, operator) => { 
    termA = parseInt(termA);
    termB = parseInt(termB);

    let output = "INVALID";
    
    switch(operator) {
        case '+':
            output = termA + termB;
            break;
        case '-':
            output = termA - termB;
            break;
        case '*':
            output = termA * termB;
            break;
        case '/': 
            output = termA / termB;
            break;
        case '^':
            output = termA ^ termB;
            break;
        case '&':
            output = termA & termB;
            break;
        case '|':
            output = termA | termB;
            break;    
    } 

    console.log("Result:",output);
    return output;
}

// Calculates a sequence
var calculateString = (inputString) => {
    let i = 0; // The current character of the string we are processing
    let grabTerm = () => {
        let term = "";
        for(; i < inputString.length && (!isNaN(inputString[i]) || inputString[i] == ' '); i++) {
            if(!isNaN(inputString[i])) term += inputString[i];
        }
        return term;
    }

    let total = grabTerm();
    while(i < inputString.length) {
        operator = inputString[i];
        i++;
        if(i>=inputString.length) return "INVALID";

        term = grabTerm();
        if(term=="") return "INVALID";
        total = operate(total,term,operator); 
    }

    return total;
}

// Note that currently the text box only works for one calculation at once
inputField.addEventListener("input",()=> {
    const inputString = inputField.value;
    let output = calculateString(inputString);

    if(output != "INVALID") displayField.value = output;
});
