const Ship = require("../ship");
const Port = require("../port");
const Itinerary = require("../itinerary");

describe("Ship tests", () => {
  let monaco;
  let nice;
  let itinerary;
  let magna;
describe('with ports and an itinerary', () => { 
  // let monaco;
  // let nice;
  // let itinerary;
  // let magna;
  beforeEach(()=>{
     monaco = new Port('monaco');
     nice = new Port('nice');
     itinerary= new Itinerary([monaco,nice])
     magna= new Ship(itinerary)

  })
  it("Ship class can be instantiated", () => {
    expect(magna).toBeInstanceOf(Ship);
  });

  it("Ship has a starting port", () => {
    expect(magna.currentPort.name).toEqual("monaco");
  });

  it("ship can set sail", () => {
    magna.setSail()
    expect(magna.currentPort).toBeFalsy();
    expect(monaco.ships).not.toContain(magna);
  });
    
  it("ship is added to port on istantiation", () => {
    expect(monaco.ships).toContain(magna);
  });

 })

 //outer block
  it("Ships port is instance of Port class ", () => {
    expect(magna.currentPort).toBeInstanceOf(Port);
  });


  it("Ship has previousPort prop null by default", () => {
    const newShip = new Ship(itinerary);
    expect(magna.previousPort).toBeNull();
  });

  it("can't sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError(
      "Cannot sail further. End of itinerary"
    );
  });

  it("ship can dock on different ports", () => {
    const monaco = new Port('monaco');
    const nice = new Port('nice');
    const sampleItinerary= new Itinerary([monaco,nice])
    const magna= new Ship(sampleItinerary)
    magna.setSail()
    magna.dock()
    expect(nice.ships).toContain(magna);
  });




});
