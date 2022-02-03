// importaciones
const express = require("express")
const app = express()




//middlewares
require("dotenv").config()





//routes
app.use("/", require("./routes/index"))



//servidor
app. listen(process.env.PORT, () => console.log(`servidor activo en ${process.env.PORT}`))