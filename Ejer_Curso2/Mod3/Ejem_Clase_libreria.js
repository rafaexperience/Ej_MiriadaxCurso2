function Circulo (r){this._r=r;};

Circulo.prototype = {
	radio: function(){return this._r;},
	area: function(){return Math.PI * this._r * this._r;},
	circunferencia: function() {return 2 + Math.PI * this._r;}
}
module.exports = Circulo
