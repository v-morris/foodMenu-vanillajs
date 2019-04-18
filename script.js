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
            `
            <button id="breakfastBurrito" type="button" class="btn btn-variant option">Breakfast Burrito</button> 
            <button id="scrambledEggs" type="button" class="btn btn-variant option">Scrambled Eggs</button>
            <button class="btn btn-back back" onclick="toMeals()">Back to Meals</button>`

    } else if (meal.selectedMeal === "lunch") {
        document.getElementById('meal-container').innerHTML =
            `
            <button id="chickenStrips" type="button" class="btn btn-variant option">Chicken Strips</button>
            <button id="pasta" type="button" class="btn btn-variant option">Pasta</button>
            <button class="btn btn-back back" onclick="toMeals()">Back to Meals</button>`

    } else if (meal.selectedMeal === "dinner") {
        document.getElementById('meal-container').innerHTML =
            `
        <button id="roastBeef" type="button" class="btn btn-variant option">Roast Beef</button>
        <button id="nyStrip" type="button" class="btn btn-variant option">NY Strip</button>
        <button class="btn btn-back back" onclick="toMeals()">Back to Meals</button>`
    } else if (meal.selectedMeal === "appetizers") {
        document.getElementById('meal-container').innerHTML =
            `
        <button id="mozzarellaSticks" type="button" class="btn btn-variant option">Mozzarella Sticks</button>
        <button id="friedZuchinni" type="button" class="btn btn-variant option">Fried Zuchinni</button>
        <button class="btn btn-back back" onclick="toMeals()">Back to Meals</button>`
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
        ul.innerHTML = `<h2>Order</h2>` + itemList;
    }
    console.log("count", counts);
}

function addToOrder(e) {
    meal.selectedItems = e.target.innerHTML;
    itemCount(e);
}

function toMeals() {
    document.getElementById('meal-container').innerHTML =
        `<button id="breakfast" type="button" class="btn btn-variant option-meal" value="breakfast">Breakfast</button>
        <button id="lunch" type="button" class="btn btn-variant option-meal" value="lunch">Lunch</button>
        <button id="dinner" type="button" class="btn btn-variant option-meal" value="dinner">Dinner</button>
        <button id="appetizers" type="button" class="btn btn-variant option-meal" value="appetizers">Appetizers</button>`
    for (let item of mealSelector) {
        item.addEventListener("click", setMeal);
    }
}