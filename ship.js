class Ship {
    constructor(startingPort) {
        this.startingPort=startingPort;
        this.passengers=0;
    }

    addPassengers(num){
        return this.passengers += num
    }

    setSail(){
        return this.startingPort=null;
    }
}

module.exports= Ship;