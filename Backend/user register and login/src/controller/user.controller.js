import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";


const registerUser = async (req, res) => {

    const { username, email, password } = req.body;

    if ([username, email, password].every((f) => f?.trim() === "")) {
        res.status(400).json({ error: "All fields are required" });
    }

    try {
        const exist = await User.findOne({ email: email });

        if (exist) {
            res.status(400).json({ error: "User already exists" })

        }

        const newuser = await User.create({
            username,
            email,
            password,
        });

        const user = await User.findById(newuser._id)

        if (!user) {
            res.status(400).json({ error: "something is wrong" });
        }


        return res.status(200).json({
            message: "User created successfully",
            data: user,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


const login = async (req, res) => {

    const { email, password } = req.body;

    console.log(password);

    if (!email) {
        res.status(400).json({ error: "email,password not provided" })
    }

    const user = await User.findOne({
        $or: [{ email }]
    })

    if (!user) {
        res.status(404).json({ error: "User not found" })

    }

    const checker = await bcrypt.compare(password, user.password);

    // const check = await user.isPasswordCorrect(password);

    if (!checker) {
        res.status(400).json({ error: "invalid password" })
    }



    return res.status(200).json({ message: "login successful" });
}

export {
    registerUser,
    login
}