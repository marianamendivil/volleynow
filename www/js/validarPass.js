function validar(){
    var  Usuario = document.getElementById("user").value;
    var Contraseña = document.getElementById("pwd").value;
    
    var ref = firebase.database().ref('Usuarios/'+Usuario);
   if(Usuario!=""){
       if(Contraseña!=""){
            ref.once('value')
            .then(function(snapshot) {
                try{
                var contraseña = snapshot.val().Contraseña;
                var result = JSON.stringify(Contraseña).localeCompare(JSON.stringify(contraseña));

                if(result == 0){
                    //window.alert("usuario y contraseña correcta");
                    navigate('initialp','eventosp')();
                }
                else{
                    window.alert("usuario y contraseña incorrecta");
                }
                }catch{
                    window.alert("usuario y contraseña incorrecta");
                
                }
                });
        }else{
            document.getElementById("pwd").classList.add("alert-danger");
        }
    }else{
        document.getElementById("user").classList.add("alert-danger");
    }
}
