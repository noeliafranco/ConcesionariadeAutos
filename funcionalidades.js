const autos = require("./autos")
let concesionaria = {
    autos: autos,
    buscarAuto:  function(patente){
        return this.autos.find(auto => auto.patente == patente)||null;
    },
    venderAuto: function(patente){
        let resultado = this.buscarAuto(patente);
        if (resultado){
            autos[autos.indexOf(resultado)].vendido=true;
        }
    },
    autosParaLaVenta: function (){
        return autos.filter(auto => auto.vendido == false)
    },
    autos0KM : function () {
        let resultado = this.autosParaLaVenta()
        
        return resultado.filter(auto => auto.km < 100)
    },
    listaDeVentas: function() {
           let ventas = []
  let autosVendidos = this.autos.filter(auto => auto.vendido == true);
    autosVendidos.forEach(function(auto){
      ventas.push(auto.precio);
    });
    return ventas;
  },
    totalDeVentas: function () {
   let ventasTot = this.listaDeVentas();
      let total = ventasTot.reduce (function(acum, num){
      return acum + num
      },0);
      return total;
    },
      puedeComprar:function ( autos, persona)
      {
         if ((autos.precio <= persona.capacidadDePagoTotal) &&((autos.precio / autos.cuotas) <= persona.capacidadDePagoEnCuotas)){
            return true;
         }else{
            return false;
         }
      },
   autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta(autos).filter(auto => this.puedeComprar(auto,persona));
    }
};