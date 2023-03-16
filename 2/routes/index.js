const experss=require('express');
const User=require('../models/user');
const router = experss.Router();

router.get('/', async(req, res, next)=>{
  try{
    const users=await User.findAll();
    res.render('sequelize', {users});
  }catch(err){
    console.error(err);
    next(err);
  }
});

module.exports=router;