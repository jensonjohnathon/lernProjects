function determineUnit() {
    var selectedUnit;
    for (var unit of units) {
        if (unit.checked) {
            selectedUnit = unit.value;
            break;
        }
    }
    console.log(selectedUnit)
    switch (parseInt(selectedUnit)) {
        case 1:
            unitHeight.textContent = "cm";
            unitWeight.textContent = "kg";
            console.log("Metric")
            break;
        case 703:
            unitHeight.textContent = "inch";
            unitWeight.textContent = "lbs";
            console.log("Imperial");
            selectedUnit = selectedUnit / 10000;
            break;
        default:
            console.log("default")
    }
    return selectedUnit;
}

function calculateBMI(event) {
    event.preventDefault();

    var height = form.querySelector('input[id="height"]').value;
    console.log(height);
    var weight = form.querySelector('input[id="weight"]').value;
    console.log(weight);

    console.log(determineUnit());

    var calcBMI = Math.round(Math.round(weight * Math.round(10000000000 * parseFloat(determineUnit()))) / Math.round(height*100 * height*100)) / 100;
    console.log(calcBMI)
    bmi.textContent = `Form Submitted! Your BMI is: ${calcBMI}`;
}

const form = document.getElementById('form');
const bmi = document.getElementById('bmi');
const unitHeight = document.getElementById('unitHeight');
const unitWeight = document.getElementById('unitWeight');

const units = document.querySelectorAll('input[name="unit"]');

window.addEventListener('load', determineUnit);
form.addEventListener('submit', calculateBMI);