var operator, num1, num2;
var calculando = false;

function operation(){
    
}

var output = document.querySelector('#texto');

var texto = '';

function write(event){
    texto += event;
    output.textContent = texto;
}

const input = document.querySelectorAll('i.input');

input.forEach((input) => {

    input.addEventListener('click', (event) => {
        
        var temp = event.target.textContent;

        if(temp === '/' || temp === 'x' || temp === '-' || temp === '+'){
            if(calculando === false){
                num1 = Number(texto);
                operator = temp;

                texto = '';

                calculando = true;

            }else{
                alert('esperando um igual')
            }

        }else{
            write(temp);
        }
    });
});

var igual = document.querySelector('#igual');

igual.addEventListener('click', () => {
    num2 = Number(texto);
    console.log(num2)

    texto = '';

    switch (operator) {
        case '/':
            texto = num1 / num2;
            break;
    
        case 'x':
            texto = num1 * num2;
            break;

        case '-':
            texto = num1 - num2;

            break;

        case '+':
            texto = num1 + num2;
            break;

        default:
            break;
    }

    output.textContent = texto;
    calculando = false;
});



