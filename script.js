var rootEl = $('root');

var todaysDate = moment().format('MMM d, YYYY');
for (var i = 9; i < 18; i++) {
    var tr = $('<tr>').attr('id', i); 
    var hourCell = $('<td>').text(i);
    var eventCell = $('<td>').addClass('events-cell');
    var textArea = $('<textarea>').addClass('description').val(localStorage.getItem(i));
    var buttonCell = $('<td>')
    var button = $('<button>').text("save").addClass('btn save-btn').on("click", function(){
        var activity = $(this).parent().siblings('.events-cell').children().val().trim();
        var hourKey = $(this).parent().parent().attr("id");
        localStorage.setItem(hourKey, activity);
    })
    $(".table").append(tr.append(hourCell, eventCell.append(textArea), buttonCell.append(button)));
     
}

