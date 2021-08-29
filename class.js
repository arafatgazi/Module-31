// class er use ,class name er first word capital letter,class er bithore  kono function likte gele (function) key word lekha lage nah.
class Support{
    name;
    designation='support wev dev';
    address;
    
    // dynamically name add krte chaile nicher code 
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    startSession(){
        console.log( this.name,
            'start a support session')
    }

}
const amir=new Support('amir khan','bd');
const Khan=new Support('Salman khan','dubai');
console.log(amir,Khan);
amir.startSession();