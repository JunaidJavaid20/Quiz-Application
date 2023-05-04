function signUp() {
    var email = document.getElementById("semail").value;
    var password = document.getElementById("spass").value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (email == "" && password == "") {
        alert("Please fill the Form")
    }
    else {
        alert("Data Inserted Succssfully");
        location.replace("./signin.html")

    }
}

function signIn() {
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpass").value

    var email1 = localStorage.getItem("email");
    var pass1 = localStorage.getItem("password");

    if (email === email1 && password === pass1) {
        location.href = "./welcome.html";
    }
    else if (email == "" && password == "") {
        alert("Please Fill The form")
    }
    else {
        alert("Email And password is incorrect")
        location.replace("./signup.html")
    }
}

var welcome = document.getElementById("welcome").innerHTML = localStorage.getItem("email")

var min = document.getElementById("min");
var sec = document.getElementById("sec");

var minute = 0;
var second = 0;
var inter = setInterval(() => {
    second++;
    sec.innerHTML = second;

    if (second >= 59) {
        minute++;
        min.innerHTML = minute
        second = 0;
    }

    else if (minute >= 20) {
        clearInterval(inter)
    }

}, 1000);

const array = [
    {
        Question: "What is the capital of Pakistan?",
        a: "karachi",
        b: "islamabad",
        c: "hyderabad",
        d: "lahore",
        correct: "b"
    },
    {
        Question: "Who is the current president of Pakistan?",
        a: "Shabaz Shareef",
        b: "Imran Khan",
        c: "Nawaz Shareef",
        d: "Asif Ali Zardari",
        correct: "a"
    },
    {
        Question: "Who is the Fastest bowler in the world?",
        a: "Brett Lee",
        b: "Shaun Tait",
        c: "Shoaib Akhtar",
        d: "Muhammad Amir",
        correct: "c"
    },
    {
        Question: "which country win the 1992 cricket world Cup?",
        a: "Australia",
        b: "New ZeaLand",
        c: "England",
        d: "Pakistan",
        correct: "d"
    },
    {
        Question: "Who is making the Web standards??",
        a: "Microsoft",
        b: "The World Wide Web Consortium",
        c: "Google",
        d: "Mozila",
        correct: "b"
    },
    {
        Question: "Choose the correct HTML element for the largest heading:?",
        a: "<h1>",
        b: "<heading>",
        c: "<h6>",
        d: "<head>",
        correct: "a"
    },
    {
        Question: "What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<break>",
        c: "<br>",
        d: "<lineBreak>",
        correct: "c"
    },
    {
        Question: "Choose the correct HTML element to define important text?",
        a: "<strong>",
        b: "<important>",
        c: "<i>",
        d: "<b>",
        correct: "a"
    },
    {
        Question: "Which character is used to indicate an end tag?",
        a: "<",
        b: "*",
        c: "^",
        d: "/",
        correct: "d"
    },
    {
        Question: "How can you make a numbered list?",
        a: "<list>",
        b: "<ol>",
        c: "<ul>",
        d: "<dl>",
        correct: "b"
    },
]
let index = 0;
let score = 0;
let total = array.length;
let quebox = document.getElementById("quebox");
let options = document.querySelectorAll(".options");

const loadFunction = () => {
    if (index === total) {
        return endQuizz();

    }

    let data = array[index];
    quebox.innerText = `Q${index + 1}) ${data.Question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
    reset();
}
const submitQuizz = () => {
    var ans = getAnswer();
    let data = array[index];
    if (ans === data.correct) {
        score++;
        console.log(score)
    }
    else {
        console.log("your answer is Wrong")
    }
    index++;
    loadFunction();
}


const getAnswer = () => {
    options.forEach((input) => {
        if (input.checked) {
            value = input.value
        }
    })
    return value
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false
    })
}

const endQuizz = () => {
    var check = document.querySelector(".container2");
    check.innerHTML =
        `<div style = "text-align : center">
    <h1> Thanks for Playing This quizz </h1>
    <h1> Your Total Score is ${score} out of ${total} </h1>
    <h1 class = "abc"> Your Total Percentage is ${percentage(score, total)} </h1>
    </div>`
    check.classList.remove("container2")
    check.classList.add("container3")
    console.log(check.classList)
}

function percentage(score, total) {
    return score * 100 / total + "%"
    
}

// console.log(score)
loadFunction();
// getAnswer()