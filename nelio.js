export const NELION_KOKO = 20;
export function Nelio(x, y) {
  this.x = x;
  this.y = y;
  this.sijaitseeKohdassa = function(x, y) {
    return (
      x > (this.x - NELION_KOKO/2)
      && x < (this.x + NELION_KOKO/2)
      && y > (this.y - NELION_KOKO/2)
      && y < (this.y + NELION_KOKO/2)
    );
  };


  this.siirraKohtaan = function(x,y) {
    this.x = x;
    this.y = y;
  };
}
