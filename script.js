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
    var tr = $('<tr>').attr('id', i);
    var hourCell = $('<td>').text(hourDisplay);
    var eventCell = $('<td>').addClass('events-cell ' + colorKey);
    var textArea = $('<textarea>').addClass('description').val(localStorage.getItem(i));
    var buttonCell = $('<td>')
    var button = $('<button>').text("save").addClass('btn save-btn').on("click", function () {
        var activity = $(this).parent().siblings('.events-cell').children().val().trim();
        var hourKey = $(this).parent().parent().attr("id");
        localStorage.setItem(hourKey, activity);
    })
    $(".table").append(tr.append(hourCell, eventCell.append(textArea), buttonCell.append(button)));
    //$("#currentday").append.text(todaysDate);
}

