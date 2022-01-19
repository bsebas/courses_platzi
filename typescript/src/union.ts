export {}
// // // 10, '10'
// // let idUser: number | string
// // idUser=10
// // idUser='10';
// // // idUser=[] // error

// // // Search username getting id

// // function getUsernameById(id:number | string){
// //     // Logic
// //     return 'afasfas'
// // }

// // getUsernameById(20);
// // getUsernameById('20')

// Alias

// 10, '10'
type IdUser= number | string
type Username=string
let idUser: IdUser
idUser=10
idUser='10';
// idUser=[] // error

// Search username getting id

function getUsernameById(id:IdUser):Username{
    // Logic
    return 'afasfas'
}

getUsernameById(20);
getUsernameById('20')

type SquareSize='100x100'|'500x500'|'1000x1000';
let smallPicture:SquareSize='1000x1000'