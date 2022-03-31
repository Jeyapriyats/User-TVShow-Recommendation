import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
name: {
type: String,
required: true
},
password:
{
type: String
} ,
shows:
{
type: Array
}
}, { timestamps: true });
const User = mongoose.model('users', UserSchema)
export default User;