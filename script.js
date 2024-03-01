const questions =[
    {
        question:"Are you able to sleep well at night ?",
        answers: [
            { text:"Always" , point: 0},
            { text:"Most Nights" , point: 1},
            { text:"Sometimes" , point: 2},
            { text:"Rarely or Never" , point: 3}
        ]
    },
    {
        question:"How often do you feel sad or unhappy ?",
        answers: [
            { text:"Never" , point: 0},
            { text:"Sometimes" , point: 1},
            { text:"Often" , point: 2},
            { text:"Always" , point: 3}
        ]

    },
    {
        question:"Are you able to make friends easily ?",
        answers: [
            { text:"Yes, always" , point: 0},
            { text:"Most of the time" , point: 1},
            { text:"Sometimes" , point: 2},
            { text:"Never" , point: 3}
        ]
    },
    {
        question:"Do you regularly exercise like before ?",
        answers: [
            { text:"Yes, always" , point: 0},
            { text:"Most of the time" , point: 1},
            { text:"Sometimes" , point: 2},
            { text:"Never" , point: 3}
        ]
    }

]

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startAssement(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    if(currentQuestionIndex  == questions.length){

        questionElement.innerHTML = "Thank You for Taking the Assesment &#128512" ;   
        const title = document.getElementById("quizhead");
        title.innerHTML = "Results";
        const showScore = document.createElement("h1");
        showScore.innerHTML = "Your Score : "+ ((questions.length*3) - score);
        answerElement.appendChild(showScore);
        
        
    }
else{
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +"/" + questions.length + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer =>  {
        const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerElement.appendChild(button);
       button.dataset.point = answer.point;
       button.addEventListener("click", handleClick);
       }
    );

}
   
}

function resetState(){   
    nextbutton.style.display ="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function handleClick(e){
    nextbutton.style.display = "block";
    if (currentQuestionIndex + 1  == questions.length) {
        nextbutton.innerHTML = " Submit";

    }
    const trigbtn = e.target;
    const point_val = trigbtn.dataset.point;
    currentQuestionIndex++;
    score = Number(point_val) + score;

    Array.from(answerElement.children).forEach(button => {
        button.disabled = "true";
    })   
trigbtn.classList.add("trigbtn");

}
 nextbutton.addEventListener("click", handleNext);

 function handleNext() {
    showQuestion();
 }
 
startAssement();