const Port = require('../src/port')

describe('Port class tests', () => { 
    let osaka;
    let magna;
    beforeEach(()=>{
        osaka= new Port('osaka')
        magna=jest.fn() //not using Ship class but mock function.
        osaka.addShip(magna);
    })

    it('Port class can be instantiated',()=>{
        expect(osaka).toBeInstanceOf(Object)
    })

    it('Port has a name',()=>{
        expect(osaka.name).toBe('osaka')
    })


    it('can add a ship to port',()=>{
        expect(osaka.ships).toContain(magna)
    })


    it('can remove a ship from port',()=>{  
        osaka.removeShip(magna);
        expect(osaka.ships).not.toContain(magna)
    })
 
 })