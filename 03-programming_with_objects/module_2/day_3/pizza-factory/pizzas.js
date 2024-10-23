class PizzaFactory {
    constructor() {}

    createPizza(ingredients) {
        if (ingredients.some(item => item === "pineapple"))
            return new HawaiianPizza(ingredients)
        else if (ingredients.some(item => item === "basil"))
            return new MargheritaPizza(ingredients)
        else if (ingredients.some(item => item === "mushroom"))
            return new VeganoPizza(ingredients)
        else
            return new Pizza(ingredients)

    }
}

class Pizza {
    name = "Generic Pizza"
    price = 22.50
    constructor(ingredients) {
        this.ingredients = ingredients
    }

    display() {
        console.log(`${this.name} (${this.price})`)
        for (let i of this.ingredients)
            console.log(` - ${i}`)
    }

    discountPrice() {
        this.price = Math.round(this.price * 0.8)
    }

    getPriceAsCurrency() {
        return `${this.price} kr.`
    }
}

class HawaiianPizza extends Pizza {
    name = "Hawaiian"
    price = 21.50
    constructor(ingredients) {
        super(ingredients)
    }
}

class MargheritaPizza extends Pizza {
    name = "Margherita"
    price = 20.50
    constructor(ingredients) {
        super(ingredients)
    }
}

class VeganoPizza extends Pizza {
    name = "Vegano"
    price = 19.50
    constructor(ingredients) {
        super(ingredients)
    }
}

const pizzaOven = new PizzaFactory()

const first = pizzaOven.createPizza(["mushroom", "red bell pepper", "vegan cheese"])
const second = pizzaOven.createPizza(["pineapple", "ham", "mozzarella"])
const third = pizzaOven.createPizza(["cheddar", "tomato sauce", "basil"])

const pizzas = [first, second, third]

for (let p of pizzas) {
    p.display()
}

first.discountPrice()
first.display()