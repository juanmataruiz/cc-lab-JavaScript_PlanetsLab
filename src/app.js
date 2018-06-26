const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanet = require('./views/select_planet.js')
const DisplayPlanet = require('./views/display_planet.js')


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const planetMenuItems = document.querySelectorAll('.planet-menu-item');
  const selectPlanet = new SelectPlanet(planetMenuItems);
  selectPlanet.bindEvents();

  const planetDetails = document.querySelector('.planet-details');
  const displayPlanet = new DisplayPlanet(planetDetails);
  displayPlanet.bindEvents();
});
