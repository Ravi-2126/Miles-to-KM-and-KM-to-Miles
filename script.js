const toKilometersButton = document.getElementById('toKilometers');
const toMilesButton = document.getElementById('toMiles');

toKilometersButton.addEventListener('click', convertToKilometers);
toMilesButton.addEventListener('click', convertToMiles);

function convertToKilometers() {
    const milesInput = document.getElementById('miles');
    const kilometersInput = document.getElementById('kilometers');
    
    const miles = parseFloat(milesInput.value);
    const kilometers = miles * 1.60934;
    
    kilometersInput.value = kilometers.toFixed(2);
}

function convertToMiles() {
    const kilometersInput = document.getElementById('kilometers');
    const milesInput = document.getElementById('miles');
    
    const kilometers = parseFloat(kilometersInput.value);
    const miles = kilometers / 1.60934;
    
    milesInput.value = miles.toFixed(2);
}
