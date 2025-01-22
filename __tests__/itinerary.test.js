const Itinerary = require("../itinerary")
const Port = require('../port')

describe('Itinerary constructor tests', () => { 
        const nice=new Port('Nice')
        const monaco=new Port('Monaco')
        const limassol=new Port('Limassol')

    it(("Itinerary class can be instantiated"),()=>{
        expect(new Itinerary([nice,monaco,limassol])).toBeInstanceOf(Itinerary)
    })

    it(("Itinerary has Ports"),()=>{
        const eastMed=new Itinerary([nice,monaco,limassol])
        expect(eastMed.ports).toEqual([nice,monaco,limassol])
    })

 })