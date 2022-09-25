// parent class
class rectangle{
    constructor(length, width){
        this.length=length;
        this.width=width;
    }

    area(){
        console.log(this.length*this.width);
    }

}


// child class
class square extends rectangle{
    constructor(side){
        super(side, side);
    }
}

//object
let s1=new square(10);
s1.area();