const {User} = require('../models');

exports.login=async (req,res,next)=>{
    await User.create({firstName:"sam",lastName:"Akin", email:"email@email.com"});
    return res.send("done")
};