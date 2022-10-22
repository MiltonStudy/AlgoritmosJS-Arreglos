/*
** Crear funcion para encontrar el segundo elemento mas grande de un arreglo
*/

function findSecondMaxNumber(numbers) {

    let maxNumber = numbers[0];
    let secondMaxNumber = 0;
    let arrayWithoutMaxNumber = [];

    for(let i = 0; i < numbers.length; i++) {
       if(maxNumber < numbers[i]) {
           maxNumber = numbers[i];
       }
    }

    for(let i = 0; i < numbers.length; i++) {
        if(maxNumber != numbers[i]) {
            arrayWithoutMaxNumber[i] = numbers[i];
        } else {
            arrayWithoutMaxNumber[i] = null;
        }
    }

    secondMaxNumber = arrayWithoutMaxNumber[0];

    for(let i = 0; i < arrayWithoutMaxNumber.length; i++) {
        if(secondMaxNumber < arrayWithoutMaxNumber[i]) {
           secondMaxNumber = arrayWithoutMaxNumber[i];
       }
    }
    console.log(secondMaxNumber);
}

findSecondMaxNumber([20,19,20,18,17,19,20,16,15,14]);
findSecondMaxNumber([20,19,18,17,16,15,20,14]);