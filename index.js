
var quizForm = document.forms["Quiz-Form"];
quizForm.addEventListener("submit", (e) => {
    e.preventDefault()
    var value = document.querySelector("#Quiz-Form input[type='text']").value;
    if (value !== "") {
        sessionStorage.setItem("name", value)
        location.href = "quiz.html";
    }
})