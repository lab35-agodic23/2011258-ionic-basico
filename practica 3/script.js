var gastos =[];
var gastos= document.getElementById("gastostxt");
var monto= document.getElementById("montotxt");

function guardarGastos(){
    const nuevoGasto = `${gasto.value} $${monto.value}`;

    gastos.push(nuevoGasto);

    console.log (gastos),

    gasto.value="";
    monto.value="";
}