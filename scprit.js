const calculatorInput = document.querySelector('.calculator input');
const buttons = document.querySelectorAll('.calculator button');
let currentInput='';
function handleButtonClick(event){
    const buttonValue = event.target.textContent;
    switch(buttonValue){
        case 'AC':
            currentInput='';
            break;
            case 'DEL':
            currentInput= currentInput.slice(0 , -1);
            break;
            case '=':
                try{
            currentInput = eval(currentInput).toString();
                }
                catch(error){
                    currentInput = 'Error'
                }
            break;
          default:
            currentInput += buttonValue
            }
          
            calculatorInput.value = currentInput;
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);

        
    });
    calculatorInput.value = '0';

