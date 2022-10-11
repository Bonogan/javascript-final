//VARIABLES GENERALES

//FUNCIONES 
let valor =(document.getElementById("cantidad"))
valor.addEventListener("change",(e)=>{
    e.preventDefault()
    calcularValor(valor.value)
})
function calcularValor(dato){
    let de=document.getElementById("de").value;
    let hacia=document.getElementById("hacia").value;
    let resultado = 0;
    //te agregue un ternario para optimizar mas el codigo
    //este si no recibe el numero tiraria el alert, ahi podes usar un sweetAlert
    //en caos de que el valor sea un numero ejecutara la funcion convertir
    isNaN(dato) ? alert("ingrese un numero") : convertir(de,hacia,dato,resultado)
}
function convertir(primerValor,segundoValor,valor,res){
    let dolar= dolarEstadounidence.valor
    let euros = euro.valor
            if(primerValor==1&&segundoValor==2){
            res=valor/dolar;
        }
        else if(primerValor==1&&segundoValor==3){
            res=valor/euros;
        }
        else if(primerValor==2&&segundoValor==1){
            res=valor*dolar;
        }
        else if(primerValor==2&&segundoValor==3){
            res=valor*(dolar/euros);
        }
        else if(primerValor==3&&segundoValor==1){
            res=valor*euros;
        }
        else if(primerValor==3&&segundoValor==2){
            res=valor*(euros/dolar);
        }
        else {
            res=valor;
        }
    document.getElementById("resultado").innerHTML="resultado: $"+ res.toFixed(2);
}

// function Divisa(nombre,valor){
//     this.nombre = nombre;
//     this.valor = valor;
//     }

class Divisa{
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor = valor;
    }
}
let dolarEstadounidence = new Divisa("dolar", 134.26);
let euro = new Divisa ("euro", 139.39)
let pesoArgentino = new Divisa ("peso argentino", 1)



//HTML

let divisa1 = document.getElementsByClassName("divisa1")
let divisa2 = document.getElementsByClassName("divisa2")

// divisa1.onclick = () => {
//     let producto1 ;
// }

//function calculate(){
//    const de = monedaEl_one.value;
//    const hacia = monedaEl_two.value;
//
//   fetch(`https://api.exchangerate-api.com/v4/latest/${de}`)
//   .then(res => res.json() )
//   .then(data => {
//       const taza = data.rates[hacia];
//       
//       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${hacia}`;
//
//       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
//
//    } );
//    
//}