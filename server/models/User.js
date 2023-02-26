const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: String,
        email: { type: String, required: true, unique: true },
        password: { type: String },
        image: String,
        role: { type: String, enum: ["admin", "user"] },
        sex: { type: String, enum: ["male", "female", "other"] },
        busket: { type: Array, ref: "Busket" }
    },
    {
        timestamps: true
    }
);

module.exports = model("User", schema);
