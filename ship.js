class Ship {
    constructor(startingPort) {
        this.startingPort=startingPort;
        this.passengers=0;
    }

    addPassengers(num){
        return this.passengers += num
    }
}

module.exports= Ship;