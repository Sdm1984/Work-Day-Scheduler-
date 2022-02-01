
var display = document.getElementById("currentDay");
 
// I have to display the current date on the top of page
function displayCurrent() {
    var today = moment().format("MMM DD, YYYY, [at] hh:mm:ss a");
    display.textContent = today;
}

displayCurrent();
setInterval(displayCurrent, 1000);


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock, THEN I can enter an event

// WHEN I click the save button for that timeblock, the text for that event is saved in local storage

// WHEN I refresh the page,THEN the saved events persist