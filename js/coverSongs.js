console.log("Okay, I'm RE-load-ed!");
window.onload = function () {
	console.log("test!");
	// alert(window.onload);
	start();

};
// Future Music Visual Functionality
// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });

///////////////////////////////////////////////////

//start button 
var playRandom = document.getElementById("button"); 

//user game messages 
var uiMessage = document.getElementById("uiMessage");

//instruction message "Make Your Choice"
document.getElementById("instructionMessage");

//user choice artist choice text on ui, quantity 3)
var artist1 = document.getElementById("artist1");
var artist2 = document.getElementById("artist2");
var artist3 = document.getElementById("artist3");

//user choice artist choice buttons on ui, quantity 3)
var guess1 = document.getElementById("guessOne");
var guess2 = document.getElementById("guessTwo");
var guess3 = document.getElementById("guessThree");

//user choice artist choice buttons/CLASSBASED on ui, quantity 3)
var guessSubmission = document.getElementsByClassName("guessSubmissionButton"); 

//artist history message element
var songHistory = document.getElementById("songHistory");

//artist/song history, quantity 5)
// var redRedWineHistory = "'Red Red Wine' is a song written, performed and originally recorded by American singer Neil Diamond in 1967 (https://www.youtube.com/watch?v=BeJ55sUacPM), reaching number sixty-two on the Billboard Hot 100 chart in 1968. The song you heard here was done UB40 in 1983 in a lighter reggae style.";
// var cantHelpFallingInLoveHistory = "'Can't Help Falling in Love' is a pop ballad originally recorded by American singer Elvis Presley (https://www.youtube.com/watch?v=vGJTaP6anOU). It was featured in Elvis Presley's 1961 film, Blue Hawaii. During the following four decades, it was recorded by numerous other artists, including 'you guessed it' British reggae group UB40 (https://www.youtube.com/watch?v=vGJTaP6anOU). The song you played here was done by 'Twenty One Pilots' in 2013 (https:www.youtube.com/watch?v=6ThQkrXHdh4).";
// var smoothCriminalHistory = "'Smooth Criminal' is the seventh single from American recording artist Michael Jackson in 1987 (https://www.youtube.com/watch?v=sFvENQBc-F8). It peaked at number seven on the Billboard Hot 100. The song serves as the theme song to Jackson's 1988 film Moonwalker. The song heard here was done by Alien Ant Farm, released in 2001 (https://www.youtube.com/watch?v=CDl9ZMfj6aE).";
// var comeTogetherHistory = "'Come Together' is a song by the Beatles written by John Lennon but credited to Lennon–McCartney (https://vimeo.com/74886942). The song is the opening track on the album Abbey Road and was released as a double A-sided single with 'Something', their 21st single in the United Kingdom and 26th in the United States. The song reached the top of the charts in the US and peaked at number four in the UK. The song played here was done by Godsmack and released in 2012 (https:www.youtube.com/watch?v=kPi-MOxR0l4).";
// var landOfConfusionHistory = "'Land of Confusion' is a song by the English rock band Genesis from their 1986 album Invisible Touch (https://www.youtube.com/watch?v=QHmH1xQ2Pf4). The song was the third track on the album and was the third track released as a single, reaching No. 4 in the US. The music was written by the band, while the lyrics were written by guitarist Mike Rutherford. The song video featured puppets from the 1980s UK sketch show 'Spitting Image'. The song heard here was done by Disturbed, an American heavy metal band from Chicago, Illinois (https:www.youtube.com/watch?v=YV4oYkIeGJc), released 2005.";

///////////////////////////////////////////////////

//audio locations
var redRedWine = new Audio(["audio/ub40---red-red-wine-2002-digital-remaster_cutted.mp3"]);
var cantHelpFallingInLove = new Audio(["audio/twenty-one-pilots-cant-help-falling-in-love_cutted.mp3"]);
var comeTogether = new Audio(["audio/godsmack---come-together_cutted.mp3"]);
var smoothCriminal = new Audio(["audio/alien-ant-farm---smooth-criminal_cutted.mp3"]);
var landOfConfusion = new Audio(["audio/disturbed---land-of-confusion-official-music-video_cutted.mp3"]);

///////////////////////////////////////////////////

