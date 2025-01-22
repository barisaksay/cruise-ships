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

module.exports = Port;
