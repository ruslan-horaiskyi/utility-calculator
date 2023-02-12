const calculationForm = document.getElementById("calculation_form");
const TIMEOUT_DELAY = 10 * 60 * 1000;
const TO_PAY_INPUTS = document.querySelectorAll(".to_pay__input");
// Utilities price
const waterCost = document.getElementById("water_cost"),
  electricityCost = document.getElementById("electricity_cost"),
  gasCost = document.getElementById("gas_cost"),
  gasDelivery = document.getElementById("gas_delivery");

// Water indicators
const previousWater = document.getElementById("previous_water"),
  currentWater = document.getElementById("current_water"),
  waterDifference = document.getElementById("water_difference"),
  waterToPay = document.getElementById("water_to_pay");

// Electricity indicators
const previousElectricity = document.getElementById("previous_electricity"),
  currentElectricity = document.getElementById("current_electricity"),
  electricityDifference = document.getElementById("electricity_difference"),
  electricityToPay = document.getElementById("electricity_to_pay");

// Gas indicators
const previousGas = document.getElementById("previous_gas"),
  currentGas = document.getElementById("current_gas"),
  gasDifference = document.getElementById("gas_difference"),
  gasToPay = document.getElementById("gas_to_pay");

// Total to pay and save calculation button
const totalToPay = document.getElementById("total_to_pay"),
  saveCalculationButton = document.getElementById("save_calculation__button"),
  calculateButton = document.getElementById("calculate_button"),
  calculationDate = document.getElementById("calculation_date");

// History of indicators
const historyOfIndicators = document.querySelector(".history_of_indicators");

const indicatorInputs = document.querySelectorAll(".indicator_input");
const inputs = document.querySelectorAll(".input");
const costInputs = document.querySelectorAll(".cost_input");

let indicatorsObject = {
  waterCost: 0,
  electricityCost: 0,
  gasCost: 0,
  water: 0,
  electricity: 0,
  gas: 0,
};

const removeDefaultZero = ({ target }) => {
  target.value = target.value > 0 ? target.value : "";
};

const emptyValueToZero = ({ target }) => {
  target.value = target.value > 0 ? target.value : (target.value = 0);
};

for (const input of inputs) {
  input.addEventListener("focus", removeDefaultZero);
  input.addEventListener("blur", emptyValueToZero);
}

const setIndicatorsDifference = () => {
  waterDifference.value = Math.abs(
    parseInt(currentWater.value) - parseInt(previousWater.value)
  );

  electricityDifference.value = Math.abs(
    parseInt(currentElectricity.value) - parseInt(previousElectricity.value)
  );

  gasDifference.value = Math.abs(
    parseInt(currentGas.value) - parseInt(previousGas.value)
  );
};

for (let input of indicatorInputs) {
  input.addEventListener("input", setIndicatorsDifference);
}

const setIndicatorsToPay = () => {
  if (waterDifference.value >= 0 && currentWater.value > 0) {
    waterToPay.value = parseFloat(
      waterDifference.value * waterCost.value
    ).toFixed(2);
  }
  if (electricityDifference.value >= 0 && currentElectricity.value > 0) {
    electricityToPay.value = parseFloat(
      electricityDifference.value * electricityCost.value
    ).toFixed(2);
  }
  if (gasDifference.value >= 0 && currentGas.value > 0) {
    gasToPay.value = parseFloat(gasDifference.value * gasCost.value).toFixed(2);
  }
};

for (let input of [...costInputs, ...indicatorInputs]) {
  input.addEventListener("input", setIndicatorsToPay);
}

const setTotalToPay = () => {
  for (const input of TO_PAY_INPUTS) {
    if (input.value > 0) {
      totalToPay.value = parseFloat(
        parseFloat(waterToPay.value) +
          parseFloat(electricityToPay.value) +
          parseFloat(gasToPay.value) +
          parseFloat(gasDelivery.value)
      ).toFixed(2);
    }
  }
};

calculateButton.addEventListener("click", setTotalToPay);

calculationDate.valueAsDate = new Date();

// Timeout
const resetTimeout = () => {
  clearTimeout(timeout);
  timeout = setTimeout(afkFunction, TIMEOUT_DELAY);
};

const compareDifference = (obj = {}) => {
  return JSON.stringify(indicatorsObject) === JSON.stringify(obj);
};

const afkFunction = () => {
  const tempObjToCompare = {
    waterCost: waterCost.value,
    electricityCost: electricityCost.value,
    gasCost: gasCost.value,
    water: waterDifference.value,
    electricity: electricityDifference.value,
    gas: gasDifference.value,
  };

  if (compareDifference(tempObjToCompare)) {
    let confirmAction = confirm("Continue your calculation ?");

    if (!confirmAction) {
      calculationForm.reset();
    }
  } else {
    resetTimeout();
  }

  indicatorsObject = { ...tempObjToCompare };
};

let timeout = setTimeout(afkFunction, TIMEOUT_DELAY);
