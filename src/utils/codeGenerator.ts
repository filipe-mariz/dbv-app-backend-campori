import crypto from 'crypto';

export function generateRandomNumber() {
	const numeros = "0123456789";

	let codigo = "";

	for (let i = 0; i < 5; i++) {
		codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
	}

	return codigo;
}

export default generateRandomNumber;