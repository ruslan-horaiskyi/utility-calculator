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
const waterCost       = document.getElementById('water_cost'),
      electricityCost = document.getElementById('electricity_cost'),
      gasCost         = document.getElementById('gas_cost'),
      gasDelivery     = document.getElementById('gas_delivery');

// Water indicators
const previousWater   = document.getElementById('previous_water'),
      currentWater    = document.getElementById('current_water'),
      waterDifference = document.getElementById('water_difference'),
      waterToPay      = document.getElementById('water_toPay'),
      waterCostText   = document.querySelector('.water_cost_text');

// Electricity indicators
const previousElectricity   = document.getElementById('previous_electricity'),
      currentElectricity    = document.getElementById('current_electricity'),
      electricityDifference = document.getElementById('electricity_difference'),
      electricityToPay      = document.getElementById('electricity_toPay');

// Gas indicators
const previousGas   = document.getElementById('previous_gas'),
      currentGas    = document.getElementById('current_gas'),
      gasDifference = document.getElementById('gas_difference'),
      gasToPay      = document.getElementById('gas_toPay');

// Total to paid and save calculation button
const totalToPay      = document.getElementById('total_toPay'),
      saveCalculation = document.getElementById('save_calculation');

// History of indicators
const historyOfIndicators = document.querySelector('.history_of_indicators_div')

// Copyright
const year = document.getElementById("current_year");

year.innerHTML = new Date().getFullYear();
