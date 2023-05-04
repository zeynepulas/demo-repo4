const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input")
const fromEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = "score: "+score;
questionEl.innerText = "What is "+num1+" multiplied by " +num2+"?"
const correctAnswer = num1 * num2
fromEl.addEventListener("sub", ()=>{
    const userAnswer = inputEl.value
    if(userAnswer === correctAnswer){
        score++
    }else{
        score--
    }
});
function UpdatLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}