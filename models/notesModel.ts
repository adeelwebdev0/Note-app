import mongoose, { Schema, Document, Model } from "mongoose";

/** 1. Define TypeScript Interface */
export interface INote extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

/** 2. Create Schema */
const noteSchema: Schema<INote> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

// for searching
noteSchema.index({ title: "text", content: "text" });

const Note: Model<INote> = mongoose.model<INote>("Note", noteSchema);

export default Note;
