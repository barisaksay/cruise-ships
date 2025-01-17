const Ship = require("../ship")

describe('Ship constructor', () => { 

    it('Ship class can be instantiated',()=>{
        expect(new Ship()).toBeInstanceOf(Ship)
    })

    it('Ship class have passengers prop set to 0',()=>{
        expect(new Ship()).toHaveProperty('passengers',0)
    })

    it('addPassengers should increase passengers prop with given arg',()=>{
        let magna= new Ship('Nice')
        magna.addPassengers(3)
        expect(magna.passengers).toBe(3)
    })

 })