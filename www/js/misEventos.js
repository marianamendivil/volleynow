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
                    "<div class=card><div class=container><h2>Creador:"+childData+"</h2> <h2>Lugar:"+Lugar+"</h2><h2>Fecha:"+Fecha+"</h2><h2>Hora:"+Hora+"</h2> <button class='btn btn-primary' id="+key+">Participar</button><h2>Cupos:"+Cupos+"/12</h2></div></div>";
                }
                
            });
        });
}