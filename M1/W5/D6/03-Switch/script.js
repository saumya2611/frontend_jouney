function calculator(num1, num2, operator) {
    let res;
    switch(operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;    
        case '/':
            res = num1 / num2;
            break;     
        default: 
            res = 'Invalid Operator'        
    }
    // console.log(res);
    return res;
}
console.log(calculator(5,5 ,'*'));