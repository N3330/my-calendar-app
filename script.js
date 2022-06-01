//var rootEl = $('root');
$("#currentDay").text(moment().format("dddd, MMM Do")); // add date to top of page with currentDay id
var todaysDate = moment().format('MMM d, YYYY');// use moment() and formatted date 
for (var i = 9; i < 18; i++) {  // create for loop starting from 9 to 18 for the hours in my daily planner
    var colorKey = ""; // blank string for color key
    if (i < moment().hours()) { // color each eventCell if the hour is less than current hour for past
        colorKey = "past"
    } else if (i === moment().hours()) { // color eventCell for present if momment is current hour
        colorKey = "present"
    } else {
        colorKey = "future" // color eventCell for future
    }
    var hourDisplay = ""; // blank string for hour display
    if (i < 12) { // check if hour display is AM or PM
        hourDisplay = i+"AM"
    } else if (i === 12) {
        hourDisplay = i+"PM"
    } else {
        hourDisplay = i-12 + "PM"
    }
    var tr = $('<tr>').attr('id', i); // create table row at tr using i as an attribute to work with the index 9-18
    var hourCell = $('<td>').text(hourDisplay); // create hour cell as tabble data 
    var eventCell = $('<td>').addClass('events-cell ' + colorKey); // create event cell as table data and add event-cell class + colorKey past, present or future
    var textArea = $('<textarea>').addClass('description').val(localStorage.getItem(i)); // create text area and add class description plus localStoreage using index to save each 9-18
    var buttonCell = $('<td>') // create button cell 
    var button = $('<button>').text("save").addClass('btn save-btn').on("click", function () { // create button inside sell using on click event function
        var activity = $(this).parent().siblings('.events-cell').children().val().trim(); // store the value inside .events-cell as activity
        var hourKey = $(this).parent().parent().attr("id");// store the value inside tr which is the hour
        localStorage.setItem(hourKey, activity); // set both activity and hourkey to localStorage
    })
    $(".table").append(tr.append(hourCell, eventCell.append(textArea), buttonCell.append(button))); // append each table row with its children which will happen as many times as i tells it to
    button.css("background-color", "lightblue");
}