//song array choices, quantity 5)
var songs = [
	{
		//Red Red Wine
		audioObject: redRedWine, //mp3
		coverSongTitle: "Red Red Wine", //the songs will come from the audio folder (as a new audio as below) maybe state this in ui MESSAGE
		coverArtistChoices: ["Neil Diamond", "ABBA", "Gwen Stefani"], //artist choices// post these to each button below "Make Your Choice"
		correctAnswer: "Neil Diamond", //correctAnswer // send ui to "uiMessage" with right answer//if can add highlight of right button answer when chosen
		originalSongHistory: "'Red Red Wine' is a song written, performed and originally recorded by American singer Neil Diamond in 1967, reaching number sixty-two on the Billboard Hot 100 chart in 1968. The song you heard here was done UB40 in 1983 in a lighter reggae style.", //history // when get wrong put history up of the song and a DID you know for Winner with same HISTORY
	},
	{
		//Can't Help Falling In Love With You
		audioObject: cantHelpFallingInLove, //mp3
		coverSongTitle: "Can't Help Falling In Love With You", 
		coverArtistChoices: ["Bob Marley", "Ray Charles", "Elvis Presley"], //artist choices
		correctAnswer: "Elvis Presley", //correctAnswer
		originalSongHistory: "'Can't Help Falling in Love' is a pop ballad originally recorded by American singer Elvis Presley. It was featured in Elvis Presley's 1961 film, Blue Hawaii. During the following four decades, it was recorded by numerous other artists, including 'you guessed it' British reggae group UB40. The song you played here was done by 'Twenty One Pilots' in 2013.",//history
	},
	{
		//Smooth Criminal
		audioObject: smoothCriminal, //mp3
		coverSongTitle: "Smooth Criminal", 
		coverArtistChoices: ["Adema", "Michael Jackson", "10 Years"], //artist choices
		correctAnswer: "Michael Jackson", //correctAnswer
		originalSongHistory: "'Smooth Criminal' is the seventh single from American recording artist Michael Jackson in 1987. It peaked at number seven on the Billboard Hot 100. The song serves as the theme song to Jackson's 1988 film Moonwalker. The song heard here was done by Alien Ant Farm, released in 2001.", //history
	},
	{	
		//Come Together
		audioObject: comeTogether,//mp3
		coverSongTitle: "Come Together", 
		coverArtistChoices: ["The Beatles", "Theory Of A Deadman", "The Who"], //artist choices
		correctAnswer: "The Beatles", //correctAnswer
		originalSongHistory: "'Come Together' is a song by the Beatles written by John Lennon but credited to Lennon–McCartney. The song is the opening track on the album Abbey Road and was released as a double A-sided single with 'Something', their 21st single in the United Kingdom and 26th in the United States. The song reached the top of the charts in the US and peaked at number four in the UK. The song played here was done by Godsmack and released in 2012.", //history
	},
	{ 
		//Land Of Confusion
		audioObject: landOfConfusion, //mp3
		coverSongTitle: "Land Of Confusion", 
		coverArtistChoices: ["George Ezra", "Big Big Train", "Genesis"], //artist choices
		correctAnswer: "Genesis", //correctAnswer
		originalSongHistory: "'Land of Confusion' is a song by the English rock band Genesis from their 1986 album Invisible Touch. The song was the third track on the album and was the third track released as a single, reaching No. 4 in the US. The music was written by the band, while the lyrics were written by guitarist Mike Rutherford. The song video featured puppets from the 1980s UK sketch show 'Spitting Image'. The song heard here was done by Disturbed, an American heavy metal band from Chicago, Illinois, released 2005."
 //history              
	}
];
// console.log(songs);

///////////////////////////////////////////////////

function start() {
	playRandom.addEventListener("click", function() {
	// console.log("I'm a test for START!");
	uiMessage.innerHTML = "I'm a test for START";

	getRandomSong();
});
}

///////////////////////////////////////////////////

var getRandomSong = function() { 
	resetTheHistory();
	var ind = Math.floor(Math.random() * songs.length);   
	var song = songs[ind]; 	
	console.log(song);
	
	playSong(song.audioObject);
	postTitleMessage(song.coverSongTitle);
	postArtists(song.coverArtistChoices);
	
	answerSubmission(song);
};

///////////////////////////////////////////////////
		
function playSong(audioObject) {
	audioObject.play();
}

///////////////////////////////////////////////////

var postTitleMessage  = function (message) {
	uiMessage.innerHTML = message;
};
		
///////////////////////////////////////////////////

var postArtists = function(array) {
	// array.split("");
	artist1.innerHTML = array[0];
	artist2.innerHTML = array[1];
	artist3.innerHTML = array[2];
	// debugger
};

///////////////////////////////////////////////////

var answerSubmission = function(song) {
$(".guessSubmissionButton").on("click", function() {
	// $(this).siblings("#artist1");
var artistName = $(this).siblings(".artistChoice");	

answerVerification(artistName, song);
});
};

///////////////////////////////////////////////////

var answerVerification = function(artistName, song) {
	var artistsName = artistName.text();
	// console.log(song.correctAnswer);
	// console.log(artistsName);

	if (song.correctAnswer === artistsName){
		uiMessage.innerHTML = "Great job!";
	} else {
		uiMessage.innerHTML = "Sorry!";
	// $(this).siblings("#artist1");
	}
	// console.log(song.audioObject);
	songPause(song.audioObject);
	postMessage(song);
};

///////////////////////////////////////////////////

var postMessage = function (song) {
	songHistory.innerHTML = song.originalSongHistory;
};

///////////////////////////////////////////////////

var resetTheHistory = function() {
	$("#songHistory").empty();
};

///////////////////////////////////////////////////

var songPause = function(audioObject) {
	audioObject.pause();
};

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// NEXT STEP

// var wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     waveColor: 'violet',
//     progressColor: 'purple'
// });

// wavesurfer.load('audio/godsmack---come-together_cutted.mp3');
// http://wavesurfer-js.org/docs

////////////////////////////////////////////////////

// Things to try on the next round


// if(some.test === T)

// 	Question
// 		given //to the user = False;
// 		Answered = True;


// everytime you create variable console.log
// test = new Audio(testAudio.src);
//// debugger
//// TIMER

///////////////////////////////////////////////////
