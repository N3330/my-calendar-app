var rootEl = $('root');
$("#currentDay").text(moment().format("dddd, MMM Do"));
var todaysDate = moment().format('MMM d, YYYY');
for (var i = 9; i < 18; i++) {
    var colorKey = "";
    if (i < moment().hours()) {
        colorKey = "past"
    } else if (i === moment().hours()) {
        colorKey = "present"
    } else {
        colorKey = "future"
    }
    var hourDisplay = "";
    if (i < 12) {
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

