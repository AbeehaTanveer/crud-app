const express =require("express")
const { createData, GetAllData, DeleteData, updateData, Getone } = require("../controller/controller")
const route=express.Router()



route.post("/create",createData)
route.get("/get",GetAllData)
route.get("/getOne/:id",Getone)
route.delete("/delete/:id",DeleteData)
route.put("/update/:id",updateData)

module.exports={route}