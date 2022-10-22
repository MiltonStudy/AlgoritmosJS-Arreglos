/*
** Crear funcion para convertir mayusculas a minusculas y viceverza
*/

function switchCases(word) {

	let newWord = "";

	for(let i = 0; i < word.length; i++) {
		
		charTemporal = word.charAt(i);

		if(charTemporal == word.charAt(i).toUpperCase()) {
			newWord += word.charAt(i).toLowerCase();
		} else if (charTemporal == word.charAt(i).toLowerCase()) {
			newWord += word.charAt(i).toUpperCase();
		}
	}
	console.log(newWord);
}

switchCases("HolA JavaScripT");