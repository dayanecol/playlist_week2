import { NextFunction, Request, Response } from "express";
//import { prisma } from "../database/database.js";

export async function validateId ( req:Request, res: Response, next: NextFunction) {
    
    const { id } = req.params;

    if (!id){
        res.status(400).send({ message: "music id is necessary" });
        return;
    }
    next();

    // try {
    //     const music = await connection.query(`
    //     SELECT * FROM
    //     playlist
    //     WHERE
    //     id=$1`,
    //     [id]
    //     );
    //     if (!music.rows[0]){
    //         res.status(404).send({error: "music not found"});
    //         return;
    //     }
    //     next();
    // } catch (error) {
    //     res.status(500).send({ message: error });
    //     return;
    // }

}