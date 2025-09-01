const express = require('express');
const app = express();

app.use(express.json());

// Brancher les routes pizzas
const pizzaRoutes = require('./routes/pizzaRoutes');
app.use('/pizzas', pizzaRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
