import mongoose from 'mongoose';

const UpdateSchema = new mongoose.Schema({
  userId: {
    type:String,
    required: true,
  },
  name: {
    type:String,
    required: true,
  },
  accomplish: String,
  blockers: {
    type:String,
    required: true,
  },
  todayTask:{
    type:String,
    required: true,
  },
  handoffs: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Update || mongoose.model('Update', UpdateSchema);