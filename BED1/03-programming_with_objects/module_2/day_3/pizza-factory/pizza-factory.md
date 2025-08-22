# Pizza Factory
Let's make pizzas! 🍕
 
We need to develop an application that serves pizzas. We have 3 types of pizzas; **Margherita**, **Hawaiian**, and **Vegano**.
A pizza has a name, a price, and most importantly, a list of ingredients 🤤
 
A type of pizza is defined by its **unique**, main ingredient: a margherita has **fresh basil**, a hawaiian has **pineapple**, and a vegano has **mushrooms**. A pizza should have a display function to list its name, price (rounded and formatted as currency, for example, `20.50 kr.`), and all the ingredients, and a pizza should be able to go on discount, decreasing its price by 20%.
 
Any other ingredients can be added to any of the pizzas. You should implement the factory pattern to help with the creation of pizza objects. At runtime, all you should have to provide is a list of ingredients.
 
Price list:
- Margherita: 20.50 kr.
- Hawaiian: 21.50 kr.
- Vegano: 19.50 kr.
 
Consider the following:

```javascript
pizzaOven.createPizza(["mushroom", "red bell pepper", "vegan cheese"]) // Vegano
pizzaOven.createPizza(["pineapple", "ham", "mozzarella"]) // Hawaiian
pizzaOven.createPizza(["cheddar", "tomato sauce", "basil"]) // Margherita
```