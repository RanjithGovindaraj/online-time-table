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
