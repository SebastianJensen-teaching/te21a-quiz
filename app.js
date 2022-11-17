let sendButton = document.querySelector(".send-button");
sendButton.addEventListener("click", handleForm);
function handleForm() {
    let points = 0;
    let answers = document.querySelectorAll("input:checked");
    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt(answers[answer].value, 10);
    }
    alert(`You got ${points} / 3 right`);
}