export function Hiiri() {
  this.sijainti = {
    x: 0,
    y: 0
  };

  this.paivitaSijainti = function(tapahtuma) {
    let piirtoalue = document.getElementById("piirtoalue");
    const suorakulmio = piirtoalue.getBoundingClientRect();
    this.sijainti.x = tapahtuma.clientX - suorakulmio.left;
    this.sijainti.y = tapahtuma.clientY - suorakulmio.top;
  };

  this.painettiin = function(x, y, nappaimet) {
    console.log("Painettiin", x, y, nappaimet);
  };
  this.vapautettiin = function(x, y, nappaimet) {
    console.log("Vapautettiin", x, y, nappaimet);
  };
  this.liikutettiin = function(x, y, nappaimet) {};

  piirtoalue.addEventListener("mousedown", (e) => {
    this.paivitaSijainti(e);
    this.painettiin(this.sijainti.x, this.sijainti.y, e.buttons)
  } );

  piirtoalue.addEventListener("mouseup", (e) => {
    this.paivitaSijainti(e);
    this.vapautettiin(this.sijainti.x, this.sijainti.y, e.buttons)
  } );

  piirtoalue.addEventListener("mousemove", (e) => {
    this.paivitaSijainti(e);
    this.liikutettiin(this.sijainti.x, this.sijainti.y, e.buttons)
  } );
}
