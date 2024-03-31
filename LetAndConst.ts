#! /usr/bin/env node

import inquirer from "inquirer";

// Advance Variables = let & Const

let currentBalance = 5000;            // Value can change
const accountNumber = "0312-9114002"; // Value can't changeable
const accountName = "Easy Paisa";     // Value can't changeable
console.log(`${accountNumber}`);      // Output : 0312-9114002 
console.log(`${accountName}`);        // Output : Easy Paisa
console.log(`${currentBalance}`);     // Output : 5000 
// 2500 withdraw
currentBalance = 2500;

console.log(`${currentBalance}`);     // Output : 2500 