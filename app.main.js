let questions = [
    {
        question: "Q1 CPU Stands for ?",
        answer: "central processing unit",
        option: [
            "central processing unit",
            "central programming unit",
            "central performance unit",
            "central per unit",
        ]
    },
    {
        question: "Q2 The term 'Computer' is derived from ?",
        answer: "latin",
        option: [
            "latin",
            "english",
            "french",
            "german",
        ]
    },
    {
        question: "Q3 Who is the father of Computer?",
        answer: "Charles Babbage",
        option: [
            "Charles Babbage",
            "Augusta Adaming",
        ]
    },
    {
        question: "Q4 Who is the father of Computer?",
        answer: "Charles Babbage",
        option: [
            "Charles Babbage",
            "Augusta Adaming",
        ]
    },
    {
        question: "Q5 Who is the father of Internet ??",
        answer: "Vint Cerf",
        option: [
            "Vint Cerf",
            "Denis Riche",
        ]
    }
]


let quesNum = 0;
let points = 0
sessionStorage.setItem("points",points)

// // timeOut check 
// let sec = 10;
// let min = 0;


let sec = 60;
let min = 4;
var p = document.querySelector(".counter p");
if (min !=0){
    p.textContent = `${min+1} : 00`
}else{
    p.textContent = `0${min} : ${sec}`
}

function timer() {
    var interval = setInterval(() => {
        if (min == 0 && sec==0){
            clearInterval(interval)
            sessionStorage.setItem("timeOut",true)
            sessionStorage.setItem("timeS",sec)
            sessionStorage.setItem("timeM",min)
            location.href = "last.html"
            return;
        }
        sec--;
        if (sec == 0) {
            sec = 00;
        }else if(sec <0){
            sec = 59;
            min--
        }
        
        var secs = (sec < 10) ? `0${sec}`:sec     
        var mins = (min < 10) ? `0${min}`:min     
        p.textContent = `${mins} : ${secs}` 

    }, 1000)

}

var load = document.querySelector("body");
load.onload = function () {
    quiz(quesNum)
    timer()
}

function quiz(quesNum) {
    var quesCont = document.querySelector(".question-cont");

    var qn = document.createElement("div")
    var p = document.createElement("p")
    p.innerHTML = `Question ${quesNum + 1} of ${questions.length}`
    qn.classList.add("qn");
    qn.appendChild(p);
    quesCont.appendChild(qn)


    var h1 = document.createElement("h1");
    var qu = questions[quesNum].question
    h1.innerHTML = qu
    quesCont.appendChild(h1)

    var divOp = document.createElement("div");
    divOp.classList.add("options");

    for (var i = 0; i < (questions[quesNum].option).length; i++) {
        let div = document.createElement("div");
        div.classList.add("op");

        let inp = document.createElement("input");
        inp.setAttribute('type', 'radio');
        inp.setAttribute('name', 'option');
        inp.setAttribute('id', ('op' + i));
        var ansOption = questions[quesNum].option[i]
        inp.setAttribute('value', ansOption);

        let label = document.createElement("label")
        label.textContent = ansOption
        label.setAttribute('for', ('op' + i));

        div.appendChild(inp)
        div.appendChild(label)
        divOp.appendChild(div)
    }
    quesCont.append(divOp)

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-s");

    let button = document.createElement("button");
    button.classList.add("btnS");
    button.textContent = 'Submit'
    btnDiv.append(button)
    quesCont.appendChild(btnDiv)

}



var subBtn = document.querySelector(".question-cont");
subBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnS")) {

        if (quesNum === (questions.length - 1)) {

            let inpCheck = document.querySelectorAll("input");
            Array.from(inpCheck).forEach((inp) => {
                if (inp.checked) {
                    if (inp.value === questions[quesNum].answer) {
                        points += 10
                        sessionStorage.setItem("points", points);
                    }
                }
            })
            sessionStorage.setItem("timeOut",false)
            sessionStorage.setItem("timeS",sec)
            sessionStorage.setItem("timeM",min)

            location.href = "last.html"
            return;
        }


        let inpCheck = document.querySelectorAll("input");
        Array.from(inpCheck).forEach((inp) => {
            if (inp.checked) {
                if (inp.value === questions[quesNum].answer) {
                    points += 10
                    sessionStorage.setItem("points", points);
                }
                quesNum++;
            }
        })


        if (quesNum < questions.length) {
            var quesCont = document.querySelector(".question-cont");
            quesCont.innerHTML = ""
            quiz(quesNum)
        }


    }
})



// var subBtn = document.querySelector(".question-cont");
// subBtn.addEventListener("click", (e) => {
//     if (e.target.classList.contains("btnS")) {

//         if (quesNum === (questions.length - 1)) {
//             location.href = "index.html"
//         }


//         let inpCheck = document.querySelectorAll("input");
//         Array.from(inpCheck).forEach((inp) => {
//             if (inp.checked) {
//                 if (inp.value === questions[quesNum].answer) {
//                     points += 10
//                     sessionStorage.setItem("points", points);
//                 }
//                 quesNum++;
//             }
//         })

//         var quesCont = document.querySelector(".question-cont");
//         quesCont.innerHTML = ""
//         quiz(quesNum)


//     }
// })
