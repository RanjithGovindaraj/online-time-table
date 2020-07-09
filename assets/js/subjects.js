subjects = {
    "PT":"Placement Training",
    "14GET71": "Total Quality Management",
    "14CST71": "Machine Learning",
    "14CST72": "Mobile Communication",
    "LABS":{
        "14CSL71": "Machine Learning Algorithm Laboratory",
        "14CSL72": "Mobile Communication Laboratory"
    },
    "ELECTIVE1": {
      "14CSE06": "Software Testing",
      "14CSE11": "Business Intelligence and its Application"
    },
    "ELECTIVE2": {
      "14CSO07": "E-Commerce",
      "14ITO06": "Free Open Source Software",
      "14MEO07": "3D Printing and Design",
      "14ECO07": "Quantum Computing"
    },
    "ELECTIVE3": {
      "14ITO01": "Internet of Things",
      "14ITO04": "Mobile Application Development",
      "14EEO04": "Energy Storage Systems"
    }
  }

links = {
    "14GET71": "https://meet.google.com/lookup/eh6sk35jwu",
    "14CST71": "https://meet.google.com/lookup/beubszcyfc",
    "14CST72": "https://meet.google.com/lookup/awgm4xeu7l",
    "14CSE06": "https://meet.google.com/lookup/f2nn45eg3d",
    "14CSE11": "https://meet.google.com/lookup/gmk7tw6vrv",
    "14CSO07": "https://meet.google.com/lookup/biuc2swusf",
    "14ITO06": "https://meet.google.com/lookup/byy7frs3ge",
    "14MEO07": "https://meet.google.com/lookup/erllfytgac",
    "14ECO07": "https://meet.google.com/lookup/ggv5lx63zd",
    "14ITO01": "https://meet.google.com/lookup/em3tkzoqvr",
    "14ITO04": "https://meet.google.com/lookup/gczc2pt27a",
    "14EEO04": "https://meet.google.com/lookup/ek4cwdatvh",
    "14CSL71": [
      "https://meet.google.com/lookup/beubszcyfc",
      "https://meet.google.com/lookup/ho2u64kbfu"
    ],
    "14CSL72": [
      "https://meet.google.com/lookup/awgm4xeu7l",
      "https://meet.google.com/lookup/e25lmg7skf"
    ]
  }

//receives subject's short name and returns the full name
function getSubjectTitle(subGrp) {
    grps = ['LABS','ELECTIVE1','ELECTIVE2','ELECTIVE3'];
    if(grps.includes(subGrp)) {
        t = subjects[subGrp];
        list = []
        for(var key in t)
            list.push(t[key]);
        return list;
    }
    else
        return subjects[subGrp];
}


//receives subject's short name and returns the subject code
function getSubjectCode(subGrp) {
    grps = ['LABS','ELECTIVE1','ELECTIVE2','ELECTIVE3'];
    if(grps.includes(subGrp)) {
        t = subjects[subGrp];
        list = []
        for(var key in t)
            list.push(key);
        return list;
    }
    else
        return subGrp;
}

//receives subject's short name and returns the link(s)
function getLinks(subGrp) {
    grps = ['14CSL71','14CSL72'];
    if(grps.includes(subGrp)) {
        t = links[subGrp];
        list = [];
        for(var key in t)
            list.push(t[key]);
        return list;
    }
    else
        return links[subGrp];
}