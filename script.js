const question = document.querySelectorAll(".question");
const questionContent = document.querySelectorAll(".question-content")
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");





for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        answer[i].classList.toggle("active");
        questionContent[i].classList.toggle("active");
        arrow[i].classList.toggle("active");
    });
}