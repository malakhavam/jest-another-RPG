//Today's day, time right now
var todaysDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var weekDay = moment().format('dddd');

$("#currentDay").text(todaysDay);
$("#weekDay").text(weekDay);


