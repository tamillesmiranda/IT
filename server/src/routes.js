const express = require("express");

const routes = express.Router();

const HorarioController = require('./controller/HorarioController')

//Primeira rota
routes.get("/horarios", HorarioController.index);

routes.post("/horarios", HorarioController.store);

routes.get("/horarios/:id", HorarioController.show);

routes.put("/horarios/:id", HorarioController.update);

routes.delete("/horarios/:id", HorarioController.destroy);

//segunda rota

const UserController = require('./controller/UserController')

routes.get("/user", UserController.index);

routes.post("/user", UserController.store);

routes.get("/user/:id", UserController.show);

routes.put("/user/:id", UserController.update);

routes.delete("/user/:id", UserController.destroy);


module.exports = routes;