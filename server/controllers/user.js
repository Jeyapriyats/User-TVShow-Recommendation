import User from '../models/user.js';

export const readUser = async (req, res) => {
try {
    console.log("Inside Read on server");
const user = await User.find();
res.status(200).json(user);

} catch (error) {
res.status(404).json({ message: error.message });
}
}
 
export const updateShow = async(req,res)=>{
    console.log("Inside update")
            User.findOneAndUpdate({name:req.body.name}, {$push: {shows:req.body.id}}, {upsert: true}, function(err,doc) {
              if (err) { throw err; }
              else { 
                  console.log("Updated",doc);
                  res.status(200).json(doc); }
            });       
    }

export const createUser = async (req, res) => {
const user = new User(req.body);
try {
await user.save();
res.status(201).json(user);

} catch (error) {
res.status(409).json({ message: error.message })
}
}



