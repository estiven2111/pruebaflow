const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router")
const PORT = 3008;
const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

 server.use("/",router)




server.listen(PORT,()=>{console.log("CONECTADO",PORT)})

module.exports = server;