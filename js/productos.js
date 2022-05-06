//Constructor de productos
class producto{
    constructor(nombre,precio,cantidad){
        this.nombre=parseInt(nombre);
        this.precio=parseInt(precio);
        this.cantidad=cantidad;
        this.available=true;
    }
}
//contructor de pedido de cliente
class carrito{
    constructor(precio,codigo){
        this.precio=precio;
        this.codigo=parseInt(codigo);
    }
}

//Creo variables en base al constructor
const producto1 = new producto(1,1500,10);
const producto2 = new producto(2,2300,6);
const producto3 = new producto(3,1700,9);
const producto4 = new producto(4,1500,7);
const producto5 = new producto(5,5000,10);
const producto6 = new producto(6,890,3);
const producto7 = new producto(7,2000,5);
const producto8 = new producto(8,1500,20);
const producto9 = new producto(9,3500,8);
//arrays
let arrayProductos=[producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9];
let arrayPedido=[];
//creo variables que uso en subtotal
let totalProductos=0;
let total=0;
//variable utilizada en pedir producto
let check=0;
//funcion que calcula el precio
function subtotal(){
    let i=check-1;
    total=total+arrayProductos[i].precio;
    // alert('Selecciono '+totalProductos+' producto/s y su precio parcial es de '+ total);
}
//funcion que sirve para que el usuario indique el codigo de joya a comprar
function pedirProducto(){
    check = prompt("Ingrese el numero de joya para agregarla a su compra o 10 para terminar la compra")
}
parseInt(check);
//funcion pedido del cliente
function cargarCarrito(precio,codigoProducto){
    const pedido= new carrito(precio,codigoProducto);
    arrayPedido.push(pedido);
}

//Si el usuario ingresa el n°10 es porque termino su compra 
while(check!=10){
    totalProductos++;
    pedirProducto();
    if(check>=1 && check<=9 ){
        let i=check-1;
        cargarCarrito(arrayProductos[i].precio,check);
        subtotal();
    }else if(check==10){
        totalProductos=totalProductos-1;
        for(let b=0; b<arrayPedido.length;b++){
            alert("Eligio la joya N°: "+arrayPedido[b].codigo+" - $"+arrayPedido[b].precio);
        }
        alert("Compro "+totalProductos+ " joyas por un total de $ "+total)
    }else{
        alert("ingreso un numero incorrecto es del 1 al 10")
        totalProductos=totalProductos-1;
    }
    
}