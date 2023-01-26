// Utilities price
const waterCost       = document.getElementById('water_cost'),
      electricityCost = document.getElementById('electricity_cost'),
      gasCost         = document.getElementById('gas_cost'),
      gasDelivery     = document.getElementById('gas_delivery');

// Water indicators
const previousWater   = document.getElementById('previous_water'),
      currentWater    = document.getElementById('current_water'),
      waterDifference = document.getElementById('water_difference'),
      waterToPay      = document.getElementById('water_to_pay');

// Electricity indicators
const previousElectricity   = document.getElementById('previous_electricity'),
      currentElectricity    = document.getElementById('current_electricity'),
      electricityDifference = document.getElementById('electricity_difference'),
      electricityToPay      = document.getElementById('electricity_to_pay');

// Gas indicators
const previousGas   = document.getElementById('previous_gas'),
      currentGas    = document.getElementById('current_gas'),
      gasDifference = document.getElementById('gas_difference'),
      gasToPay      = document.getElementById('gas_to_pay');

// Total to paid and save calculation button
const totalToPay      = document.getElementById('total_to_pay'),
      saveCalculationButton = document.getElementById('save_calculation__button');

// History of indicators
const historyOfIndicators = document.querySelector('.history_of_indicators');

let differenceResult = 0;

const inputs = document.querySelectorAll('.input');
for(let input of inputs) {
    input.addEventListener('input', () => {
      getIndicatorsDifference(previousWater, currentWater, waterDifference);
      getIndicatorsToPay(waterToPay, waterCost);
      getIndicatorsDifference(previousElectricity, currentElectricity, electricityDifference);
      getIndicatorsToPay(electricityToPay, electricityCost);
      getIndicatorsDifference(previousGas, currentGas, gasDifference);
      getIndicatorsToPay(gasToPay, gasCost);
      getTotalToPayResult();
    });
}

const getIndicatorsDifference = (previousIndicator, currentIndicator, indicatorDifference) => {
  differenceResult = currentIndicator.value - previousIndicator.value;
  indicatorDifference.value = differenceResult;
}

const getIndicatorsToPay = (indicatorToPay, indicatorCost) => {
  indicatorToPay.value = differenceResult * indicatorCost.value;
}

const getTotalToPayResult = () => {
  totalToPay.value = parseInt(waterToPay.value) + parseInt(electricityToPay.value) + parseInt(gasToPay.value);
}