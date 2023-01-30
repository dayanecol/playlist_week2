import { Music} from "../protocols/Music.js";
import prisma from "../database/database.js";

async function selectAll (){
   
    return prisma.playlist.findMany();
    
}

async function selectAlbum (album:string){
    return prisma.playlist.findMany({
        where:{
            album:album,
        }
       });
}

async function insertUnique (music:Music){
    
    return prisma.playlist.create(
        {data: music}
    );
    
}

async function updateUnique (isFavorite:boolean, id:number){
    return prisma.playlist.update({
        where:{
            id:id,
        },
        data:{
            favorite: isFavorite,
        }
    });
}

async function removeUnique (id:number){
    return prisma.playlist.delete({
        where: {
          id:id,
        }
      });
}



export{
    selectAll,
    selectAlbum,
    insertUnique,
    updateUnique,
    removeUnique
}