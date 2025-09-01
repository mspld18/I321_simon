let pizzas = [
    { id: 1, nom: "Margherita", prix: 8.5, idCategorie: 1 },
    { id: 2, nom: "Reine", prix: 10.0, idCategorie: 2 }
  ];
  
  exports.getAll = (req, res) => {
    res.json(pizzas);
  };
  
  exports.create = (req, res) => {
    const newPizza = req.body;
    newPizza.id = pizzas.length + 1;
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
  };
  
  exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    let pizza = pizzas.find(p => p.id === id);
    if (!pizza) return res.status(404).send("Pizza non trouvée");
    Object.assign(pizza, req.body);
    res.json(pizza);
  };
  
  exports.remove = (req, res) => {
    const id = parseInt(req.params.id);
    pizzas = pizzas.filter(p => p.id !== id);
    res.status(204).send();
  };
  