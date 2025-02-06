const sandwich = {
    bread: 'dutch crunch',
    meat: 'tuna',
    cheese: 'swiss',
    topping: ['lecture', 'tomato', 'mustard']
}

let {bread, meat} = sandwich;
bread = 'garlic';
meat = 'turkey';
console.log(bread, meat);

console.log(sandwich.bread, sandwich.meat);