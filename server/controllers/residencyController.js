import expressAsyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";
import e from "express";

//create residency

export const createResidency = expressAsyncHandler(async (req, res) => {
   const { 
    title,
    description,
    price, 
    address, 
    country,
    city, 
    facilities,
    image,
    userEmail,
} = req.body.data;

console.log(req.body.data);

try {
    const residency = await prisma.residency.create({
        data: {
            title,
            description,
            price, 
            address, 
            country,
            city, 
            facilities,
            image,
            owner: {connect: {email: userEmail}},
        },
    });
    res.send({message: "Residency Created",residency });
} catch (err) {
    if(err.code === "P2002"){
        throw new Error("Residency already exists");
    }
    throw new Error(err.message);
    }
});

//get all residencies

export const getAllResidencies = expressAsyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    res.send(residencies);
});


//get residency by id

export const getResidencyById = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try{
        const residency = await prisma.residency.findUnique({
            where: {id},
        });
        res.send(residency);
    }catch(err){
        throw new Error(err.message);
    }
});