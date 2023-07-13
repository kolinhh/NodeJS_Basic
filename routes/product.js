const router = require('express').Router();
router.get("/",(req,res,next)=>{
    res.json({msg:"All products"})
});


module.exports=router;
