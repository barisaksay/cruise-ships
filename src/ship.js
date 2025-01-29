(function exportShip() {
  // Your code here
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      this.currentPort.addShip(this)
    }
  
    setSail() {
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
  
      if (currentPortIndex === itinerary.ports.length - 1) {
        throw Error("Cannot sail further. End of itinerary");
      }
      this.currentPort.removeShip(this)
      this.previousPort = this.currentPort;
      this.currentPort = null;
    }
  
    dock() {
      const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
      this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  
      this.currentPort.addShip(this)
    }
    
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
