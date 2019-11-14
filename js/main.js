

var questions = [
    {
        //Question 1
        question: "What is this called?",
        image: "../img/tuktuk.jpg",
        answer: "Tuk Tuk",
        options: ["Car", "Motorcycle", "Tuk Tuk", "Not getting in"],
        datatype: "checkbox"
    },
    {
        //Question 2
        question: "Where is this temple?",
        image: "../img/angkorWat.jpg",
        answer: "Cambodia",
        options: ["Cambodia", "Thailand", "Burma", "India"],
        datatype: "dropdown"
    },
    {
        //Question 3
        question: "What dish is special to Hanoi, Vietnam?",
        image: "../img/bourdain.jpg",
        answer: "Bun Cha",
        options: ["Phad Thai", "Bun Cha", "Luc Lac", "Laap"],
        datatype: "radio"
    },
    {
        //Question 4
        question: "Where is the yoga ashram the Beatles went to Country and Town<br /> (hold ctrl to select more than one):",
        image: "../img/beatles.jpg",
        answer: ["India", "Rishikesh"],
        options: ["India", "Thailand", "Pushkar", "Rishikesh", "Kasol"],
        datatype: ""//Multiple select drop down
    },
    {
        //Question 5
        question: "Finish the expression<br />Dal Baht Power,...",
        image: "../img/dal-baht.jpg",
        answer: "24 power",
        options: "",
        datatype: "textbox"
    }
]

function start() {
    document.getElementById("welcome").classList.remove("d-flex");
    document.getElementById("welcome").classList.add("d-none");
    game();
}

function checkAnswer(index) {
    if (document.getElementById("input1").checked) {
        return questions[index].options[0] == questions[index].answer;
        return questions[index].options[1] == questions[index].answer;
        return questions[index].options[2] == questions[index].answer;
        return questions[index].options[3] == questions[index].answer;
    } else {
        alert("")
        return null;
    }

}

function evaluateScore(totalScore) {
    if (totalScore >= 1) {
        document.getElementById("won").style.visibility = "visible";
        document.getElementById("won").innerHTML = "You got " + totalScore + "/5 correct\nChezi won't catch you!";
    } else {
        document.getElementById("lost").style.visibility = "visible";
        document.getElementById("lost").innerHTML = "You got " + totalScore + "/5 correct Go buy a flight now! You know nothing Jon Snow";
    }
}

function nextQ(num, total) {

    if (num != 4) {
        document.getElementById("txt").innerHTML = questions[num].question;
        document.getElementById("img").src = questions[num].image;


        document.getElementById("input1").type = questions[num].datatype;
        document.getElementById("input2").type = questions[num].datatype;
        document.getElementById("input3").type = questions[num].datatype;
        document.getElementById("input4").type = questions[num].datatype;

        document.getElementById("label1").innerHTML = (questions[num].options[0]);
        document.getElementById("label2").innerHTML = (questions[num].options[1]);
        document.getElementById("label3").innerHTML = (questions[num].options[2]);
        document.getElementById("label4").innerHTML = (questions[num].options[3]);
        if (checkAnswer(num)) {
            total++;
        }
        num++;
        document.addEventListener("click", nextQ(num, total));

    } else if (num == 4) {
        document.getElementById("txt").innerHTML = questions[num].question;
        document.getElementById("img").src = questions[num].image;

        document.getElementById("input1").type = questions.datatype;
        document.getElementById("input2").removeChild;
        document.getElementById("input3").removeChild;
        document.getElementById("input4").removeChild;

        if (checkAnswer(num)) {
            total++;
        }
    }
    else {
        //finished game - evaluate score
        evaluateScore(total);
    }

}

function game() {
    var score = 0;



    nextQ(0, score);

}


function nextQuestion(id) {
    var backwards = id - 1;
    document.getElementById(id).classList.remove("d-none");
    document.getElementById(id).classList.add("d-flex");
    document.getElementById(id).scrollIntoView();
    
    if (backwards != 0) {
        document.getElementById(backwards).setAttribute("Style", "filter:blur(10px);");
    } else {
        document.getElementById("welcome").setAttribute("Style", "filter:blur(10px);")
        /* classList.remove("d-flex");
        document.getElementById("welcome").classList.add("d-none"); */
    }
}

function getSelectedOptions(sel) {
    var opts = [], opt;

    // loop through options in select list
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];

        // check if selected
        if (opt.selected) {
            // add to array of option elements to return from this function
            opts.push(opt);


        }
    }
}


function getScore() {
    var totalScore = 0;

    var userAnswerOne = document.getElementsByClassName("checkbox-q1");
    var userAnswerTwo = document.getElementById("qTwo").value;
    var userAnswerThree = document.quiz.qThree.value;
    var userAnswerFour = document.getElementById("qFour").value;
    var userAnswerFive = document.getElementById("qFive").value;

    if (userAnswerOne[2].checked) {
        totalScore++;
    }
    if (userAnswerOne[3].checked) {
        totalScore++;
    }

    if (userAnswerTwo == "cambodia") {
        totalScore++;
    }

    if (userAnswerThree == "buncha") {
        totalScore++;
    }

    if (userAnswerFour == ("Rishikesh")) {
        totalScore++;
    }
    if (userAnswerFive == "24 hour") {
        totalScore++;
    }

    if (totalScore >= 4) {
        document.getElementById("welcome").classList.add("d-none");
        document.getElementById("afterSubmit").classList.remove("d-none");
        document.getElementById("won").classList.remove("d-none");
        document.getElementById("quiz").style.display = "none";
        document.getElementById("won").style.display = "flex";

    } else {
    
        document.getElementById("welcome").classList.add("d-none");
        document.getElementById("afterSubmit").classList.remove("d-none");
        document.getElementById("lost").classList.remove("d-none");
        document.getElementById("quiz").style.display = "none";
        document.getElementById("lost").style.display = "flex";
    }

}

