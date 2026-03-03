const questions = [
  { question: "1. UNIX was developed at:", options: ["Microsoft", "Bell Laboratories", "IBM", "Google"], answer: 1 },
  { question: "2. Linux was developed by:", options: ["Dennis Ritchie", "Bill Gates", "Linus Torvalds", "Ken Thompson"], answer: 2 },
  { question: "3. Linux is:", options: ["Single-user OS", "Multi-user, multitasking, open-source OS", "Paid OS", "Real-time OS only"], answer: 1 },
  { question: "4. Command to display current working directory:", options: ["dir", "pwd", "cd", "ls"], answer: 1 },
  { question: "5. Command to list files:", options: ["show", "dir", "ls", "list"], answer: 2 },
  { question: "6. Command to create directory:", options: ["newdir", "mkdir", "makedir", "create"], answer: 1 },
  { question: "7. Command to delete file:", options: ["del", "erase", "rm", "delete"], answer: 2 },
  { question: "8. Command to copy files:", options: ["move", "cp", "copy", "mv"], answer: 1 },
  { question: "9. Command to move/rename files:", options: ["rename", "mv", "shift", "cp"], answer: 1 },
  { question: "10. Root directory symbol:", options: ["~", "/", "#", "root"], answer: 1 },
  { question: "11. File permissions categories:", options: ["2", "3", "4", "5"], answer: 1 },
  { question: "12. Command to change file permissions:", options: ["chown", "chmod", "perm", "setperm"], answer: 1 },
  { question: "13. Command to change ownership:", options: ["chown", "chmod", "own", "setown"], answer: 0 },
  { question: "14. Command to create hard link:", options: ["ln file link", "link file", "ln -s file link", "cp link"], answer: 0 },
  { question: "15. Command to create symbolic link:", options: ["ln file link", "ln -s file link", "link -s", "cp -s"], answer: 1 },
  { question: "16. Command to compress using gzip:", options: ["zip", "gzip filename", "tar -z", "compress"], answer: 1 },
  { question: "17. Command to extract tar archive:", options: ["tar -cvf", "tar -xvf", "untar", "extract"], answer: 1 },
  { question: "18. Default Linux shell:", options: ["Zsh", "Fish", "Bash", "Tcsh"], answer: 2 },
  { question: "19. Command to display hidden files:", options: ["ls", "ls -a", "ls -l", "dir -a"], answer: 1 },
  { question: "20. Execution permission symbol:", options: ["r", "w", "x", "e"], answer: 2 },
  { question: "21. Filter to display first 10 lines:", options: ["head", "tail", "top", "cat"], answer: 0 },
  { question: "22. Filter to display last 10 lines:", options: ["head", "bottom", "tail", "cat"], answer: 2 },
  { question: "23. Command to sort file contents:", options: ["arrange", "sort filename", "order", "list"], answer: 1 },
  { question: "24. Command to remove duplicate lines:", options: ["uniq", "unique", "rmdup", "sort -u only"], answer: 0 },
  { question: "25. Command to translate characters:", options: ["grep", "tr", "sed", "awk"], answer: 1 },
  { question: "26. grep stands for:", options: ["General Print", "Global Regular Expression Print", "Group Print", "Graph Print"], answer: 1 },
  { question: "27. Option for extended regex in grep:", options: ["-x", "-r", "-E", "-e"], answer: 2 },
  { question: "28. sed is known as:", options: ["Stream Editor", "System Editor", "Shell Editor", "Script Editor"], answer: 0 },
  { question: "29. awk is mainly used for:", options: ["File delete", "Pattern scanning and column processing", "Compression", "Linking"], answer: 1 },
  { question: "30. cut command purpose:", options: ["Delete file", "Extract fields", "Copy file", "Merge lines"], answer: 1 },
  { question: "31. paste command purpose:", options: ["Merge lines horizontally", "Copy file", "Delete content", "Sort file"], answer: 0 },
  { question: "32. Home directory symbol:", options: ["/", "~", "#", "@"], answer: 1 },
  { question: "33. Command to display manual pages:", options: ["help", "man", "manual", "info"], answer: 1 },
  { question: "34. Command to count lines/words:", options: ["count", "wc", "calc", "measure"], answer: 1 },
  { question: "35. File storing user account info:", options: ["/etc/users", "/etc/passwd", "/home/passwd", "/usr/passwd"], answer: 1 },
  { question: "36. Command to display file type:", options: ["type", "file filename", "info", "stat"], answer: 1 },
  { question: "37. Numeric value of rwxr-xr-x:", options: ["644", "755", "777", "700"], answer: 1 },
  { question: "38. Command to change directory:", options: ["cd directory", "move", "dirchange", "switch"], answer: 0 },
  { question: "39. Command to create empty file:", options: ["new", "touch filename", "mkfile", "create"], answer: 1 },
  { question: "40. Command to display file contents:", options: ["show", "cat filename", "display", "view"], answer: 1 },
  { question: "41. Tool to create .zip files:", options: ["gzip", "tar", "zip", "compress"], answer: 2 },
  { question: "42. Command to decompress gzip:", options: ["gunzip filename.gz", "unzip", "untar", "gzip -d only"], answer: 0 },
  { question: "43. Option for long listing format:", options: ["ls -a", "ls -l", "ls -h", "ls -R"], answer: 1 },
  { question: "44. Command to search patterns:", options: ["find", "grep pattern filename", "search", "locate"], answer: 1 },
  { question: "45. Command to edit stream line by line:", options: ["awk", "sed", "grep", "vi"], answer: 1 },
  { question: "46. Command to display disk usage:", options: ["df", "du", "disk", "usage"], answer: 1 },
  { question: "47. Command to show free disk space:", options: ["free", "du", "df", "space"], answer: 2 },
  { question: "48. Command to change group ownership:", options: ["chgrp group filename", "chown", "groupmod", "setgrp"], answer: 0 },
  { question: "49. Command to create tar archive:", options: ["tar -xvf", "tar -cvf file.tar filename", "zip", "compress"], answer: 1 },
  { question: "50. Regex symbol for start of line:", options: ["$", "^", ".", "*"], answer: 1 },
  { question: "51. Regex symbol for end of line:", options: ["^", "$", "?", "+"], answer: 1 },
  { question: "52. Wildcard for single character:", options: ["*", "?", "#", "&"], answer: 1 },
  { question: "53. Wildcard for multiple characters:", options: ["?", "*", ".", "+"], answer: 1 },
  { question: "54. Command to concatenate files:", options: ["merge", "cat file1 file2", "join", "append"], answer: 1 },
  { question: "55. head option to show specific lines:", options: ["head -n number filename", "head -l", "head -c", "head -s"], answer: 0 },
  { question: "56. tail option to follow updates:", options: ["tail -f filename", "tail -u", "tail -n", "tail -r"], answer: 0 },
  { question: "57. Command for sorted unique lines:", options: ["uniq only", "sort filename | uniq", "sort -u only", "unique"], answer: 1 },
  { question: "58. Command to split fields using delimiter:", options: ["cut -d ':' -f1 filename", "split", "awk only", "grep -d"], answer: 0 },
  { question: "59. Command to process text column-wise:", options: ["sed", "awk", "cut", "tr"], answer: 1 },
  { question: "60. Command to display present working directory:", options: ["pwd", "dir", "show", "ls"], answer: 0 }
];

