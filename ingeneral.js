function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

var lectureID = findGetParameter("id") || "IN2227";
//console.log(lectureID)
var requestURL = "./lectures.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send()
request.onload = function() {
    var lecturedata = request.response

    document.getElementById("examiner").innerHTML = "Examiner: " + lecturedata[lectureID].examiner
    document.getElementById("subject").innerHTML = "Exam: " + lecturedata[lectureID].title + " (" + lectureID + ")"
}