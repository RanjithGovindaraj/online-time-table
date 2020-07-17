
//loads the time table
function loadTimeTable() {
    d = new Date();
    let timetable = document.getElementById("timetable");
    timetable.innerHTML = "";
    if (d.getDay() > 0 && d.getDay() < 6) {
        timetable.innerHTML = "<thead><tr><th scope='col'>Timing</th><th scope='col'>Subject</th></tr></thead><tbody>";
        classHrs = [9,10,11,12,14,15];
        schedule = getSchedule(d.getDay());
        for(i=0;i<classHrs.length;i++){
            timetable.innerHTML += "<tr><th scope = 'row'>"+classHrs[i]+" - "+classHrs[i]+".45"+"</th><td>"+schedule[i]+"</td>"+"</td></tr>";
        }
        timetable.innerHTML += "</tbody>";
    }

}


//loads the link in the website
function loadLink() {
    var d = new Date();
    loadTimeTable();
    let todayData = document.getElementById("todayData");
    let nextData = document.getElementById("nextPeriodData");
    if (d.getDay() == 0 || d.getDay() == 6) {
        todayData.innerHTML = "<img src='assets/img/weekend.jpg' width='500'/>";
    }
    else {
        
        t=d.getDay();   
        h = d.getHours();
        m = d.getMinutes();
        todayData.innerHTML = getPeriod(t,h);
        console.log(t+' '+h);
        // h = h + 1;
        nextData.innerHTML = getPeriod(t,h+1);
        console.log(t+' '+h);
    }
}



