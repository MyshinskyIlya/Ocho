"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { userData } from "../types/user.type";

export const createUser = async ({ email, image, name }: userData) => {
    try {
        connectToDB();

        await User.create({
            email,
            image,
            name,
        });
    } catch (error: any) {
        throw new Error("FAILED TO CREATE USERS");
    }
};

export const fetchAllUsers = async () => {
    try {
        connectToDB();

        return User.find();
    } catch (error: any) {
        throw new Error("FAILED TO FETCH ALL USERS");
    }
};

export const fetchUser = async (email: string) => {
    try {
        connectToDB();

        return User.findOne({ email: email });
    } catch (error: any) {
        throw new Error("FAILED TO FETCH USER");
    }
};

export const fetchUserById = async (id: string) => {
    try {
        connectToDB();

        return User.findById(id);
    } catch (error: any) {
        throw new Error("FAILED TO FETCH USER");
    }
};
