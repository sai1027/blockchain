//parent class
class shapes{
    constructor(name){
        this.name=name;
        this.volume=0;
    }
    getVolume(){
        console.log(`The volume of ${this.name} is ${this.volume} `);
    }
}

// child class
class cylinder extends shapes{

    constructor(radius , height){
        super("cylinder");

        this.volume=(Math.PI*radius*radius*height).toFixed(4);
    }
}

// child class
class sphere extends shapes{

    constructor(radius){
        super("sphere");

        this.volume=((4/3)*Math.PI*radius**3).toFixed(4);

    }
}

// child class
class cone extends shapes{
    constructor(radius, height){
        super("cone");

        this.volume=(Math.PI*radius*radius*height/3).toFixed(4);
    }
}




let s1=new cylinder(5,4);
s1.getVolume();

let s2=new sphere(5);
s2.getVolume();

let s3=new cone(5,4);
s3.getVolume();



// output 
// The volume of cylinder is 314.1593
// The volume of sphere is 523.5988
// The volume of cone is 104.7198