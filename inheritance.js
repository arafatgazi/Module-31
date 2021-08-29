// create e common class 
class Teammember{
    name;
    designation='studet care for wev dev';
    address;
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
}


class Support extends Teammember{
   time;
   constructor(name,address,time){
    //    super e Teammember er parameter ke call krte hbe  
       super(name,address)
       this.time=time;
   }
    startSession(){
        console.log( this.name,
            'start a support session')
    }

}
class Studentcare{
    name;
    designation='studet care for wev dev';
    address;
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    buildaroutine(student){
        console.log(this.name,'is a care taker for',student);
    }
}
class Neptunedev{
    name;
    designation='studet care for wev dev';
    address;
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    buildaroutine(version){
        console.log(this.name,'is a developer for',version);
    }
}
const amir=new Support('amir khan','bd',10);
const Khan=new Support('Salman khan','dubai');
const care=new  Studentcare('yeasin','India')
console.log(amir);
amir.startSession();