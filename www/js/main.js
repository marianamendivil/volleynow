window.onload = init;
function init() {

    //Navigation
    document.getElementById("loadp").style.display = "block";

    var time = document.getElementById("time");
    setTimeout(()=>{document.getElementById("loadp").style.display = "none"; 
        document.getElementById("initialp").style.display = "block";}, 2000);

    var registroButton = document.getElementById("registroButton");
    registroButton.addEventListener('click', navigate('initialp', 'registrop'));

    var entrar = document.getElementById("entrar");
    entrar.addEventListener('click', function(){
        validar();
        cardsEventos();
    });  

    var crearEvento = document.getElementById("crearEvento");
    crearEvento.addEventListener('click', function(){
        crearevento();
    });

    var crearEventoBackButton = document.getElementById("crearEventoBackButton");
    crearEventoBackButton.addEventListener('click', navigate('nuevoEvento', 'eventosp'));

    var participarBackButton = document.getElementById("participarBackButton");
    participarBackButton.addEventListener('click', navigate('participarp', 'eventosp'));

    var registroBackButton = document.getElementById("registroBackButton");
    registroBackButton.addEventListener('click', navigate('registrop', 'initialp'));

    var crearEventoBtn = document.getElementById("crearEventoBtn");
    crearEventoBtn.addEventListener('click', navigate('eventosp', 'nuevoEvento'));

    var perfilBtn = document.getElementById("perfilBtn");
    perfilBtn.addEventListener('click', function(){navigate('eventosp', 'perfilp')();showperfil()});

    var perfilBackButton = document.getElementById("perfilBackButton");
    perfilBackButton.addEventListener('click', navigate('perfilp','eventosp'));

    var misEventosBtn = document.getElementById("misEventosBtn");
    misEventosBtn.addEventListener('click', function(){navigate('eventosp', 'misEventosP')();listaMisEventos()});

    var misEventosBackButton = document.getElementById("misEventosBackButton");
    misEventosBackButton.addEventListener('click', navigate('misEventosP','eventosp'));

    var salirBtn = document.getElementById("salirBtn");
    salirBtn.addEventListener('click', function(){navigate('eventosp', 'initialp')();document.getElementById("user").value = "";
    document.getElementById("pwd").value = "";});

    //FUNCIONALIDAD

    var registrarse = document.getElementById("registrarse");
    registrarse.addEventListener('click', function(){
        registrar();
    });
  
}

function navigate(actual, next) {
    return function() {
        hide(actual);
        show(next);
    }
}

function show (id) {
        document.getElementById(id).style.display = "block";
    }

function hide (id) {
    document.getElementById(id).style.display = "none";

}

//SIDEBAR
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*function puntoPressed(id) {
    var elemento = document.getElementById(id);
    if (elemento.className.split(' ').length < 2) {
        elemento.className+=' selected';
    }
    else {
        elemento.className = 'punto';
    }
}
*/
function participar(id1){
    console.log(id1);  
    document.getElementById('claveOculta').innerHTML = id1;

    var ref = firebase.database().ref('Eventos/'+id1+'/Jugador');
   
    ref.once('value')
       .then(function(snapshot) {
        var a = snapshot.child("Jugador1").val();
        if(a != null){
            document.getElementById("p1").className+=' selected';
        }
        var b = snapshot.child("Jugador2").val();
        if(b != null){
            document.getElementById("p2").className+=' selected';
        }
        var c = snapshot.child("Jugador3").val();
        if(c != null){
            document.getElementById("p3").className+=' selected';
        }
        var d = snapshot.child("Jugador4").val();
        if(d != null){
            document.getElementById("p4").className+=' selected';
        }
        var e = snapshot.child("Jugador5").val();
        if(e != null){
            document.getElementById("p5").className+=' selected';
        }
        var f = snapshot.child("Jugador6").val();
        if(f != null){
            document.getElementById("p6").className+=' selected';
        }
        var g = snapshot.child("Jugador7").val();
        if(g != null){
            document.getElementById("p7").className+=' selected';
        }
        var h = snapshot.child("Jugador8").val();
        if(h != null){
            document.getElementById("p8").className+=' selected';
        }
        var i = snapshot.child("Jugador9").val();
        if(i != null){
            document.getElementById("p9").className+=' selected';
        }
        var j = snapshot.child("Jugador10").val();
        if(j != null){
            document.getElementById("p10").className+=' selected';
        }
        var k = snapshot.child("Jugador11").val();
        if(k != null){
            document.getElementById("p11").className+=' selected';
        }
        var l = snapshot.child("Jugador12").val();
        if(l != null){
            document.getElementById("p12").className+=' selected';
        }
        });

}

function aceptar(){
    var id = document.getElementById('claveOculta').innerHTML;
    var usuario = document.getElementById('user').value;
   
   
    var ref = firebase.database().ref('Eventos/'+id+'/Jugador');
    ref.once("value")
      .then(function(snapshot) {
        var a = snapshot.child("Jugador1").exists();
        console.log(a);
        var b = snapshot.child("Jugador2").exists();
        console.log(b);
        var c = snapshot.child("Jugador3").exists();
        var d = snapshot.child("Jugador4").exists();
        var e = snapshot.child("Jugador5").exists();
        var f = snapshot.child("Jugador6").exists();
        var g = snapshot.child("Jugador7").exists();
        var h = snapshot.child("Jugador8").exists();
        var i = snapshot.child("Jugador9").exists();
        var j = snapshot.child("Jugador10").exists();
        var k = snapshot.child("Jugador11").exists();
        var l = snapshot.child("Jugador12").exists();
        if(a == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador1' : usuario
            });

            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });

        }
        else if(b == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador2' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(c == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador3' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(d == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador4' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(e == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador5' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(f == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador6' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(g == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador7' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(h == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador8' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(i == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador9' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(j == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador10' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(k == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador11' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else if(l == false){
            var ref1 = firebase.database().ref('Eventos/'+id+'/Jugador');
            ref1.update({
                'Jugador12' : usuario
            });
            var ref = firebase.database().ref('Eventos/'+id);
   
            ref.once('value')
               .then(function(snapshot) {
                var contador = snapshot.val().Cupos;
                contador = contador+1;
                    var ref2 = firebase.database().ref('Eventos/'+id);
                    ref2.update({
                        'Cupos' : contador
                    });
            });
        }
        else{
            window.alert("cancha llena");
        }
    });
   
    navigate('participarp', 'eventosp')();
    cardsEventos();
}