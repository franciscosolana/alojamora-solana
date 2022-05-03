//Funcion para calcular medida de anillo index
function calcularMedida(medida){
    let medidaAnillo=14.64;
    let encontrado=false;
    let i=6;
    while (encontrado===false){
        if(medida<=medidaAnillo){
            encontrado=true;
            alert("Su numero de anillo es " + i);
        }else{
            i++;
            medidaAnillo=(medidaAnillo+0.32)
        }
    }
}
alert("Buscá un anillo que te quede bien");
alert("Medi con una regla el diametro interno del anillo en mm")
let medida=prompt("ingresa el diametro en mm")
if(medida<14.66){
    alert("El valor minimo es 14,66mm")
}else if(medida>23.88){
    alert("El valor maximo es de 23,88mm")
}else{
    calcularMedida(medida);
}

