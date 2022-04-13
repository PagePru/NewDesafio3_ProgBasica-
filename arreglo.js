
let arreglo = [];

var rango1 = document.getElementById("idRango1");
var rango2 = document.getElementById("idRango2");

var accionBoton  = document.getElementById ("inputButton");
accionBoton.addEventListener("click", generarArreglo);

function generarArreglo(){
    var r1 = (parseInt(rango1.value));
    var r2 = (parseInt(rango2.value));
    // console.log ("r1= "+r1);         // muestra rango 1
    // console.log ("r2= "+r2);         // muestra rango 2
    var correrRango = Math.sign(r1); // Se debe verificar si el signo es negativo

    if (correrRango ==-1){
        var posiciones = (r2+((-1)*r1))+1;
    //    console.log("nuevo r2= "+ r2);   // muestra nuevo rango 2
    }else {
        var posiciones = ((r2-r1)+1);
    }

    for (i=1; i<=posiciones; i++) {
        arreglo.push(r1); 
        r1++;
    }
        console.log (arreglo);
        

    }
        
    

