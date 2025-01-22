const Ship = require("../ship")
const Port = require('../port')
const Itinerary = require('../itinerary')


describe('Ship constructor', () => { 
        const nice=new Port('Nice')
        const monaco=new Port('Monaco')
        const limassol=new Port('Limassol')
        const eastMed= new Itinerary([nice,monaco,limassol])
        let magna= new Ship(eastMed)

    it('Ship class can be instantiated',()=>{
        expect(magna).toBeInstanceOf(Ship)
    })

    it('Ship has a starting port',()=>{
        expect(magna.currentPort.name).toEqual('Nice')
    })

    it('Ships port is instance of Port class ',()=>{
        expect(magna.currentPort).toBeInstanceOf(Port)
    })

    it('setSail should modify currentPort prop and set it to null',()=>{
        magna.setSail()
        expect(magna.currentPort).toBeFalsy()
        expect(magna.previousPort).toBe(nice)
    })

    it('dock should modify currentPort prop and set it to passed arg',()=>{
        magna.dock()
        expect(magna.currentPort).toBe(monaco)
    })

    it('Ship has previousPort prop null by default',()=>{
         const newShip= new Ship(eastMed)
        expect(newShip.previousPort).toBeNull()
    })

 })