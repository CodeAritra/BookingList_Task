import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pin: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

export default Form;
