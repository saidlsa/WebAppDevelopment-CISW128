console.log("Hello, here the player's statistics are displayed.");

let playerName = "Said";
let favoriteGame = "Valorant";
 
/* Prompt 1: number of games played (Number() converts the text to a number) */

let gamesPlayed = Number(prompt("How many Valorant games have you played?"));

/* Prompt 2: number of wins */

let wins = Number(prompt("How many of those games did you win?"));

/* Prompt 3: whether the player has played today (answer is only "yes" or "no") */

let hasPlayedToday = prompt("Have you played today? (yes/no)");

/* Prompt 4: player's rank, in this case, the rank is a string. */

let rank = prompt("What is your rank? (for example: Gold, Platinum, Diamond)");
 
/* Math operations (In this part of the code, it shows how to calculate losses and win rate) */

let losses = gamesPlayed - wins;
let winRate = (wins / gamesPlayed) * 100;
 
/* String concatenations (This part combines strings to create a more informative message) like a webpage to calculate your winrate.*/
let playerInfo = playerName + " plays " + favoriteGame;
let gameSummary = "Games played: " + gamesPlayed + ", Wins: " + wins + ", Losses: " + losses;
 
/* Print all results to the console */
console.log("Player Name:", playerName);
console.log("Favorite Game:", favoriteGame);
console.log("Games Played:", gamesPlayed);
console.log("Wins:", wins);
console.log("Has Played Today:", hasPlayedToday);
console.log("Rank:", rank);
console.log("Total Losses:", losses);
console.log("Win Rate:", winRate + "%");
console.log(playerInfo);
console.log(gameSummary);
 
/*  Conditional statements */
 
/* Here, it validates the input. Wins can't be more than games played, */
/* and games played must be at least 1 (otherwise win rate can't be calculated). */
if (wins > gamesPlayed || gamesPlayed <= 0) {
    console.log("Invalid stats. Check your games played and wins.");
} else {
    console.log("Stats look valid.");
}
 
/* Here, it decides if it's a winning record based on win rate. */   
if (winRate >= 60) {
    console.log("Great job! You have a strong winning record.");
} else if (winRate >= 50) {
    console.log("You have a winning record. Keep it up!");
} else {
    console.log("You have a losing record. Time to practice!");
}
 
/* Only check the win rate if the player played today. */
/* Uses strict equality (===) to compare the string answer. */
if (hasPlayedToday === "yes") {
    /* decide what to do next based on the win rate */
    if (winRate >= 50) {
        console.log("You played today and you're winning. Keep the streak going!");
    } else {
        console.log("You played today but you're losing. Take a break and come back!");
    }
} else if (hasPlayedToday === "no") {
    console.log("You haven't played today. Time to queue up a match!");
} else {
    console.log("Please answer yes or no next time.");
}
 
 
/* This line adds a new paragraph to the end of the <body>, */
/* showing the total result (wins + losses) directly on the website */
let total = wins + losses;
document.body.innerHTML += "<p>Total games (wins + losses): " + total + "</p>";