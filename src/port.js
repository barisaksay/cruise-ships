(function exportPort() {
  // do stuff here
  class Port {
    constructor(name) {
      this.name = name;
      this.ships=[];
    }
    addShip(ship){
       this.ships.push(ship)
       return this.ships
    }
    removeShip(ship){
      const shipToRemoveIndex=this.ships.indexOf(ship);
      this.ships.splice(shipToRemoveIndex,1)
      return this.ships;
    }  
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}())
