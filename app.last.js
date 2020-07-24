window.onload = function () {
    result()
}


function result() {

    let parent = document.querySelector(".mainCont");
    // let a = sessionStorage.getItem("timeOut");
    // console.log(a);
    if (sessionStorage.getItem("timeOut") === "true") {
        divTimeout = document.createElement("div");
        divTimeout.classList.add("timeout")
        let h1 = document.createElement("h1");
        h1.textContent = `Time out`
        divTimeout.appendChild(h1)
        parent.appendChild(divTimeout)
    }

    let points = sessionStorage.getItem("points")
    if (points > 20){
        let divAward = document.createElement("div");
        divAward.classList.add("awardDiv");
        let award = document.createElement("i")
        award.classList.add("fa", "fa-trophy")
        award.setAttribute("aria-hidden","true")
        divAward.appendChild(award)
        parent.appendChild(divAward)
    }else if (points <= 20){
        let divAward = document.createElement("div");
        divAward.classList.add("awardDiv");
        let award = document.createElement("i")
        award.classList.add("fa", "fa-thumbs-down")
        award.setAttribute("aria-hidden","true")
        divAward.appendChild(award)
        parent.appendChild(divAward)
    }


    let h3 = document.createElement("h3");
    let name = sessionStorage.getItem("name")
    // let points = sessionStorage.getItem("points")
    if (points > 10) {
        h3.textContent = `Congratulations: ${name}`
    } else {
        h3.textContent = `Hard Luck: ${name}`
    }
    parent.appendChild(h3)

    let sec_h3 = document.createElement("h3");
    sec_h3.textContent = `points: ${points}`
    parent.appendChild(sec_h3)

}

var home = document.querySelector(".home");
home.addEventListener("click",(e)=>{
    sessionStorage.clear()
    location.href = "index.html"
})

