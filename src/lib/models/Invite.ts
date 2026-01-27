import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface IInvite extends Document {
  slug: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
  events: IEvent[];
  gallery: string[];
  theme: {
    primaryColor: string;
    accentColor: string;
  };
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
});

const InviteSchema = new Schema<IInvite>(
  {
    slug: { type: String, required: true, unique: true },
    brideName: { type: String, required: true },
    groomName: { type: String, required: true },
    weddingDate: { type: String, required: true },
    venue: { type: String, required: true },
    events: [EventSchema],
    gallery: [String],
    theme: {
      primaryColor: { type: String, default: "#E0e0e0" },
      accentColor: { type: String, default: "#e9b234" },
    },
  },
  { timestamps: true },
);

// Prevent overwriting the model if it already exists (Next.js hot reload issue)
const Invite: Model<IInvite> =
  mongoose.models.Invite || mongoose.model<IInvite>("Invite", InviteSchema);

export default Invite;
