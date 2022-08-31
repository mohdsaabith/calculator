function valueButton(s){
    calculatorForm.screen.value += s.value;
}

function Delete(){
    calculatorForm.screen.value = null;
}

function Calculate(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}