import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
