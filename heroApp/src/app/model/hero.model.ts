export class Hero {
    _id:string;
    name:string;
    difficulty:number;
    dps:number;
    avatar:string;

    constructor(name:string = "", difficulty:number = 0, dps:number = 0, avatar:string = "", _id=""){
        this.name = name;
        this.difficulty = difficulty;
        this.dps = dps;
        this.avatar = avatar;
        this._id =_id;
    }
}

