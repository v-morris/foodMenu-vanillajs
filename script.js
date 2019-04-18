const meal = {
    currentMeal: null,
    order: [],
    get selectedMeal() { return meal.currentMeal },
    set selectedMeal(meal) {
        this.currentMeal = meal;
    },
    get selectedItems() { return meal.order },
    set selectedItems(item) {
        meal.order.push(item);
        console.log(meal.order.sort())
        console.log(item);
    }
}

let mealSelector = document.getElementsByClassName("option-meal");

for (let item of mealSelector) {
    item.addEventListener("click", setMeal);
    console.log(item);
}

function setMeal(e) {
    meal.selectedMeal = e.target.id;
    console.log(meal.selectedMeal);
    if (meal.selectedMeal === "breakfast") {
        document.getElementById('meal-container').innerHTML =
            `<div id="breakfast-container" class="meal-container"> 
            <button id="breakfastBurrito" class="option">Breakfast Burrito</button> 
            <button id="scrambledEggs" class="option">Scrambled Eggs</button>
            <button class="back" onclick="toMeals()">Back to Meals</button></div>`

    } else if (meal.selectedMeal === "lunch") {
        document.getElementById('meal-container').innerHTML =
            `<div id="lunch-container" class="meal-container">
            <button id="chickenStrips" class="option">Chicken Strips</button>
            <button id="pasta" class="option">Pasta</button>
            <button class="back" onclick="toMeals()">Back to Meals</button></div>`

    } else if (meal.selectedMeal === "dinner") {
        document.getElementById('meal-container').innerHTML =
            `<div id="dinner-container" class="meal-container">
        <button id="roastBeef" class="option">Roast Beef</button>
        <button id="nyStrip" class="option">NY Strip</button>
        <button class="back" onclick="toMeals()">Back to Meals</button></div>`
    } else if (meal.selectedMeal === "appetizers") {
        document.getElementById('meal-container').innerHTML =
            `<div id="appetizers-container" class="meal-container">
        <button id="mozzarellaSticks" class="option">Mozzarella Sticks</button>
        <button id="friedZuchinni" class="option">Fried Zuchinni</button>
        <button class="back" onclick="toMeals()">Back to Meals</button></div>`
    }
    let addItem = document.getElementsByClassName("option");
    for (var i = 0; i < addItem.length; i++) {
        addItem[i].addEventListener("click", addToOrder);
    }
}
function itemCount() {
    var item = meal.order;
    var counts = {};
    item.forEach(function (i) {
        if (!counts[i]) {
            counts[i] = 0;
            console.log(counts)
        }
        counts[i] += 1;
    })
    var itemList = '';
    for (let item of Object.keys(counts)) {
        var itemCount = counts[item];
        ul = document.getElementById('order-container');
        itemList = itemList + ' ' + (`<li>${item} : ${itemCount}</li>`);
        ul.innerHTML = itemList;
    }
    console.log("count", counts);
}

function addToOrder(e) {
    meal.selectedItems = e.target.innerHTML;
    itemCount(e);
}

function toMeals() {
    document.getElementById('meal-container').innerHTML =
        `<button id="breakfast" class="option-meal" value="breakfast">Breakfast</button>
        <button id="lunch" class="option-meal" value="lunch">Lunch</button>
        <button id="dinner" class="option-meal" value="dinner">Dinner</button>
        <button id="appetizers" class="option-meal" value="appetizers">Appetizers</button>`
    for (let item of mealSelector) {
        item.addEventListener("click", setMeal);
    }
}