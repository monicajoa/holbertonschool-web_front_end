#!/usr/bin/node

let stock = { macbook: 2, iphone: 4 };

function processPayment(itemName) {
  delete stock[itemName];
  console.log('Payment is being processed for item ' + itemName);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log(`Payment is not being processed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] === undefined) callbackError(itemName);
  else callbackPayment(itemName);
}

console.log('');
var itemName = prompt(
  'Please enter the item you would like to purchase (Macbook, iPhone)'
);

if (itemName === 'Macb0ok' || itemName === 'Macbook') itemName = 'macbook';
if (itemName === 'iPhone') itemName = 'iphone';
processOrder(itemName, processPayment, processError);
