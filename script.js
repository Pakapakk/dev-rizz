//click effect
function rippleEffect(event) {
    const button = event.target;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
        const question = document.querySelector(".header");
        const sayYes = document.querySelector(".say-yes");
        const buttonGroup = document.querySelector(".button-group");
        
        question.innerHTML = "Let's Gooo 🫶🫶";
        question.style.fontSize = "24px";
        sayYes.innerHTML = "Happy Valentine ❤️";
        sayYes.style.fontSize = "24px";
        buttonGroup.style.display = "none";
        confetti();
        
    }, 200);
}

//no-ecape
const noBtn = document.querySelector(".button-no");
noBtn.addEventListener("mouseover", () => {

    const maxI = window.innerWidth - noBtn.offsetWidth;
    const maxJ = window.innerHeight - noBtn.offsetHeight;

    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth)) % maxI;
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight)) % maxJ;

    //const Finali = i < maxI ? i : maxI;
    //const Finalj = j < maxJ ? j : maxJ;

    noBtn.style.position = "absolute";
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

//yes-letsgo
const yesBtn = document.querySelector(".button-yes");
const question = document.querySelector(".header");
const buttonGroup = document.querySelector(".button-group");
const sayYes = document.querySelector(".say-yes")
yesBtn.addEventListener("click", () => {
    rippleEffect(event);
    /* move this into section before ripple will be out
    question.innerHTML = "Let's Gooo 🫶🫶";
    question.style.fontSize = "24px";
    sayYes.innerHTML = "Happy Valentine ❤️";
    sayYes.style.fontSize = "24px";
    buttonGroup.style.display = "none";
    confetti();
    */
});
