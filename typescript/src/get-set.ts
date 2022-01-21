export {}

enum PhotoOrientation{
    landscape,
    portrait,
    square
}

class Picture {
    // Propety
    #id:number;
    #title:string;
    #orientation:PhotoOrientation;
    public constructor(id:number,title:string,orientation:PhotoOrientation){
        this.#id=id
        this.#title=title;
        this.#orientation=orientation;
    }
    public toString(){
        return {id:this.#id,title:this.#title,orientation:this.#orientation}
    }

    get id():number{
        return this.#id;
    }

    set newId(newValue:number){
        this.#id=newValue
    }
}

let picture=new Picture(12,'mina',PhotoOrientation.landscape);
picture.newId=2
console.log(picture.toString())
console.log(picture.id)

class Album {
    #id:number;
    #title:string;
    #pictures:Picture[];
    public constructor(id:number,title:string){
        this.#id=id;
        this.#title=title;
        this.#pictures=[];
    }
    public addPicture(picture:Picture){
        this.#pictures.push(picture);
    }
    public toString(){
        return {id:this.#id,title:this.#title,orientation:this.#pictures}
    }
}

const album:Album=new Album(1,'The album');
album.addPicture(picture)
console.log(album.toString());