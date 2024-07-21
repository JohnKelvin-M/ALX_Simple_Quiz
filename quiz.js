const submitButton = document.querySelector("#submit-answer");
const feedbackElement = document.querySelector("#feedback");

function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  if (userAnswer) {
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
      feedbackElement.style.color = "red";
    }
  } else {
    feedbackElement.textContent = "Please select an answer.";
    feedbackElement.style.color = "orange";
  }

  submitButton.addEventListener("click", checkAnswer);
}
