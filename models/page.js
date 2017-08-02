import mongoose, { Schema } from 'mongoose';

const PageSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  url: { type: String,  unique: true, required: true},
  createdAt: { type: Date, required: true, default: Date.now },
  userId: { type: Schema.Types.ObjectId, modelName: 'User'}
});

export default mongoose.model('Page', PageSchema);
