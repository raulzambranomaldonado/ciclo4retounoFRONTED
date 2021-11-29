var nombre =document.getElementById('nombre');
var email =document.getElementById('email');
var password=document.getElementById('password');
var password2=document.getElementById('password2');
var error = document.getElementById('error');
error.style.color = 'red';
error.style.backgroundColor = 'white';


function enviaFormulario2(){
 
    console.log("enviando formulario");
         
    var mensajesError =[];

    if(nombre.value===null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
         
    }
    
    if(email.value===null || email.value === ''){
        mensajesError.push('Ingresa tu Correo');
         
    }
    if(password.value===null || password.value === ''){
        mensajesError.push('Ingresa tu password');
        
    }else
 
 if(document.getElementById("password2").value.length<=0)
{                 

    alert("confirme el segundo password");
    document.getElementById("password2").focus();
    return false;
}
else if(document.getElementById("password").value!=document.getElementById("password2").value)
{ 
    alert("Los Password deben ser iguales?");
    document.getElementById("password").focus();
    return false;
}


 
 /*   if(password2.value===null || password2.value === ''){
        mensajesError.push('el password no coincide');
        
    }*/
     error.innerHTML= mensajesError.join(','); 
    return false;

    alert("La cuenta fue creada con exito ?");

}
