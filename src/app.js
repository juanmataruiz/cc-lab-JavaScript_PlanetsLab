const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanet = require('./views/select_planet.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const planetMenuItems = document.querySelectorAll('.planet-menu-item');
  const selectPlanet = new SelectPlanet(planetMenuItems);
  selectPlanet.bindEvents();
});
