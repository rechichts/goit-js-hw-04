"use strict";

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(inventory, itemName);
};

invokeInventoryOperation('Medkit', inventory.add);
// Invoking action on Medkit

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryOperation('Gas mask', inventory.remove);
// Invoking remove opeartion on Gas mask

console.log(inventory.items); // ['Knife', 'Medkit']