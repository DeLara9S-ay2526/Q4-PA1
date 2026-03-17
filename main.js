function verifyEligibility(){
    let age = Number(document.getElementById("age").value);
    if (age >= 18){
        document.getElementById("status").innerHTML = "Status: Eligible to Vote";
    } else {
        document.getElementById("status").innerHTML = "Status: Not Eligible to Vote";
    }
}
function verifyGrade(){
    let grade = Number(document.getElementById("grade").value);
    if (grade >= 94 && grade <= 100){
        document.getElementById("status-grade").innerHTML = "Status: Excellent";
    } else if (grade >= 87 && grade <= 93) {
        document.getElementById("status-grade").innerHTML = "Status: Above Standard";
    } else if (grade >= 80 && grade <= 86) {
        document.getElementById("status-grade").innerHTML = "Status: Standard";
    } else if (grade >= 75 && grade <= 79) {
        document.getElementById("status-grade").innerHTML = "Status: Needs Improvement";
    } else {
        document.getElementById("status-grade").innerHTML = "Status: Failed";
    }
}