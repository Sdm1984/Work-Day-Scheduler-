var display = document.getElementById("currentDay");

// WHEN I open the planner, THEN the current day is displayed at the top of the calendar
function showCurrent() {
  var today = moment().format("MMM DD, YYYY, [at] hh:mm:ss a");
  display.textContent = today;
}

showCurrent();
setInterval(showCurrent, 1000);


// WHEN I click the save button for that timeblock the text for that event is saved in local storage
function setItem() {
  $(".saveBtn").on("click", function () {
    var inputId = $(this).parent().find(".description").attr("id");
    var inputValue = $("#" + inputId).val();
    localStorage.setItem(inputId, inputValue);
  });
}

//Get item from local storage

$("#hour9  .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// WHEN I view the timeblocks for that day THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function trackTime() {
  var timeNow = moment().hour();

  //Browse over timeblocks
  $(".row").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    //Check time and add classes for background indicators  

    if (timeBlock < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (timeBlock === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    }


  })

}

function main() {
  showCurrent(); {

  }

}

// WHEN I refresh the page,THEN the saved events persist