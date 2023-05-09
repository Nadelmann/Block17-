//1. Clean the coffee_data.js file.
// All prices should be numbers.
// All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.
const coffeeMenu = require ("./coffee_data.js");
// 2. Print an array of all the drinks on the menu.
console.log('Drink Menu:');
coffeeMenu.forEach((coffeeMenu) => 
    (console.log(coffeeMenu.name)));

// 3. Print an array of drinks that cost 5 and under.
console.log("Drinks under $5 or less:");
const cheapDrinks = coffeeMenu.filter(price => price <= 5);
console.log(cheapDrinks);
// 4. Print an array of drinks that are priced at an even number.
console.log("Even-priced drinks:")
const evenPrice = coffeeMenu.filter(price => price % 2 === 0);
console.log(evenPrice);
// 5. Print the total if you were to order one of every drink.
console.log("Total of every drink:")
const totalDrinks = coffeeMenu.reduce((total, drink) => {
    return total + drink.price
}, 0)
console.log(totalDrinks)
// 6. Print an array with all the drinks that are seasonal.
console.log('Seasonal Drinks:')
const seasonalDrinks = coffeeMenu.filter(seasonal => {
    if (seasonal === true) {
        return seasonalDrinks
    } 
})
console.log(seasonalDrinks)
// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans.
console.log(seasonalDrinks + "with imported beans")