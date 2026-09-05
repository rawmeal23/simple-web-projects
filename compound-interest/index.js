
const principal = document.getElementById("principal-amount");
const rate = document.getElementById("interest-rate");
const years = document.getElementById("number-of-years");
const frequency = document.getElementById("compound-frequency");

const submit = document.getElementById("submit");

const finalAmount = document.getElementById("final-amount");
const totalInterest = document.getElementById("total-interest");

submit.onclick = function(){

    let p = Number(principal.value);
    let r = Number(rate.value) / 100;
    let n = Number(frequency.value);
    let t = Number(years.value);

    let amount = p * (1 + r / n) ** (n * t);
    let interest = amount - p;

    finalAmount.textContent = "$" + amount.toFixed(2);
    totalInterest.textContent = "$" + interest.toFixed(2);
};
