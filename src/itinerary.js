(function exportItinerary() {
  // Your code here
  class Itinerary {
    constructor(ports) {
      this.ports = ports;
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
})();

