import {Hiiri} from "./hiiri.js";
import {NELION_KOKO, Neliosysteemi} from "./neliosysteemi.js";

let N = new NelioidenPiirtely();

const SININEN = "#0000FF";

export function NelioidenPiirtely() {
  this.neliosysteemi = new Neliosysteemi();
  this.hiiri = new Hiiri();
  this.nelioJotaSiirretaan = null;

  this.hiiri.painettiin = function(x, y, nappaimet) {
    if(nappaimet & 1) {
      if(this.neliosysteemi.kohdassaOnNelio(x, y) == false) {
        this.neliosysteemi.luoNelio(x,y);
        this.piirraKaikkiNeliot();
      }
      else {
        this.nelioJotaSiirretaan = this.neliosysteemi.haeNelioKohdasta(x,y);
      }
      this.piirraKaikkiNeliot();
    }
  }.bind(this);


  this.hiiri.vapautettiin = function(x, y) {
    this.nelioJotaSiirretaan = null;
    this.piirraKaikkiNeliot();
  }.bind(this);


  this.hiiri.liikutettiin = function(x, y) {
    if(this.nelioJotaSiirretaan != null)
      this.nelioJotaSiirretaan.siirraKohtaan(x,y);
      this.piirraKaikkiNeliot();
  }.bind(this);


  this.piirraKaikkiNeliot = function() {
    this.tyhjennaPiirtoalue();
    for(let n in this.neliosysteemi.neliot) {
      this.piirraNelio(
        this.neliosysteemi.neliot[n].x,
        this.neliosysteemi.neliot[n].y
      );
    }
  };


  this.piirraNelio = function(x,y) {
    let konteksti = this.haePiirtokonteksti();
    konteksti.fillStyle = SININEN;
    konteksti.fillRect(
      x - NELION_KOKO/2,
      y - NELION_KOKO/2,
      NELION_KOKO,
      NELION_KOKO
    );
  };


  this.tyhjennaPiirtoalue = function() {
    let konteksti = this.haePiirtokonteksti();
    let piirtoalue = this.haePiirtoalue();
    konteksti.clearRect(0, 0, piirtoalue.width, piirtoalue.height);
  };


  this.haePiirtokonteksti = function() {
    return this.haePiirtoalue().getContext("2d");
  };


  this.haePiirtoalue = function() {
    return document.getElementById("piirtoalue");
  };
}
