import expressAsyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";


export const createUser = expressAsyncHandler (async (req, res) => {
    console.log("createUser");

    let{email} = req.body;
    
    const userExists = await prisma.user.findUnique({ where: { email: email } });

    if (!userExists) {
        const user = await prisma.user.create({ data: req.body });
        res.send({
            meassage: "User Created",
            user: user
        });
    }
    else res.status(400).send({ message: "User Already Exists" });


});