import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"

const router = express.Router()


// REGISTER USER

router.post("/register", async(req,res)=>{

    try{

        const hash = bcrypt.hashSync(req.body.password,10);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })

        const user = await newUser.save()
        res.status(201).json(user)

    }catch(err){
        res.status(500).json(err)
    }
})

// LOGIN
router.post("/login", async(req,res)=>{

    try{
        const user = await User.findOne({email:req.body.email})

        if(user){
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result){
                    res.status(200).json(user)
                }else{
                    res.status(400).json("incorrect password")
                }
            });
        }else{
            res.status(404).json("User not found")
        } 
    }catch(err){
        res.status.json(err);
    }
    
})

export default router