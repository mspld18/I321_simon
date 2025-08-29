import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

// Brancher les routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`✅ API running on http://localhost:${port}`);
});
