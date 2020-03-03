const fetch = require('node-fetch');

module.exports = async function() {
	let resp = await fetch('https://bggapi.glitch.me/trade?username=lajlev');
	let games = await resp.json();
	return games.item;
};