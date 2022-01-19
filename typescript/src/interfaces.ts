export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture{
    title:string,
    date:string,orientation:PhotoOrientation
}

// function showPicture(picture:Picture){
//     console.log({picture})
// }

let myPic={
    title:'Test',
    date:'2020-03',
    orientation:PhotoOrientation.Landscape
}

showPicture(myPic)


interface ConfigPicture{
    title?:string,
    date?:string,
    orientation?:PhotoOrientation
}

function showPicture(picture:ConfigPicture){
    let init={title:'Default',date:'2020-10'}
    if(picture.title){
        init.title=picture.title;
    }
    if(picture.date){
        init.date=picture.date
    }
    return init
}

let picture=showPicture({});
console.log({picture})
picture=showPicture({title:'hola'});
console.log({picture})

interface User{
    readonly id:number;
    username:string;
    isPro:boolean;
}

let user:User;
user={id:10,username:'sfasf',isPro:true}
console.log({user})
user.username='wrwrwe';
// user.id=20;
console.log({user})