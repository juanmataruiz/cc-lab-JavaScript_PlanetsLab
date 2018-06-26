const PubSub = require('../helpers/pub_sub.js');

const DisplayPlanet = function (displayElement) {
  this.displayElement = displayElement;
};

DisplayPlanet.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planetObject', (event) => {
    const planet = event.detail;
    this.render(planet);
  })
};

DisplayPlanet.prototype.render = function (planet) {
  /*
  <table>
    <tr>
      <td>Label</td>
      <td>Data</td>
    </tr>
  </table>
  */

  this.displayElement.innerHTML = '';

  const table = document.createElement('table')
  for (const key in planet) {
    const row = document.createElement('tr');

    const label = document.createElement('td');
    label.textContent = key;

    const data = document.createElement('td');
    data.textContent = planet[key];

    row.appendChild(label)
    row.appendChild(data)
    table.appendChild(row)
  }

  this.displayElement.appendChild(table)

};

module.exports = DisplayPlanet;
