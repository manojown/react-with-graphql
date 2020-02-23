import mongoose from 'mongoose';
import career from '../model/career'
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema; 
export default {
   User : mongoose.model('User', { firstName: String ,lastName: String}),
   career : career.CareerSchema,
   Post : mongoose.model('Post', { title: String ,description: String, user: { type: Schema.Types.ObjectId, ref: 'User', required:true }})
}
