var paises = [
	{nombrePais: "Colombia", capital: "Bogota", poblacion: 45.000},
	{nombrePais: "Peru", capital: "Lima", poblacion: 38.000},
	{nombrePais: "Ecuador", capital: "Quito", poblacion: 17.000},
	{nombrePais: "Argentina", capital: "Buenos Aires", poblacion: 23.000},
	{nombrePais: "Uruguay", capital: "Montevideo", poblacion: 6.500},
	{nombrePais: "Paraguay", capital: "Asuncion", poblacion: 15.250},
	{nombrePais: "Brasil", capital: "Brasilia", poblacion: 70.500},
	{nombrePais: "Venezuela", capital: "Caracas", poblacion: 40.200}
];

/*
** metodo forEach(), para recorrer los elementos de un array
*/
paises.forEach(function(pais){
	console.log(pais);
});


/*
** metodo filter(), para crear un nuevo array a partir de los elementos
** del array que cumplan con una determinada condición
*/
var paisesDeMayorPoblacion = paises.filter(function(pais){
	return pais.poblacion >= 35.000;
});

console.log(paisesDeMayorPoblacion);


/*
** metodo map(), para mutar o transfomrar un array
*/
var capitalPaises = paises.map(function(pais){
	return pais.capital;
});

console.log(capitalPaises);


/*
** metodo find(), para devolver el primer valor que coincida de un array
*/
var encuentraPais = paises.find(function(pais){
	return pais.nombrePais === "Argentina"
});

console.log(encuentraPais);


/*
** metodo some(), para devolver si un array cumple con una determinada condición
*/
var paisesPequeños = paises.some(function(pais){
	return pais.poblacion <= 10.000;
});

console.log(paisesPequeños);


/*
** metodo splice(), recibe la posición del elemento y cuantos elementos 
** desde la posicion desea guardar
*/
var paisesSinEliminar = paises.splice(2, 1);

console.log(paisesSinEliminar);