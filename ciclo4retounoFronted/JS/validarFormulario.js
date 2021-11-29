var email =document.getElementById('email');
var password=document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';
error.style.backgroundColor = 'white';


function enviaFormulario(){
    console.log("enviando formulario");
         
    var mensajesError =[];
    
    if(email.value===null || email.value === ''){
        mensajesError.push('Ingresa tu Correo');
         
    }
    if(password.value===null || password.value === ''){
        mensajesError.push('Ingresa tu password');
        
    }
     error.innerHTML= mensajesError.join(','); 
    return false;
}