var cNote = document.getElementById("cAudio");
var dNote = document.getElementById("dAudio");
var eNote = document.getElementById("eAudio");
var fNote = document.getElementById("fAudio");
var gNote = document.getElementById("gAudio");
var aNote = document.getElementById("aAudio");
var bNote = document.getElementById("bAudio");

$('#about').mousedown(function(e) {
    alert("Made by QC Slave from Sector 7G, with JavaScript and lovely ranting about my Salary as a tester.");
});

// Event handlers for C Note binded to A key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 97) {  
       cNote.currentTime = 0;
       cNote.play();
    }
});

$('#c').mousedown(function() {
    cNote.currentTime = 0;
    cNote.play();
});

// Event Handlers fro D Note binded to S Key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 115) {  
       dNote.currentTime = 0;
       dNote.play();
    }
});

$('#d').mousedown(function() {
    dNote.currentTime = 0;
    dNote.play();
});

// Event Handlers fro E Note, Binded to D key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 100) {  
       eNote.currentTime = 0;
       eNote.play();
    }
});

$('#e').mousedown(function() {
    eNote.currentTime = 0;
    eNote.play();
});

// Event Handlers for F Note, Binded to F key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 102) {  
       fNote.currentTime = 0;
       fNote.play();
    }
});
$('#f').mousedown(function() {
    fNote.currentTime = 0;
    fNote.play();
});

// Event Handlers for G Note, Binded to G key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 103) {  
       gNote.currentTime = 0;
       gNote.play();
    }
});
$('#g').mousedown(function() {
    gNote.currentTime = 0;
    gNote.play();
});


// Event Handlers for A Note, Binded to H key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 104) {  
       aNote.currentTime = 0;
       aNote.play();
    }
});
$('#a').mousedown(function() {
    aNote.currentTime = 0;
    aNote.play();
});


// Event Handlers for B Note, Binded to J key.
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    console.log(e.which);
    if (code === 106) {  
       bNote.currentTime = 0;
       bNote.play();
    }
});
$('#b').mousedown(function() {
    bNote.currentTime = 0;
    bNote.play();
});