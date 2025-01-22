class Ship {
    constructor(itinerary) {
        this.itinerary=itinerary;
        this.currentPort=itinerary.ports[0];
        this.previousPort=null;
    }

    setSail(){
        const itinerary=this.itinerary;
        const currentPortIndex= itinerary.ports.indexOf(this.currentPort);

        if(currentPortIndex===(itinerary.ports.length-1)){
            throw Error ('Cannot sail further. End of itinerary')
        }
        this.previousPort=this.currentPort;
         this.currentPort=null;
         
    }

    dock(){
        const previousPortIndex= this.itinerary.ports.indexOf(this.previousPort)
        this.currentPort= this.itinerary.ports[previousPortIndex+1]
    }
}

module.exports= Ship;