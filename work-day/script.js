//Today's day, time right now

var todaysDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var weekDay = moment().format('dddd');

$("#currentDay").text(todaysDay);
$("#weekDay").text(weekDay);



//Save input to local storage

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

//Get input from local storage through loop 
var time = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < time.length; i++) {
    $(".form" + time[i]).val(localStorage.getItem(time[i]));
}
