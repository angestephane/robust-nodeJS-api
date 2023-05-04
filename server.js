const express = require("express");
const connexionDB = require("./src/database/connexion");

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const dotEnv = require("dotenv");
dotEnv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connexionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", require("./src/routes/productRoute"));
app.use("/api/v1/user", require("./src/routes/userRoute"));

// API Documentation
if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get("/", (req, res, next) => {
  res.send("Welcome to my Robust Node.js API");
});

app.use((req, res, next) => {
  res.status(500).send({
    status: 500,
    message: "Désolé un problème sur le server...",
    body: {},
  });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
