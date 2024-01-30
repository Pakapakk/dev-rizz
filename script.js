//click effect
const buttons = document.querySelectorAll(".button-yes, .button-no");
buttons.forEach(btn => {btn.addEventListener("click", function(e){
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 800);
    })
    
});

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
    question.innerHTML = "Let's Gooo 🫶🫶";
    question.style.fontSize = "24px";
    sayYes.innerHTML = "Happy Valentine ❤️";
    sayYes.style.fontSize = "24px";
    buttonGroup.style.display = "none";
    confetti();
});
