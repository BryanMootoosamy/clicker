let autoclickLevel = 0;
let autoclick = 0;
let score = 0;
let display = document.getElementById("display");
let button = document.getElementById("click");
let bonusDisplay = document.getElementById("bonus");
let boostInit = false;
let multiplicateur = 1;
let boostLevel = 0;
let scoreDisplay = document.createElement("p");
scoreDisplay.setAttribute("id", "scoreDisplay");
button.innerHTML = "x" + multiplicateur  + " Prochain achat: " + (50*(multiplicateur));
button.addEventListener("click",function(){
    if (boostInit == true) {
		score += ((1 * multiplicateur) * 2);
		scoreDisplay.innerHTML = score;
		augmenterMultiplicateur();
		autoclicker();
		boostDisplay();
		setTimeout(function() {
			boostInit = false;
		}, 30000);
	} else {
		score += (1 * multiplicateur);
		scoreDisplay.innerHTML = score;
		augmenterMultiplicateur();
		autoclicker();
		boostDisplay();
	}
});
display.appendChild(scoreDisplay);
let bonus1 = document.getElementById("multiplier");
let autoButton = document.getElementById("autoclick");
bonusDisplay.appendChild(bonus1);
bonusDisplay.appendChild(autoButton);
let boostButton = document.getElementById("boost");
bonusDisplay.appendChild(boostButton);
autoButton.addEventListener("click",function(){
	if (score - (500 * (autoclickLevel + 1)) >= 0) {
		autoclickLevel++;
		score = score - (500 * autoclickLevel);
		autoButton.setAttribute("style", "display:none");
	} else {
		autoButton.setAttribute("style", "display:none");
	}
});
let interval = window.setInterval(function(){
	autoclickDisplay();
	autoclicker();
	boostDisplay();
	augmenterMultiplicateur();
	score += autoclick;
	scoreDisplay.innerHTML = score;
}, 1000);
bonus1.addEventListener("click", function(){
	if (score -(50 * multiplicateur) >= 0) {
		score = score - (50 * multiplicateur);
		multiplicateur += 1;
		button.innerHTML = "x" + multiplicateur + " Prochain achat: " + (50*(multiplicateur));
		scoreDisplay.innerHTML = score;
		bonus1.setAttribute("style", "display:none");
	} else {
		bonus1.setAttribute("style", "display:none");
	}
});
boostButton.addEventListener("click", function(){
	if (score - (5000 + (5000 * boostLevel)) >= 0) {
		score = score - (5000 + (5000 * boostLevel));
		boostSystem();
		boostLevel++;
	}
});