//Votre code ici

export default add;
function add(num1, num2) {

    const number1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    const number2 = typeof num2 === 'string' ? parseFloat(num2) : num2;
    
    return number1 + number2;
}
