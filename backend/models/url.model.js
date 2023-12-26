import mongoose from 'mongoose';

const urls = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: false,
    },
    shortUrl: {
      type: String,
      required: false,
      unique:true
    },
    clickedCount: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Urls = mongoose.model('urls', urls);

export default Urls;