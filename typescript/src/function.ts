//function createPicture(title,date,size){

//}

// Use Ts Define types from params

type SquareSize = '100x100'|'500x500'

// function createPicture(title:string,date:string,size:SquareSize){
// console.log(title,date,size)
// }

// createPicture('My Birthday','2020-03-10','100x100')


// Paramns Optional

function createPicture(title:string,date?:string,size?:SquareSize){ 

    console.log({title,date,size})

}

createPicture('My Birthday','2020-03-10','100x100')
createPicture('My Birthday','2020-03-10')