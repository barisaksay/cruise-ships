const Itinerary = require("../src/itinerary")

describe('Itinerary constructor tests', () => { 
        const nice= jest.fn()
        const monaco=jest.fn()
        const limassol=jest.fn()

    it(("Itinerary class can be instantiated"),()=>{
        expect(new Itinerary([nice,monaco,limassol])).toBeInstanceOf(Itinerary)
    })

    it(("Itinerary has Ports"),()=>{
        const eastMed=new Itinerary([nice,monaco,limassol])
        expect(eastMed.ports).toEqual([nice,monaco,limassol])
    })
 })