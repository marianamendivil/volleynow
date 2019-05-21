function crearevento(){
    var usuario= document.getElementById("user").value;
    var Hora = document.getElementById("Hora").value;
    var Calendario= document.getElementById("Calendario").value;
    var Lugar= document.getElementById("Lugar").value;
    var Descripcion= document.getElementById("Descripcion").value;
    var Puntualidad= document.getElementById("Puntualidad").value;
    var validar = validarnulos(Hora,Calendario,Lugar,Descripcion,Puntualidad);
    
    if(validar == 0){
        var ref = firebase.database().ref('Eventos/');
        var newPostRef = ref.push();
        newPostRef.set({
        Usuario : usuario,
        Lugar :  Lugar,
        Hora : Hora,
        Calendario : Calendario,
        Cupos : "12",
        Descripcion :  Descripcion,
        Puntualidad : Puntualidad
        });
    }
}

function validarnulos(Hora,Calendario,Lugar,Descripcion,Puntualidad){
    var ver = 0;
    if(Hora==""){
        document.getElementById("Hora").classList.add("alert-danger");
        ver = 1;
    }
    if(Calendario==""){
        window.alert("Seleccione una fehca en el calendario");
        ver = 1;
    }
    if(Lugar==""){
        document.getElementById("Lugar").classList.add("alert-danger");
        ver = 1;
    }
    if(Descripcion==""){
        document.getElementById("Descipcion").classList.add("alert-danger");
        ver = 1;
    }
    if(Puntualidad==""){
        document.getElementById("Puntualidad").classList.add("alert-danger");
        ver = 1;
    }
    return ver;
}