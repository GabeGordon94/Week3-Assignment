
function getScore(){
    var question1 = document.getElementsById("question1").value;
    if (question1 == "Providence") {
		alert("yes");
}else{
    alert("no")
}
}

/* function getScore(){
    var answer1 = document.getElementById("q1").value;
    if (answer1 == "tuktuk"){
        alert("YUP");
    }else{
        alert("Nope");
    }
} */
/* 
var questionsAnswers =[
    {
        question = "What is this called?",
        image = "../img/tuktuk.jpg",
        answer = "Tuktuk"
    }
]

for (var i=0;i<questionsAnswers.length;i++){
    document.getElementById("questionContainer").innerHTML = questionsAnswers[i].question;
    if (questionsAnswers[i].image != null){
        document.getElementById("pictureContainer").src = questionsAnswers[i].image;
    }
} */