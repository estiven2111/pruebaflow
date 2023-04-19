const {Router} = require("express");

const router = Router();

router.get("/hola",(req,res)=>{
    console.log("first")
    try {
     res.status(200).send("hola comossssssssssssss");
    } catch (error) {
    console.log(error)
    }
})
router.get("/",(req,res)=>{
    console.log("first")
   try {
    res.status(200).send("error fix");
   } catch (error) {
   console.log(error)
   }

})
router.get("/juan",(req,res)=>{
    console.log("first")
   try {
    res.status(200).send("juan");
   } catch (error) {
   console.log(error)
   }

})
module.exports=router;
