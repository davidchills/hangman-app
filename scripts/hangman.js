class Hangman {

	constructor(word, remainingGuesses = 0) {
		this.word = word.toLowerCase().split('');
		this.remainingGuesses = remainingGuesses;
		this.guessedLetters = [' '];
		this.status = 'playing';
	}

	calculateStatus() {
		const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
		if (this.remainingGuesses === 0) { this.status = 'failed'; }
		else if (finished) { this.status = 'finished'; }		
	}

	get statusMessage() {
		if (this.status === 'playing') { return `Guesses left: ${this.remainingGuesses}.`; }
		else if (this.status === 'failed') { return `Nice try! The word was "${this.word.join('')}".`; }
		else { return `Great work! You guessed the word.`; }	
	}

	get puzzle() {
		let puzzle = '';
		this.word.forEach((letter) => {
			puzzle += (this.guessedLetters.includes(letter) || letter === ' ') ? letter : '*';
		})
		return puzzle;		
	}

	makeGuess(guess) {
		if (this.status !== 'playing') { return; }
		guess = guess.toLowerCase();
		const isUnique = !this.guessedLetters.includes(guess);
		const isBadGuess = !this.word.includes(guess);
		if (isUnique) { this.guessedLetters.push(guess); }
		if (isUnique && isBadGuess) { this.remainingGuesses--; }
		this.calculateStatus();		
	}
}