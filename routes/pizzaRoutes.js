const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/PizzaController');

router.get('/', pizzaController.getAll);
router.post('/', pizzaController.create);
router.put('/:id', pizzaController.update);
router.delete('/:id', pizzaController.remove);

module.exports = router;
