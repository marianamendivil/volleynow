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

function puntoPressed(id) {
    var elemento = document.getElementById(id);
    if (elemento.className.split(' ').length < 2) {
        elemento.className+=' selected';
    }
    else {
        elemento.className = 'punto';
    }
}

function participar(id1){
    console.log(id1);  
    document.getElementById('claveOculta').innerHTML = id1;  
}

function aceptar(){
    var id = document.getElementById('claveOculta').innerHTML;
    var usuario = document.getElementById('user').value;
    var ref = firebase.database().ref('Eventos/'+id+'/Jugador');
    ref.update({
        '' : usuario
    });
    navigate('participarp', 'eventosp')();
}