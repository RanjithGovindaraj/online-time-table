timetable = {
    "1": [
      "PT",
      "PT",
      "14CST72",
      "ELECTIVE2",
      "ELECTIVE1",
      "14GET71"
    ],
    "2": [
      "PT",
      "PT",
      "ELECTIVE2",
      "ELECTIVE1",
      "ELECTIVE3",
      "14CST71"
    ],
    "3": [
      "PT",
      "PT",
      "14CST72",
      "14GET71",
      "LABS",
      "LABS"
    ],
    "4": [
      "PT",
      "PT",
      "14CST71",
      "ELECTIVE3",
      "14CST72",
      "ELECTIVE2"
    ],
    "5": [
      "PT",
      "PT",
      "ELECTIVE3",
      "14CST71",
      "14GET71",
      "ELECTIVE1"
    ]
  }

//gets schedule for the given day
function getSchedule(day) {
    return timetable[day];
}

//prepare data for the given name and link
function preparePeriod(subName,subLink) {
    data = "";
    console.log(subLink)
    if(subName == "Placement Training" )
        return "<p>Placement Training - Use respective Links</p>";
    if(Array.isArray(subName) && Array.isArray(subLink)) {
        console.log(subLink)
        for (i = 0;i<subName.length;i++){
            if(Array.isArray(subLink[0])){
                for(j = 0;j<subLink.length;j++) {
                    data += "<p>"+subName[i]+" - <a target='_blank' href="+subLink[i][j]+">Link</a></p>";
                }
            }
            else
                data += "<p>"+subName[i]+" - <a target='_blank' href="+subLink[i]+">Link</a></p>";
        }
    }
    else
        data = "<p>"+subName+" - <a target='_blank' href="+subLink+">Link</a></p>";
    return data;
}

//gets the name and link
function getPeriod(day,hour) {
    schedule = getSchedule(day);
    classHrs = [9,10,11,12,14,15];
    if(classHrs.includes(hour)){
        subGrp = schedule[classHrs.indexOf(hour)];
        subName = getSubjectTitle(subGrp);
        subCode = getSubjectCode(subGrp);
        subLink = []
        if(Array.isArray(subCode)){
            for(i in subCode){
                subLink.push(getLinks(subCode[i]));
            }
        }
        else 
            subLink.push(getLinks(subCode));
        data = preparePeriod(subName,subLink);
        return data;
    }
    else {
        data = "";
        if(hour < 9 || hour == 13)
            data =  "Class yet to start<br>"+"<img src='assets/img/classstart.jpg' width='500'/>";
        else
            data =  "Classes are over<br>"+"<img src='assets/img/classover.jpg' width='500'/>";
        return data;
    }
}

