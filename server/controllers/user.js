import User from '../models/user.js';
import bcrypt from 'bcryptjs';
var container;
export const register = (req,res,nxt) => {
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
    
    let user = new User ({
        name : req.body.name,
        password : hashedPass

    })
    user.save()
    .then(user => {
        res.json({
            message:'User Added.'
        })
    })
    .catch(error => {
        res.json({
            message:'error occured'
        })
    })
    })
}

export const login = (req,res,next)=> {
    var username = req.body.name
    var password = req.body.password
    
    User.findOne({name:username})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    res.send(user._id)

                }else{
                    res.json({
                        message:'Password wrong!',
                
                    })
                }
            })
        }else{
            res.json({
                message:'no user',
            })
        }
    })
}
export const deleteshows = async(req,res)=>{
        console.log("delete :",req.body.userId)
    User.update({_id:req.body.userId}, {$unset: {shows:1}},true,true)
}

export const updateShow = async(req,res)=>{
    console.log("showId",req.body.id)
    console.log("userId:",req.body.userId)
    if(container.find(e => e === req.body.id)){
            User.findOneAndUpdate({_id:req.body.userId}, {$push: {shows:req.body.id}}, {upsert: true}, function(err,doc) {
              if (err) { throw err; }
              else { 
                  console.log("Updated",doc.shows);
                }
            }); 
        }
         else {
            console.log("Show is Already Recommended!!")
         }      
    }

export const filterShow = async(req,res)=>{
    console.log("Id:",req.body.id)
    container = req.body.container.slice()
    console.log("Container:",container)
    const index = req.body.container.indexOf(req.body.id);
if (index > -1) {
  req.body.container.splice(index , 1);
  console.log("Removal successful")
 
  console.log("After Slicing:",req.body.container)
  res.send(req.body.container)
}
else {
    console.log("Error in deleting")
}

}


