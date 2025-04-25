import mongoose from "mongoose";

const GreetingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        message: { type: String, required: true },
        date: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

const db = mongoose.connection.useDb("miapp");

export default db.models.Greeting || db.model("Greeting", GreetingSchema);
