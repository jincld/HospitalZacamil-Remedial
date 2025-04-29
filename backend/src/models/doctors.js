/*
    Fields:
    name
    email
    password
    specialty
*/

import { Schema, model } from "mongoose";

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
    },

    password: {
        type: String,
    },

    specialty: {
      type: String,
    },
    isVerified: {
      type: Boolean
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Doctors", doctorSchema);