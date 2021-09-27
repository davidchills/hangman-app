// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
// 	const request = new XMLHttpRequest()
// 	request.addEventListener('readystatechange', (evt) => {
// 		if (evt.target.readyState === 4 && evt.target.status === 200) {
// 			const data = JSON.parse(evt.target.responseText)
// 			resolve(data.puzzle)
// 		}
// 		else if (evt.target.readyState === 4) {
// 			reject('An error has taken place')
// 		}
// 	})
// 	request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
// 	request.send()
// })

const getPuzzle = async (wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	if (response.status === 200) {
		const data = await response.json()
		return data.puzzle
	}
	else { throw new Error('Unable to fetch puzzle') }
}

const getLocation = async () => {
	const response = await fetch(`http://ipinfo.io/json?token=a0f9514728df02`)
	if (response.status === 200) { return await response.json() }
	else { throw new Error('Unable to get location') }
}