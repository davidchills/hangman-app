const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1

window.addEventListener('keypress', (evt) => {
	const guess = evt.key;
	if (guess.match(/^[A-Za-z]$/)) {
		game1.makeGuess(guess);
		render()
	}
})

const render = () => {
	guessesEl.textContent = game1.statusMessage;
	let wrappedLetters = '';
	game1.puzzle.split('').forEach((letter) => {
		wrappedLetters += `<span>${letter}</span>`
	})
	puzzleEl.innerHTML = wrappedLetters;		
}

const startGame = async () => {
	try {
		const puzzle = await getPuzzle('2')
		console.log(puzzle)
		game1 = new Hangman(puzzle, 5)
		render()
	}
	catch (error) { console.log(error) }
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()