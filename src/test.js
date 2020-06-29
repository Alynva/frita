const {
    getPrices,
    getGamesAmerica,
    EU_DEFAULT_LOCALE,
    US_GAME_CHECK_CODE,
    US_GET_GAMES_URL
} = require("nintendo-switch-eshop");
console.log(US_GET_GAMES_URL)
// getPrices("US", [70010000015189])
//     .then(r => console.log(JSON.stringify(r, null, 2)))
//     .catch(err => console.error(JSON.stringify(err)))

getGamesAmerica()
    // .then(r => console.log(JSON.stringify(r[0], null, 2)))
    .catch(err => console.error(JSON.stringify(err)))