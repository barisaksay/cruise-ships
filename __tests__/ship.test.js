const Ship = require("../ship")
const Port = require('../port')


describe('Ship constructor', () => { 
        const nice= new Port('Nice')
        let magna= new Ship(nice)

    it('Ship class can be instantiated',()=>{
        expect(magna).toBeInstanceOf(Ship)
    })

    it('Ship has a starting port',()=>{
        expect(magna.currentPort).toEqual(nice)
    })

    it('Ships port is instance of Port class ',()=>{
        expect(magna.currentPort).toBeInstanceOf(Port)
    })

    it('Ship class have passengers prop set to 0',()=>{
        expect(magna).toHaveProperty('passengers',0)
    })

    it('addPassengers should increase passengers prop with given arg',()=>{
        magna.addPassengers(3)
        expect(magna.passengers).toBe(3)
    })

    it('setSail should modify currentPort prop and set it to null',()=>{
        magna.setSail()
        expect(magna.currentPort).toBeFalsy()
    })

    it('dock should modify currentPort prop and set it to passed arg',()=>{
        const venezia= new Port('Venezia')
        magna.dock(venezia)
        expect(magna.currentPort).toBe(venezia)
    })

 })