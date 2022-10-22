/*
** Ejercicio 1
** Escribe una función recursiva para un timer que cada 5 minutos se 
** agregue 10 minutos más a su cuenta total.
*/

function timer(newTime) {
    var time = newTime;
    if (time != 50) {
        time = time + 5;
        console.log(time);
        timer(time);
    } else {
        console.log("Termine!");
    }
}

// Solución al ejercicio 1
timer(0);

/*
** Ejercicio 2
** Escribe una función recursiva para encontrar el número más grande de un array.
*/

function higherValue(numbers, pCounter, higher) {

    var counter = pCounter;
    var higher = higher;
    
    if(counter < numbers.length) {

        if(counter == 0) {
            higher = numbers[0];
        }
        
        if(higher < numbers[counter]) {
            higher = numbers[counter];
        }
        
        counter++;
        higherValue(numbers, counter, higher);
    } else {
        console.log(`Número mayor: ${higher}`);
    }
}

// Solución al ejercicio 2, leer instrucciones
// Instrucciones: pasar 0 como argumento de pCounter y higher
higherValue([5, 3, 3, 2, 2, 9], 0, 0);


/*
** Ejercicio 3
** Escribe una función recursiva para convertir de minúscula a mayúscula
** el primer y último carácter de un string.
*/

function stringToUpperCase(word, pCounter) {

    var counter = pCounter;
    var newWord = word;

    if(counter < word.length) {
        if(word.length == 1) {
            newWord = word.toUpperCase();
        }
        
        if(counter == 0) {
            newWord = word.charAt(0).toUpperCase();
            newWord += word.substring(1, word.length);
        }

        if(counter == word.length - 1) {
            newWord = word.substring(0, (word.length - 1));
            newWord += word.charAt(word.length - 1).toUpperCase();
        }

        counter++;
        stringToUpperCase(newWord, counter);
    } else {
        console.log(newWord);
    }
}

// Solución al ejercicio 3, leer instrucciones
// Instrucciones: pasar 0 como argumento de pCounter
stringToUpperCase("milton", 0);

/* 
** Ejercicio 4
** Escribe una función recursiva para escribir la serie Fibonacci hasta su décima iteración.
*/

function fibonacci(sizeFibonacci, a, b, c, pCounter, pAcumulador) {

    counter = pCounter;
    acumulador = pAcumulador;
    
    if(counter < sizeFibonacci) {

        if(c == 0) {
            acumulador = c;
            c = a + b;
        } else {
        
            c = a + b;
            b = a;
            a = c;

            acumulador += ", ";
            acumulador += c;
        }
    
        counter++;
        fibonacci(sizeFibonacci, a, b, c, counter, acumulador);
    } else {
        console.log(acumulador);
    }
}

// Solución al ejercicio 4, leer instrucciones
// Instrucciones: pasar 10 como argumento de sizeFibonacci, 1 como argumento de b
// 0 como argumento de a, c y pCounter
fibonacci(10, 0, 1, 0, 0);

/*
** Ejercicio 5
** Escribe una función recursiva para generar un password aleatorio con 20 caracteres
** combinando letras-números-símbolos-números-letras-día-new-año.
*/

function randomPassword(sizePassword, password, pCounter, index) {

    counter = pCounter;
    indexCaracter = index;
    newPassword = password;

    if(counter < sizePassword) {

        var number = Math.floor(Math.random() * 10);
        
        switch(indexCaracter) {
            case 0:
                // LETRAS
                newPassword += String.fromCharCode(97 + number);
                indexCaracter = 1;
            break;

            case 1:
                // CARACTERES
                newPassword += String.fromCharCode(57 + number);
                indexCaracter = 2;
            break;

            case 2:
                // NUMEROS
                newPassword += String.fromCharCode(50 + number);
                indexCaracter = 0;
            break;
        }

        counter++;
        randomPassword(sizePassword, newPassword, counter, indexCaracter);
    } else {
        console.log(newPassword);
    }
}

// Solución al ejercicio 5, leer instrucciones
// Instrucciones: pasar 20 como argumento de sizePassword, "" como argumento de password
// 0 como argumento pCounter e index
randomPassword(20, "", 0, 0);