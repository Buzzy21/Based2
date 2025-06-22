const inputField = document.getElementById("input");
const displayField = document.getElementById("display");

// Note that currently the text box only works for one calculation at once
inputField.addEventListener("input",()=> {
    const inputString = inputField.value;
    
    let termA = termB = "";
    
    let i = 0;
    let grabTerm = () => {
        let term = "";
        for(; i < inputString.length && (!isNaN(inputString[i]) || inputString[i] == ' '); i++) {
            if(!isNaN(inputString[i])) term += inputString[i];
        }
        return term;
    }

    termA = grabTerm();

    if(i >= inputString.len) {return;}
    let operator = inputString[i];

    i++;
    
    termB = grabTerm();
    if(termB=='') {return;}
    
    termA = parseInt(termA);
    termB = parseInt(termB);

    let output;
    
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
    displayField.value = output;
});
