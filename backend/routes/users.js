import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js";

const router = express.Router()

//get a user

router.get("/",async(req,res)=>{

    const userId = req.query.userId
    const username = req.query.username

    try{
        const user = userId
        ? await User.findById(userId)
        : await User.findOne({username:username})

        const {password,updatedAt,createdAt,...other} = user._doc
        res.status(200).json(other)
    }catch(err){
        res.status(500).json(err)
    }
})

// update user

router.put("/:id",async(req,res)=>{

    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                req.body.password = await bcrypt.hashSync(req.body.password,10);
            }catch(err){
                res.status(500).json(err)
            }   
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body,})
            res.status(200).json("Account updated successfully")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can update only your account")
    }
})


//delete user
router.delete("/:id",async(req,res)=>{

    if(req.body.userId === req.params.id || req.body.isAdmin){

        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account deleted successfully")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can delete only your account")
    }
})

// follow a user

router.put("/:id/follow", async(req,res)=>{

    if(req.body.userId !== req.params.id){

        try{
            const user =  await User.findById(req.params.id)
            const currentUSer = await  User.findById(req.body.userId)

            if(!user.followers.includes(req.body.userId)){

                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUSer.updateOne({$push:{following:req.params.id}})

                res.status(200).json("User followed successfully")
            }else{
                res.status(403).json("You already follow the user")
            }
        }catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You cannot follow your own account")
    }
})

//unfollow a user

router.put("/:id/unfollow", async(req,res)=>{

    if(req.body.userId !== req.params.id){

        try{
            const user =  await User.findById(req.params.id)
            const currentUSer = await  User.findById(req.body.userId)

            if(user.followers.includes(req.body.userId)){

                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUSer.updateOne({$pull:{following:req.params.id}})

                res.status(200).json("User unfollowed successfully")
            }else{
                res.status(403).json("You do not follow the user")
            }
        }catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You cannot unfollow your own account")
    }
})

export default router