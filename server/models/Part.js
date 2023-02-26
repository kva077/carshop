const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        article: String,
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        description: String,
        image: String,
        manufacturer: String,
        name: String,
        price: Number,
        stock: { type: String, enum: ["true", "false"] }
    },
    {
        timestamps: true
    }
);

module.exports = model("Part", schema);
