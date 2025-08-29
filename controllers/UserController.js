// Simulation d'une "base de données"
let users = [{ id: 1, name: "Alice" }];

// GET /api/users
export const getUsers = (req, res) => {
    res.json(users);
};

// POST /api/users
export const createUser = (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
};
