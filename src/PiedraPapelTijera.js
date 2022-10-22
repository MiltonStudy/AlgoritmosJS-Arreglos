game();

function game() {

	// Solicitando al usuario que opcion va a elegir
	var argOpcionUser = prompt("Que opcion va a elegir: Piedra, Papel o Tijeras");
	var opcionUser = argOpcionUser.toUpperCase();

	// Declarando variables necesarias
	var numeroCPU = Math.round(Math.random() * 10);
	var opcionCPU = null;

	// Se genera un número aleatorio
	if(numeroCPU > 2) {
		while(numeroCPU > 2) {
			var numeroCPU = Math.round(Math.random() * 10);
		}
	}

	// Se genera la opcion de la CPU
	switch(numeroCPU) {
		case 0:
			opcionCPU = "PIEDRA";
			break;
		case 1:
			opcionCPU = "PAPEL";
			break;
		case 2:
			opcionCPU = "TIJERAS";
			break;
	}

	// Se compara la opcion de la CPU contra la del usuario
	if(opcionCPU === opcionUser) {
		console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Empate!`);
	} else {
		switch(opcionCPU) {
			case "PIEDRA":
				if(opcionUser === "PAPEL") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Ganado!`);
				} else if(opcionUser === "TIJERAS") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Perdido!`);
				}
			break;

			case "PAPEL":
				if(opcionUser === "PIEDRA") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Perdido!`);
				} else if(opcionUser === "TIJERAS") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Ganado!`);
				}
			break;

			case "TIJERAS":
				if(opcionUser === "PIEDRA") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Ganado!`);
				} else if(opcionUser === "PAPEL") {
					console.log(`CPU: ${opcionCPU}, Tu: ${opcionUser}: Has Perdido!`);
				}
			break;
		}
	}
}