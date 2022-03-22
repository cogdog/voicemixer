// configuration for this mixer

// All thee voice data. id=base name for audio file, name=how to display on page, segments indicate which of the ones the voices are availble
var people = [
	{"id" : "moira" , "name" : "Moira", "segments" : [1,2,3,4,5]}, 
	{"id" : "alex" , "name" : "Alex", "segments" : [1,2,3,4,5]}, 
	{"id" : "tessa" , "name" : "Tessa", "segments" : [1,2,3,4,5]}, 
	{"id" : "xander" , "name" : "Xander", "segments" : [1,2,3,4,5]}, 
	{"id" : "daniel" , "name" : "Daniel", "segments" : [1,2,3,4,5]}, 
	{"id" : "samantha" , "name" : "Samantha", "segments" : [1,2,3,4,5]}, 
	{"id" : "fred" , "name" : "Fred", "segments" : [1,2,3,4,5]}, 
	
];

// the text for each segment, will be displayed under speakers name as it plays

var segment_text = [
	"To make a prairie it takes a clover and one bee",
	"One clover, and a bee",
	"And revery",
	"The revery alone will do",
	 "If bees are few"
]

// number of segments in this mix
var numsegments = 5; 