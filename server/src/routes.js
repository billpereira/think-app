const {Router} = require('express');
const AuthController = require('./controllers/AuthController');
const RacfController = require('./controllers/RacfController');

const routes = Router()

routes.post("/api/login",AuthController.login)

routes.post("/api/user/connect",RacfController.connectUser)
routes.post("/api/user/remove",RacfController.removeConnection)
routes.get("/api/user/list",RacfController.listUser)

module.exports = routes