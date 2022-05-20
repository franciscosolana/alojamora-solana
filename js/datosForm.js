document.querySelector('#btnSaveClient').addEventListener('click', saveClient);

function saveClient(){
var  sName= document.getElementById('fname').value,
     sEmail= document.getElementById('email').value,
     sComent= document.getElementById('message').value;

     addCliente(sName,sEmail,sComent)
}