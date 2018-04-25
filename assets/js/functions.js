let augmenterMultiplicateur = () => {
    if (score >= 50 && ((score - (50 * multiplicateur) >= 0) && (score - (50 * autoclickLevel) >= 0)) ) {
        bonus1.setAttribute("style", "display:block");
    } else {
        bonus1.setAttribute("style", "display:none");
    }
};
let autoclicker = () => {
    if (score >= ( 500 + (500 * autoclickLevel)) && ((score - (500 + ( 500 * autoclickLevel))) >= 0)) {
        autoButton.setAttribute("style", "display:block");
    } else {
        autoButton.setAttribute("style", "display:none");
    }
};
let autoclickDisplay = () => {
	autoclick = (1 * autoclickLevel);
};
let boostDisplay = () => {
    if (score >= (5000 + (5000 * boostLevel)) && (score - (5000 + (5000 * boostLevel)) >= 0)) {
        boostButton.setAttribute("style", "display:block");
    } else {
        boostButton.setAttribute("style", "display:none");
    }
};
let boostSystem = () => {
    boostInit = true;
};