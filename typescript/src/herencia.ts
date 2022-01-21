export {}

enum PhotoOrientation{
    landscape,
    portrait,
    square
}
abstract class Item{

    protected readonly id:number;
    protected title:string;

    constructor(id:number,title:string){
        this.id=id;
        this.title=title
    }
}

class Picture extends Item{
    // Propety
    // #id:number;
    // #title:string;
    static photoOrientation=PhotoOrientation;
    #orientation:PhotoOrientation;
    public constructor(id:number,title:string,orientation:PhotoOrientation){
        super(id,title)
        // this.#id=id
        // this.#title=title;
        this.#orientation=orientation;
    }
    public toString(){
        return {id:this.id,title:this.title,orientation:this.#orientation}
    }

    get getId():number{
        return this.id;
    }

    // set newId(newValue:number){
    //     this.id=newValue
    // }
}

let picture=new Picture(12,'mina',PhotoOrientation.landscape);
console.log(Picture.photoOrientation)
// picture.newId=2
console.log(picture.toString())
console.log(picture.getId)

class Album extends Item{
    // #id:number;
    // #title:string;
    #pictures:Picture[];
    public constructor(id:number,title:string){
        super(id,title)
        // this.#id=id;
        // this.#title=title;
        this.#pictures=[];
    }
    public addPicture(picture:Picture){
        this.#pictures.push(picture);
    }
    public toString(){
        return {id:this.id,title:this.title,orientation:this.#pictures}
    }
}

const album:Album=new Album(1,'The album');
album.addPicture(picture)
console.log(album.toString());