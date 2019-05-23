function listaMisEventos(){
    var usuario= document.getElementById("user").value;
    
    var query = firebase.database().ref("Eventos").orderByKey();
    query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.child("Usuario").val();
                var equal =  usuario.localeCompare(childData);

                if(equal == 0){
                    var key = childSnapshot.key;
                    var Lugar = childSnapshot.child("Lugar").val();
                    var Fecha = childSnapshot.child("Calendario").val();
                    var Hora = childSnapshot.child("Hora").val();
                    var Cupos = childSnapshot.child("Cupos").val();
                    document.getElementById("adminEventosp").innerHTML+=
                    "<div class=card><div class=container><h3>Creador:"+childData+"</h3> <h3>Lugar:"+Lugar+"</h3><h3>Fecha:"+Fecha+"</h3><h3>Hora:"+Hora+"</h3><h3>Cupos:"+Cupos+"/12</h3></div></div>";
                }
                
            });
        });
}