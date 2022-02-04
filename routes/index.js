
//importaciones
const express = require("express")
const router = express.Router()

const indexController = require("./../controllers/indexController")


//ruteo
router.get("/",indexController.getHome)


//

//exportacoin

module.exports=router