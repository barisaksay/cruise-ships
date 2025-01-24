const Port = require('../port')

describe('Port class tests', () => { 
    let osaka= new Port('osaka')

    it('Port class can be instantiated',()=>{
        expect(osaka).toBeInstanceOf(Object)
    })

    it('Port has a name',()=>{
        expect(osaka.name).toBe('osaka')
    })


    it('can add a ship to port',()=>{
        const magna=jest.fn()
        osaka.addShip(magna);
        expect(osaka.ships).toContain(magna)
    })


    it('can remove a ship from port',()=>{
        const magna=jest.fn()
        osaka.addShip(magna)
        osaka.removeShip(magna);
        expect(osaka.ships).not.toContain(magna)
    })
 
 })