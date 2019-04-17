let order = [];


const meal = {
    currentMeal: null,
    get selectedMeal() { return meal.currentMeal },
    set selectedMeal(meal) {
        this.currentMeal = meal;
    },
    get selectedItems() { return order },
    set selectedItems(item) {
        order.push(item);
        console.log(order.sort())
        console.log(item);
    }
}


function setMeal(id) {

    meal.selectedMeal = id;

    console.log(meal.selectedMeal);
    if (meal.selectedMeal === "breakfast") {
        document.getElementById('meal-container').innerHTML =
            `<div id="breakfast-container" class="meal-container"> 
            <button id="breakfastBurrito" class="option">Breakfast Burrito</button> 
            <button id="scrambledEggs" class="option"(\'Scrambled Eggs\')">Scrambled Eggs</button>
            <button class="back" onclick="toMeals()">Back to Meals</button></div>`
        console.log(document.getElementById('meal-container').innerHTML)
    } else if (meal.selectedMeal === "lunch") {
        document.getElementById('meal-container').innerHTML =
            `<div id="lunch-container" class="meal-container">
            <button id="chickenStrips" class="option">Chicken Strips</button>
            <button id="pasta" class="option">Pasta</button>
            <button class="back" onclick="toMeals()">Back to Meals</button></div>`
        console.log(document.getElementById('meal-container').innerHTML)
    }
    let addItem = document.getElementsByClassName("option");
    for (var i = 0; i < addItem.length; i++) {
        addItem[i].addEventListener("click", addToOrder);
    }
}

function addToOrder(e) {
    console.log(e.target);
    meal.selectedItems = e.target.innerHTML;
    console.log("meal", meal.selectedItems)
}

function toMeals() {
    let mealContainer = document.getElementsByClassName('meal-container');
    meal.selectedMeal = null;
    document.getElementById('meal-container').innerHTML =
        `<button id="breakfast" class="option" value="breakfast" onclick="setMeal('breakfast')">Breakfast</button>
        <button id="lunch" class="option" value="lunch" onclick="setMeal('lunch')">Lunch</button>
        <button id="dinner" class="option" value="dinner" onclick="setMeal('dinner')">Dinner</button>
        <button id="appetizers" class="option" value="appetizers" onclick="setMeal('appetizers')">Appetizers</button>`
}