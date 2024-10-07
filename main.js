const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/order-pizza', (req, res) => {
  const { type, toppings } = req.body;

  if (!type) {
    return res.status(400).send('Pizza type is required');
  }

  let responseMessage = `Thank you for ordering a ${type} pizza`;

  if (toppings && toppings.length > 0) {
    const toppingsList = toppings.join(', ');
    responseMessage += ` with ${toppingsList}`;
  }

  res.send(responseMessage);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
