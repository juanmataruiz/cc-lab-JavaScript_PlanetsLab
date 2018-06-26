const PubSub = require('../helpers/pub_sub.js');

const SelectPlanet = function (planetMenuItems) {
  this.planetMenuItems = planetMenuItems;
};

SelectPlanet.prototype.bindEvents = function () {
  this.planetMenuItems.forEach((planetMenuItem) => {
    planetMenuItem.addEventListener('click', (event) => {
      PubSub.publish('SelectPlanet:planetName', event.target.id)
    })
  })

};

module.exports = SelectPlanet;
