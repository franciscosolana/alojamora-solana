let form=[];
let formulario=document.getElementById("formulario");
let reset=document.getElementById("reset")
function addCliente(pname,pemail,pcoment){
    let newClient={
      name: pname,
      email: pemail,
      comentario:pcoment
    };
    console.log(newClient);
    form.push(newClient);
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("clientes", JSON.stringify(form));

})

reset.addEventListener("submit",(e)=>{
    localStorage.clear();
} )