const Ship = require("../ship")

describe('Ship constructor', () => { 
        let magna= new Ship('Nice')

    it('Ship class can be instantiated',()=>{
        expect(magna).toBeInstanceOf(Object)
    })

    it('Ship has a starting port',()=>{
        expect(magna.startingPort).toBe('Nice')
    })

    it('Ship class have passengers prop set to 0',()=>{
        expect(magna).toHaveProperty('passengers',0)
    })

    it('addPassengers should increase passengers prop with given arg',()=>{
        magna.addPassengers(3)
        expect(magna.passengers).toBe(3)
    })

 })