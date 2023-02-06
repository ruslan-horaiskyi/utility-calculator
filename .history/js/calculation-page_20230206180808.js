// Utilities price
const waterCost   = document.getElementById("water_cost"),
  electricityCost = document.getElementById("electricity_cost"),
  gasCost         = document.getElementById("gas_cost"),
  gasDelivery     = document.getElementById("gas_delivery");

// Water indicators
const previousWater = document.getElementById("previous_water"),
  currentWater      = document.getElementById("current_water"),
  waterDifference   = document.getElementById("water_difference"),
  waterToPay        = document.getElementById("water_to_pay");

// Electricity indicators
const previousElectricity = document.getElementById("previous_electricity"),
  currentElectricity      = document.getElementById("current_electricity"),
  electricityDifference   = document.getElementById("electricity_difference"),
  electricityToPay        = document.getElementById("electricity_to_pay");

// Gas indicators
const previousGas = document.getElementById("previous_gas"),
  currentGas      = document.getElementById("current_gas"),
  gasDifference   = document.getElementById("gas_difference"),
  gasToPay        = document.getElementById("gas_to_pay");

// Total to pay and save calculation button
const totalToPay        = document.getElementById("total_to_pay"),
  saveCalculationButton = document.getElementById("save_calculation__button"),
  calculateButton       = document.getElementById("calculate_button");

// History of indicators
const historyOfIndicators = document.querySelector(".history_of_indicators");

const indicatorInputs = document.querySelectorAll(".indicator_input");
const inputs          = document.querySelectorAll(".input");

const removeDefaultZero = ({ target }) => {
  target.value = target.value > 0 ? target.value : "";
};

for (const input of inputs) {
  input.addEventListener("focus", removeDefaultZero);
}

const emptyValueToZero = ({ target }) => {
  target.value = target.value > 0 ? target.value : target.value = 0;
};

for (const input of inputs) {
  input.addEventListener("blur", emptyValueToZero);
}

for (let input of indicatorInputs) {
  input.addEventListener("input", () => {
    waterDifference.value = Math.abs(
      parseInt(currentWater.value) - parseInt(previousWater.value)
    );

    electricityDifference.value = Math.abs(
      parseInt(currentElectricity.value) - parseInt(previousElectricity.value)
    );

    gasDifference.value = Math.abs(
      parseInt(currentGas.value) - parseInt(previousGas.value)
    );

    if (waterDifference.value >= 0 && waterCost.value > 0) {
      waterToPay.value = parseFloat(
        waterDifference.value * waterCost.value
      ).toFixed(2);
    }
    if (electricityDifference.value >= 0 && electricityCost.value > 0) {
      electricityToPay.value = parseFloat(
        electricityDifference.value * electricityCost.value
      ).toFixed(2);
    }
    if (gasDifference.value >= 0 && gasCost.value > 0) {
      gasToPay.value = parseFloat(gasDifference.value * gasCost.value).toFixed(
        2
      );
    }
  });
}

const setTotalToPay = () => {
  totalToPay.value = parseFloat(
    parseFloat(waterToPay.value) +
    parseFloat(electricityToPay.value) +
    parseFloat(gasToPay.value)
  ).toFixed(2);
}

calculateButton.addEventListener("click", setTotalToPay);
