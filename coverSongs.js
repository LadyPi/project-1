console.log("onload test");
window.onload = function () {

var playRandom = document.getElementById("button"); 
var winnerMessage = document.getElementById("winnerMessage");
var artist1 = document.getElementById("artist1");
var artist2 = document.getElementById("artist2");
var artist3 = document.getElementById("artist3");
var guess1 = document.getElementById("guessOne");
var guess2 = document.getElementById("guessTwo");
var guess3 = document.getElementById("guessThree");
var songHistory = document.getElementById("songHistory");

// var coverAndArtist = {
// 			olderSongCovered: "newArtist",
// 			olderSongCovered: "newArtist",
// 			olderSongCovered: "newArtist",
// 			olderSongCovered: "newArtist",
// 			olderSongCovered: "newArtist"
// }

// -List: SONGS and Artist to add to coverAndArtist object.

///////////////////////////////////////////////////



// Psuedo Code (try to refactor into OOP)
///////////////////////////////////////////////////




function start() {
	playRandom.addEventListener("click", function() {
	console.log("I'm a test for START!");
	document.winnerMessage.innerHTML("I'm a test for START");
	// CLICK on Play button (add eventListener) to start playing
	// (Make play button the reset button as well if makes sense)
});
}


// function playSong() {
// 	RANDOM CHOICE with KEY to given answer
// 		Object?
// }




// ///////////////////////////////////////////////////

// Short Snippet of Song plays through speaker
// 	-May want to add delay up on pressing (short one)
// 		-Need to cut some songs to test
// 			-limit to 5 songs for now altogether

// Have "instructionMessage" ("Make Your Choice") animate so user knows 
// to select a choice AFTER song has played
// 	-add eventlisteners to guessButtons



// If The Person gets question right
// 	-Let "winnerMessage" say they WON or got it right
// 		-let them know in winnerMessage that "If they want to play again to
// 		PRESS the PLAY button above."
// 			-maybe add a fact about one or both artists or about song

// 	else if they lose, display in winnerMessage that says "If you want to try again 
// 		PRESS the PLAY button above."
// 			PRESENT HISTORY 


///////////////////////////////////////////////////
};
