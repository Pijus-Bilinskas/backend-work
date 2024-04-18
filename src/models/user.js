import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    games: {type: Array, required: true},
});

export default mongoose.model("User", userSchema);