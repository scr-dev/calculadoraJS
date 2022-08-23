const botoes = document.querySelectorAll('button');
const lcd = document.querySelector('.display');

for(let i in botoes) {
    botoes[i].classList.add('btn-padrao');
}

function input(num){ 

   let numero =  lcd.value 
    lcd.value = numero + num;
}
function clean(){
    lcd.value = '';
}
 function calcular(){
    let resultado = eval(lcd.value);
    lcd.value = resultado;
 }

