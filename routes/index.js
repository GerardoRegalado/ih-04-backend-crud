
//importaciones
const express = require("express")
const router = express.Router()


//ruteo
router.get("/", (req,res)=> {
    res.send("hola")
})


//exportacoin

module.exports=router