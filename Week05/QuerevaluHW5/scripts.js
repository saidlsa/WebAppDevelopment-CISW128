console.log("Hello, here the player's statistics are displayed.");
let playerName = "Said";
let favoriteGame = "Valorant";
let gamesPlayed = 10;
let wins = 6;
let hasPlayedToday = false;

/* Math operations */
let losses = gamesPlayed - wins;
let winRate = (wins / gamesPlayed) * 100;

/* String concatenations */
let playerInfo = playerName + " plays " + favoriteGame;
let gameSummary = "Games played: " + gamesPlayed + ", Wins: " + wins + ", Losses: " + losses;

/* Print all results to the console */
console.log("Player Name:", playerName);
console.log("Favorite Game:", favoriteGame);
console.log("Games Played:", gamesPlayed);
console.log("Wins:", wins);
console.log("Has Played Today:", hasPlayedToday);

console.log("Total Losses:", losses);
console.log("Win Rate:", winRate + "%");

console.log(playerInfo);
console.log(gameSummary);

/* This line adds a new paragraph to the end of the <body>,*/
/* showing the total result (wins + losses) directly on the website*/

let total = wins + losses;

document.body.innerHTML += "<p>Result: " + total + "</p>";