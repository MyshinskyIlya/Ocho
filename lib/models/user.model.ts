import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        require: true,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
