

/* document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

 function validarFormulario(evento){
     evento.preventDefault();
     var nombre = document.getElementById('nome').value;
     if (nombre.length == 0) {
         alert('El campo nombre esta vacio');
         return;
     }
     var email = document.getElementById('email').value;
     if (email.length == 0) {
         alert('email no es valido');
         return;
     }
     var asunto = document.getElementById('assunto').value;
     if (asunto.length == 0) {
         alert('El campo asunto no puede estar vacio');
         return;
     }
     var mensaje = document.getElementById('mensagem').value;
     if (mensaje.length == 0) {
         alert('debe escribir un mensaje');
         return;
     }
     alert("Mensaje enviado");
     this.submit();
}  */



//agregar  onclick="validarFormulario() en el boton 
function validarFormulario() {
     
    // tomando los valores por id

    var nombre = document.getElementById("nome");
    var email = document.getElementById("email");
    var asunto = document.getElementById("assunto");
    var mensaje = document.getElementById("mensagem");

    //Verificar que el campo no este vacio

    if (nombre.value == "") {
        alert("El nombre no fue informado");
        nombre.focus(); //deja el foco en el campo
        return;  // retorna la funcion y no verifica las otras lineas
    }
    if (email.value == "") {
        alert("El email no fue informado");
        email.focus(); 
        return; 
    }
    if (asunto.value == "") {
        alert("Debe agregar informacion en el campo asunto");
        asunto.focus(); 
        return; 
    }
    if (mensaje.value == "") {
        alert("Por favor escriba un mensaje");
        mensaje.focus(); 
        return; 
    }
    alert("Mensaje enviado");

}  