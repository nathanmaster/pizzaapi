const express = require('express');
const app = express();
const port = 3000;

const pizzas = {
  'Margherita': { toppings: ['tomato sauce', 'mozzarella cheese'] },
  'Pepperoni': { toppings: ['tomato sauce', 'mozzarella cheese', 'pepperoni'] },
  'Hawaiian': { toppings: ['tomato sauce', 'mozzarella cheese', 'ham', 'pineapple'] },
  // Add more pizza types and toppings here
};

function getRndPizza() {
  const names = Object.keys(pizzas);
  const index = Math.floor(Math.random() * names.length);
  const pizza = names[index];
  return {
    name: pizza,
    toppings: pizzas[pizza].toppings.slice()
  };
}

app.get(['/', '/echo-pizza'], (req, res) => {
  const pizza = getRndPizza();
  const toppings = pizza.toppings.join(', ');
  const jsonPizza = pizza;

  if (req.accepts('json')) {
    res.json(jsonPizza);
  } else {
    res.send(`Pizza: ${pizza.name}, Toppings: ${toppings}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});