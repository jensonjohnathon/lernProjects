var tipFactor = 5;
function calcTipFactor(x) {
    switch(x) {
        case 1:
            tipFactor = 4;
            tipCalc();
          break;
        case 2:
            tipFactor = 5;
            tipCalc();
          break;
        case 3:
            tipFactor = 6;
            tipCalc();
          break;
      }
}

var currencySelected = "$"
function currency() {
    var selected = document.getElementById("currencySelected").value;
    switch(selected) {
        case "USD":
            return currencySelected = "$";
            break;
        case "EUR":
            return currencySelected = "€";
            break;
        case "KRW":
            return currencySelected = "₩";
            break;
        default:
            return currencySelected = "$";
    }
}

function tipCalc() {
    var total = document.getElementById("uTotal").value;
    console.log(total)
    var tip = parseInt(Math.round(total * 100)) / this.tipFactor;
    if (Number.isNaN(tip) === false && tip > 0) {
        console.log(Math.round(tip))
        document.getElementById("inputError").innerHTML = "";
        document.getElementById("tipNum").innerHTML = Math.round(parseFloat(tip / 100)) + currency();
        document.getElementById("calcTotal").innerHTML = Math.round(parseFloat(tip / 100)) + parseFloat(total) + currency();
    } else {
        console.log("trig")
        document.getElementById("inputError").innerHTML = "Please enter a Number";
        document.getElementById("tipNum").innerHTML = currency();
        document.getElementById("calcTotal").innerHTML = currency();
    }
}