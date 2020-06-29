import React, { useState, useCallback } from 'react'
import { index } from '../services/GameSearchClient'
import GameResult from './GameResult'

const GameSearch = () => {
	const [list, setList] = useState([])
console.log(list)
	const handleSearch = useCallback(e => {
		e.preventDefault()
		const text = document.getElementById('search').value
		index.search(text)
			.then(r => r.hits)
			.then(r => r.filter(x => x.platform === "Nintendo Switch"))
			.then(r => setList(r))
	}, [])
	return <>
		<form onSubmit={handleSearch}>
			<input id="search" />
			<button>Search</button>
		</form>

		<ul>
			{list.map((x, i) => <GameResult key={x.nsuid} data={x} />)}
		</ul>
	</>
}

export default GameSearch