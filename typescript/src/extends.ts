export {}

enum PhotoOrientation{
    landscape,
    portrait,
    square
}
interface Entidad{
    id:number,
    title:string
}
interface Album extends Entidad{
    // Copy
    description:string
}

interface Picture extends Entidad{
    // Copy
    orientation:PhotoOrientation
}

const album:Album={
    id:1,
    title:'afdas',
    description:'fasd'
}

const picture:Picture={
id:12,
title:'sfsadf',
orientation:PhotoOrientation.landscape
}

let newPicture = {} as Picture;
newPicture.id=120
newPicture.orientation=PhotoOrientation.landscape
newPicture.title='fasfsa'

console.log({newPicture,picture,album})