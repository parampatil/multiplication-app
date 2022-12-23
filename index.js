const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
const resetEl = document.getElementById("reset")
const feedbackEl = document.getElementById("feedback")
const opEl = document.getElementById("op")

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`
opEl.style.visibility = "visible"

const correctAns = num1 * num2
let score = JSON.parse(localStorage.getItem("score"));
let feedback = JSON.parse(localStorage.getItem("feedback"));
if(!score){
    score = 0;
}
if(!feedback){
    feedback = ``
    opEl.style.visibility = "hidden"
}

scoreEl.innerText = `score: ${score}`
feedbackEl.innerText = `${feedback}`

formEl.addEventListener("submit", (e) =>{
    console.log(inputEl.value)
    if(inputEl.value=== ""){
        feedback = `Please enter some value`
        updateLocalStorage()
    }
    else{
        const userAns = +inputEl.value
        if(userAns === correctAns){
            score = score + 10;
            feedback = `Congrtulations, you entered the correct answer. You get 10 points`
            updateLocalStorage()
        }
        else{
            score = score - 10;
            feedback = `Sorry, you entered the wrong answer. You loose 10 points. Correct answer was ${correctAns}`
            updateLocalStorage()
        }
    }
    
})

function resetLocalStorage(){
    score = 0;
    feedback = ``
    localStorage.setItem("score", JSON.stringify(score))
    localStorage.setItem("feedback", JSON.stringify(feedback))
    scoreEl.innerText = `score: ${score}`
    feedbackEl.innerText = `${feedback}`
    opEl.style.visibility = "hidden"

}

function updateLocalStorage(){
    opEl.style.visibility = "visible"
    localStorage.setItem("score", JSON.stringify(score))
    localStorage.setItem("feedback", JSON.stringify(feedback))
}