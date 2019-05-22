function showperfil(){
    var usuario= document.getElementById("user").value;
    
    var ref = firebase.database().ref('Usuarios/'+usuario);
   
    ref.once('value')
       .then(function(snapshot) {
        document.getElementById("nombreApellido").innerHTML = snapshot.child("Nombre").val()+" "+snapshot.child("Apellido").val();
        document.getElementById("usuarioperfil").innerHTML = usuario;
        document.getElementById("correoperfil").innerHTML = snapshot.child("Correo").val(); 
        document.getElementById("posicionperfil").innerHTML = snapshot.child("Posicion").val();
        var puntualidad = snapshot.child("Puntualidad").val();
        for(var i = 1 ; i <= puntualidad;i++){
            document.getElementById("star"+i).classList.add("checked");
        }
        });

        
}