function operate(op,num1,num2){
    if(op=="plus"){
        return num1 + num2;
    }
    else if(op=="minus"){
        return num1 - num2;
    }
    else if(op=="multiply"){
        return num1 * num2;
    }
    else if(op=="divide"){
        return num1 / num2;
    }
}
console.log(operate("plus",10,20));