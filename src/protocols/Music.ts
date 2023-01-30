type MusicEntity = {
    id: number,
    favorite?: boolean,
    title: string,
    artist: string, 
    genre: string,
    album: string
}

type Music = Omit<MusicEntity,"id">

type Favorite = {
    isFavorite: boolean
}

export {
    Music,
    MusicEntity,
    Favorite
}