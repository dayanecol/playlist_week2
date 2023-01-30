import { Music} from "../protocols/Music.js";
import prisma from "../database/database.js";
//import { QueryResult } from "pg";

async function selectAll (){
    //:Promise<QueryResult<Music>>
    //return await connection.query(`SELECT * FROM playlist;`);
    return prisma.playlist.findMany();
    
}

async function selectAlbum (album:string){
    //:Promise<QueryResult<Music>>
    // return await connection.query(`
    // SELECT * FROM 
    // playlist
    // WHERE 
    // album=$1;`,
    // [album]
    // );
    return [];
}

async function insertUnique (music:Music){
    // :Promise<QueryResult>
    const {title, artist, genre, album} = music;
    return prisma.playlist.create(
        {data: music}
    );
    //return await connection.query(
    //     `INSERT INTO 
    //     playlist (title, artist, genre, album)
    //     VALUES
    //     ($1, $2, $3, $4);`,
    //     [title,artist,genre,album]
    // );
}

async function updateUnique (isFavorite:boolean, id:number){
    // :Promise<QueryResult>
    return prisma.playlist.update({
        where:{
            id:id,
        },
        data:{
            favorite: isFavorite,
        }
    });
}

// async function updateUnique (isFavorite:boolean,id:number){
//     // :Promise<QueryResult>
//     // return await connection.query(
//     //     `UPDATE playlist SET favorite= $1 WHERE id= $2;`,
//     //     [isFavorite.isFavorite,id]
//     //     );
    
// }

async function removeUnique (id:number){
    // :Promise<QueryResult>
    // return connection.query(
    //     `DELETE 
    //     FROM playlist 
    //     WHERE id=$1`,
    //     [id]    
    //     );
    return [];
}

export{
    selectAll,
    selectAlbum,
    insertUnique,
    updateUnique,
    removeUnique
}