const elements = {
  progress: document.getElementById("progress"),
  questionText: document.getElementById("question-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  results: document.getElementById("results"),
  scoreText: document.getElementById("score-text"),
  review: document.getElementById("review"),
  restartBtn: document.getElementById("restart-btn"),
  quizBody: document.getElementById("quiz-body"),
  controls: document.getElementById("controls")
};

let shuffledQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;

function shuffleQuestions(data) {
  const copy = [...data];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initQuiz() {
  shuffledQuestions = shuffleQuestions(questions);
  userAnswers = Array(shuffledQuestions.length).fill(null);
  currentQuestionIndex = 0;

  elements.results.classList.add("hidden");
  elements.quizBody.classList.remove("hidden");
  elements.controls.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const question = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  elements.progress.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
  elements.questionText.textContent = question.question;
  elements.options.innerHTML = "";

  question.options.forEach((optionText, optionIndex) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = optionText;

    if (selectedAnswer !== null) {
      if (optionIndex === selectedAnswer) {
        btn.classList.add("selected");
      }
      if (optionIndex === question.answer) {
        btn.classList.add("correct");
      }
      if (optionIndex === selectedAnswer && selectedAnswer !== question.answer) {
        btn.classList.add("incorrect");
      }
    }

    btn.addEventListener("click", () => handleSelection(optionIndex));
    elements.options.appendChild(btn);
  });

  renderFeedback();
  elements.prevBtn.disabled = currentQuestionIndex === 0;
  elements.nextBtn.textContent = currentQuestionIndex === shuffledQuestions.length - 1 ? "Finish Quiz" : "Next";
}

function renderFeedback() {
  const question = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  elements.feedback.className = "feedback";

  if (selectedAnswer === null) {
    elements.feedback.textContent = "Select an answer.";
    return;
  }

  if (selectedAnswer === question.answer) {
    elements.feedback.textContent = "Correct ✅";
    elements.feedback.classList.add("correct");
  } else {
    elements.feedback.textContent = `Incorrect ❌ Correct answer: ${question.options[question.answer]}`;
    elements.feedback.classList.add("incorrect");
  }
}

function handleSelection(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  renderQuestion();
}

function calculateScore() {
  return shuffledQuestions.reduce((total, question, index) => {
    if (userAnswers[index] === question.answer) {
      return total + 1;
    }
    return total;
  }, 0);
}

function finishQuiz() {
  const score = calculateScore();
  elements.scoreText.textContent = `You scored ${score} out of ${shuffledQuestions.length}.`;
  elements.review.innerHTML = "";

  shuffledQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.answer;
    const card = document.createElement("article");
    card.className = "review-item";

    card.innerHTML = `
      <p><strong>Q${index + 1}.</strong> ${question.question}</p>
      <p>Your answer: <span class="${isCorrect ? "ok" : "bad"}">${userAnswer === null ? "Not answered" : question.options[userAnswer]}</span></p>
      <p>Correct answer: <span class="ok">${question.options[question.answer]}</span></p>
    `;

    elements.review.appendChild(card);
  });

  elements.quizBody.classList.add("hidden");
  elements.controls.classList.add("hidden");
  elements.results.classList.remove("hidden");
  elements.progress.textContent = `Completed ${shuffledQuestions.length} of ${shuffledQuestions.length}`;
}

function nextQuestion() {
  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    finishQuiz();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

elements.nextBtn.addEventListener("click", nextQuestion);
elements.prevBtn.addEventListener("click", prevQuestion);
elements.restartBtn.addEventListener("click", initQuiz);

initQuiz();
