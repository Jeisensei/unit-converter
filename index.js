/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const inputField = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function () {
    inputNum = inputField.value;
    lengthEl.innerHTML = `${inputNum} meters = ${(inputNum*3.28084).toFixed(3)} feet | ${inputNum} feet = ${(inputNum/3.28084).toFixed(3)} meters` 
    volumeEl.innerHTML = `${inputNum} liters = ${(inputNum*0.264172).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum/0.264172).toFixed(3)} liters`
    massEl.innerHTML = `${inputNum} kilograms = ${(inputNum*2.20462).toFixed(3)} pounds | ${inputNum} pounds = ${(inputNum/2.20462).toFixed(3)} kilograms`     
})