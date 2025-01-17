const Port = require('../port')

describe('Port class tests', () => { 
    let osaka= new Port('osaka')

    it('Port class can be instantiated',()=>{
        expect(osaka).toBeInstanceOf(Object)
    })

    it('Port has a name',()=>{
        expect(osaka.name).toBe('osaka')
    })
 
 })