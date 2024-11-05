import { Schema, model, models } from "mongoose";

const certificadosSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

certificadosSchema.index({ name: 1, dni: 1, curso: 1 }, { unique: true });

export default models.Certificados || model("Certificados", certificadosSchema);
