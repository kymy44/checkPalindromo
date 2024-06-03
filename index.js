//check palindromos

let word = window.prompt("introduzca una palabra");

//console.log(typeof word, word);

word = word.split("");

//console.log(typeof word, word);

let flipped = [];
console.log(flipped);

for (let i = word.length; i > 0; i--) {
	flipped.push(word[i - 1]);
	console.log(flipped);
}
console.log(typeof word, word);
console.log(typeof flipped, flipped);
word = word.join();
flipped = flipped.join();

console.log(typeof word, word);
console.log(typeof flipped, flipped);
word === flipped //js no compara arrays directamente pq compara sus referencias a las variables
	? console.log("Es palindromo")
	: console.log("no es palindromo");
