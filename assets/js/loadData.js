//loads the time table
function loadTimeTable(day) {
  let timetable = document.getElementById("timetable");
  timetable.innerHTML = "";
  if (day > 0 && day < 6) {
    timetable.innerHTML =
      "<thead><tr><th scope='col' style='width:130px'>Period</th><th scope='col'>Subject</th></tr></thead><tbody>";
    classHrs = [9, 10, 11, 12, 14];
    schedule = getSchedule(day);
    for (i = 0; i < classHrs.length; i++) {
      timetable.innerHTML +=
        "<tr><th scope = 'row'>" +
        classHrs[i] +
        " - " +
        classHrs[i] +
        ".45" +
        "</th><td>" +
        getSubjectTitle(schedule[i]) +
        "</td>" +
        "</td></tr>";
    }
    timetable.innerHTML += "</tbody>";
  }
}

//loads the link in the website
function loadLink() {
  var d = new Date();
  day = d.getDay();
  loadTimeTable(day);
  let todayData = document.getElementById("todayData");
  let nextData = document.getElementById("nextPeriodData");
  if (day == 0 || day == 6) {
    document.getElementById("post").innerHTML =
      "<img src='assets/img/weekend.jpg' width='500'/>";
  } else {
    h = d.getHours();
    m = d.getMinutes();
    todayData.innerHTML = getPeriod(day, h);
    nextData.innerHTML = getPeriod(day, h + 1);
  }
}

function snackBarFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
      $('#popup').delay(2000).fadeIn();
    }
    else {
      $('#popup').fadeOut();
    }
    $('#feedBackYes, #feedBackNo').click(function() // You are clicking the close button
    {

      link='';
      if(this.id == 'feedBackYes')
        link = 'https://api.countapi.xyz/hit/cpyes1';
      else if (this.id == 'feedBackNo') {
        link = 'https://api.countapi.xyz/hit/cpno1';
      }
      $.getJSON(link,function(){
        localStorage.setItem('popState','shown');
        $('#popup').fadeOut(); // Now the pop up is hidden.
      });
      snackBarFunction();
      localStorage.setItem('popState','shown');
      $('#popup').fadeOut();
    });
   
});

