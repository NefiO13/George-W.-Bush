//Enhance nav Bar drop down//
document.addEventListener("click", function (event) {
    let dropdown = document.querySelector(".dropdown-menu");
    if (!event.target.closest(".dropdown")) {
        dropdown.classList.remove("show");
    }
});

// Smooth Scrolling Effect
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//Presidency Quiz//
function updateContent() {
    document.getElementById("dynamic-text").innerText = "George H.W. Bush was born in 1924 and served as the 41st U.S. President.";
}
//generate quotes//
function generateQuote() {
    const quotes = [
        "I do not mistrust the future; I do not fear what is ahead.",
        "Read my lips: no new taxes.",
        "America is never wholly herself unless she is engaged in high moral principle."
    ];
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}
//Check Answer for The presidency quiz//
function checkAnswer() {
    const answer = document.getElementById("quiz-answer").value;
    const feedback = document.getElementById("quiz-feedback");
    feedback.innerText = answer == "1989" ? "Correct!" : "Try again.";
}