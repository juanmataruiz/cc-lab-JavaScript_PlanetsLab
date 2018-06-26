const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectPlanet:planetName', (event) => {
    const planetName = event.detail;
    const planet = this.planets.find((currentPlanet) => {
      return currentPlanet.name === planetName;
    })

    PubSub.publish('SolarSystem:planetObject', planet);
  })




};

module.exports = SolarSystem;
