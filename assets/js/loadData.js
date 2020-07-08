function loadTimeTable() {
    d = new Date();
    let timetable = document.getElementById("timetable");
    timetable.innerHTML = "";
    if (d.getDay() > 0 && d.getDay() < 6) {
        timetable.innerHTML = "<thead><tr><th scope='col'>Timing</th><th scope='col'>Subject</th></tr></thead><tbody>";
        classHrs = [9,10,11,12,14,15];
        schedule = todaySchedule(d.getDay());
        for(i=0;i<classHrs.length;i++){
            timetable.innerHTML += "<tr><th scope = 'row'>"+classHrs[i]+" - "+classHrs[i]+".45"+"</th><td>"+schedule[i]+"</td>"+"</td></tr>";
        }
        timetable.innerHTML += "</tbody>";
    }

}

function loadLink() {
    var d = new Date();
    let todayData = document.getElementById("todayData");
    if (d.getDay() == 0 || d.getDay() == 6) {
        todayData.innerHTML = "<img src='assets/img/weekend.jpg' width='500'/>";
    }
    else {
        
        t=d.getDay();
        h = d.getHours();
        m = d.getMinutes();
        todayData.innerHTML = getPeriod(t,h);
    }
    loadTimeTable();
    setTimeout(loadLink,(60-m)*60000);
}

