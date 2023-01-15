// Header section
const logoImg       = document.querySelector('.logo_img'),
      headerUserbar = document.querySelector('.header_userbar'),
      loginButton   = document.querySelector('.login_button');

// Main page address section
const myAddress     = document.querySelector('.my-address-div'),
      newAddress    = document.querySelector('.new-address-div');

// Main page calculation button
const calculateButton = document.querySelector('.main-content__calculate-card_button');

// Utilities price
const waterCost       = document.querySelector('#water_cost'),
      electricityCost = document.querySelector('#electricity_cost'),
      gasCost         = document.querySelector('#gas_cost'),
      gasDelivery     = document.querySelector('#gas_delivery');

// Water indicators
const previousWater   = document.querySelector('#previous_water'),
      currentWater    = document.querySelector('#current_water'),
      waterDifference = document.querySelector('#water_difference'),
      waterToPaid     = document.querySelector('#water_toPaid');

// Electricity indicators
const previousElectricity   = document.querySelector('#previous_electricity'),
      currentElectricity    = document.querySelector('#current_electricity'),
      electricityDifference = document.querySelector('#electricity_difference'),
      electricityToPaid     = document.querySelector('#electricity_toPaid');

// Gas indicators
const previousGas   = document.querySelector('#previous_gas'),
      currentGas    = document.querySelector('#current_gas'),
      gasDifference = document.querySelector('#gas_difference'),
      gasToPaid     = document.querySelector('#gas_toPaid');

// Total to paid and save calculation button
const totalToPaid     = document.querySelector('#total_toPaid'),
      saveCalculation = document.querySelector('#save_calculation');

// History of indicators
const historyOfIndicators = document.querySelector('.history_of_indicators_div')

// Copyright
const year = document.querySelector("#current_year");

year.innerHTML = new Date().getFullYear();
