let order = [];

const meal = {
    currentMeal: null,
    get selectedMeal() { return meal.currentMeal + " get" },
    set selectedMeal(meal) {
        this.currentMeal = meal;
    },
    get selectedItems() { return meal.order },
    set selectedItems(item) {
        order.push(item);
        console.log(order.sort())
        console.log(item);
    }
}

function setMeal(id) {
    meal.selectedMeal = id;
    document.getElementById('meal-container').style.display = "none";
    document.getElementById('breakfast-container').style.display = "block";
    console.log(meal.selectedMeal)
}

function addToOrder(selected) {
    meal.selectedItems = selected;
}

function toMeals(){
    document.getElementById('breakfast-container').style.display = "none";
    document.getElementById('meal-container').style.display = "block";
    meal.selectedMeal = null;
    console.log(meal.selectedMeal)
}

