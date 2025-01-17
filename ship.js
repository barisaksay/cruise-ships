class Ship {
    constructor(currentPort) {
        this.currentPort=currentPort;
        this.passengers=0;
        ;
    }

    addPassengers(num){
        return this.passengers += num
    }

    setSail(){
        return this.currentPort=null;
    }

    dock(dockName){
        return this.currentPort=dockName;

    }
}

module.exports= Ship;