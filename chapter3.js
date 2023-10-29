// Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.
console.log("\nPractice exercise 3.1");
console.log("========================\n")

list = ["Milk", "Bread,", "Apples"];
console.log("Length of shopping List:", list.length);
list[1] = "Bananas";
console.log(list);
/*Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"]*/
console.log("\nPractice exercise 3.2");
console.log("========================\n")

const ShoppingList = [];

ShoppingList.push("Milk", "Bread", "Apples");
console.log(ShoppingList);

const breadIndex = ShoppingList.indexOf("Bread");
ShoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
console.log(ShoppingList);

const lastItem = ShoppingList.pop();
console.log("Last Item:", lastItem);
ShoppingList.sort();
console.log(ShoppingList);

console.log("Index Of Milk", ShoppingList.indexOf("Milk"));

const bananaIndex = ShoppingList.indexOf("Bananas");
ShoppingList.splice(1, bananaIndex, "Carrots", "Lettuce");
console.log(ShoppingList);

const newList = ["Juice", "Pop"];
const List = ShoppingList.concat(newList, newList);
console.log("last index value of Pop:", List.lastIndexOf("Pop"));
console.log(List);

//Practice exercise 3.3
console.log("\nPractice exercise 3.3");
console.log("========================\n")
//1. Create an array containing three values: 1, 2, and 3.
const array = [1, 2, 3];
//2. Nest the original array into a new array three times.
newArray = [array, array, array];
//3. Output the value 2 from one of the arrays into the console.
console.log("Array[0][1]:", newArray[0][1]);
console.log("Array[1][1]:", newArray[1][1]);
console.log("Array[2][1]:", newArray[2][1]);
/*Practice exercise 3.4
1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.

2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console*/
console.log("\n\nPractice exercise 3.4");
console.log("========================\n")

const Car = {
    company: "Honda",
    model: "City",
    wheels: 4,
    mirrors: 6,
    Ismanual: true,
    color: "white",
    forSale: true
};
let property = "color";
Car[property] = "black";
property = "forSale";
Car[property] = false;
console.log("Car Company: ", Car.company);
console.log("Model: ", Car.model);
console.log("Is available for sale: ", Car.forSale);


/*Practice exercise 3.5*/
console.log("\nPractice exercise 3.5");
console.log("========================\n")
// 1. Create an object named people that contains an empty array that is called friends
const People = {friends:[]};
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
const friend1 = {firstName: "Hafsa", lastName: "Imtiaz", ID: 60};
const friend2 = {firstName: "Abiha", lastName: "Arshad", ID: 64};
const friend3 = {firstName: "Maham", lastName: "Khan", ID: 66};
// 3. Add the three friends to the friend array.
People.friends.push(friend1, friend2, friend3);
// 4. Output it to the console.
console.log(People);
/*Practice exercise 3.5*/

// Chapter projects
console.log("\nChapter projects");
console.log("========================\n")
// Manipulating an array
console.log("\nManipulating an array");
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.shift();
// • Add FIRST to the start of the array.
theList.unshift("FIRST");
// • Assign hello World to the fourth item value.
theList[3] = "hello World";
// • Assign MIDDLE to the third index value.
theList[2] = "MIDDLE";
// • Add LAST to the last position in the array.
theList.push("LAST");
// • Output it to the console
console.log(theList);

// Company product catalog
console.log("\nCompany product catalog");
console.log("========================\n");
// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
const inventory = [];
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
const item1 = {
 name: "Laptop",
 model: "Dell",
 cost: 60000,
 quantity: 5
}
const item2 = {
 name: "Mobile",
 model: "android",
 cost: 38000,
 quantity: 12
}
const item3 = {
 name: "Tablet",
 model: "Samsung",
 cost: 45000,
 quantity: 8
}
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
inventory.push(item1, item2, item3);
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.
console.log(inventory);
console.log("Item 3 Quantity:",inventory[2].quantity);
