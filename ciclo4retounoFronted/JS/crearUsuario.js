 
    var usuarios=
        {nombre:"admin",
         email:"usa.co",
         pwd:"123"};
    
    console.log(usuarios);
    

      function crea_registro_usuario()
      {
         document.getElementById("div_isesion").style.display='none';
          document.getElementById("div_adUsuario").style.display='block';
      } 

     function llama_inicia_sesion()
      {
         document.getElementById("div_isesion").style.display='block';
          document.getElementById("div_adUsuario").style.display='none';
      } 
     
      function adicionar_usuario(nombre,correo,pwd)
      {
          let usuario={
             "nombre":nombre,
             "password":correo,
             "pwd":pwd
          };
          
          usuarios.push(usuario);
          console.log(usuarios);
      }
 
   var error = document.getElementById('error');

      function validar_nuevo_usuario()
      {
       var mensajesError =[];
          if(document.getElementById("nombre").value.length<=0)
          { 
             
              alert("nombre no valido");
              document.getElementById("nombre").focus();
              return false;
          }
           else if(document.getElementById("email").value.length<=0)
          {
              alert("correo no valido");
              document.getElementById("email").focus();
              return false;
          } 
          else if(document.getElementById("password").value.length<=0)
          {
              alert("La contraseña es necesaria para continuar?");
              document.getElementById("password").focus();
              return false;
          }
          else if(document.getElementById("password2").value.length<=0)
          {                 

              alert("confirmación no coincidente");
              document.getElementById("password2").focus();
              return false;
          }
          else if(document.getElementById("password").value!= document.getElementById("password").value)
          { 
              alert("Las contraseñas deben ser iguales?");
              document.getElementById("password").focus();
              return false;
          }


             
        return true;

      }
