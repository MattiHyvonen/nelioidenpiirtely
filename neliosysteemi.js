import {Nelio} from "./nelio.js";
export {NELION_KOKO} from "./nelio.js";

export function Neliosysteemi() {

  this.neliot = {};

  this.tuotaUusiTunnus = function() {
    for(let i=1;;i++) {
      if(i in this.neliot == false) {
        return i;
      }
    }
  };

  this.haeNelioKohdasta = function(x, y) {
    for (let i in this.neliot) {
      if(this.neliot[i].sijaitseeKohdassa(x,y) ) {
        return this.neliot[i];
      }
    }
    return null;
  };

  this.kohdassaOnNelio = function(x, y) {
    if (this.haeNelioKohdasta(x,y) == null)
      return false;
    else
      return true;
  };

  this.luoNelio = function(x, y) {
    this.neliot[this.tuotaUusiTunnus()] = new Nelio(x,y);
  };
}
