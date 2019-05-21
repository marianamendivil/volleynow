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
    });  

    var crearEvento = document.getElementById("crearEvento");
    crearEvento.addEventListener('click', function(){
        crearevento();
        navigate('nuevoEvento','eventosp')();
    });

    var registroBackButton = document.getElementById("registroBackButton");
    registroBackButton.addEventListener('click', navigate('registrop', 'initialp'));

    var crearEventoBtn = document.getElementById("crearEventoBtn");
    crearEventoBtn.addEventListener('click', navigate('eventosp', 'nuevoEvento'));

    var perfilBtn = document.getElementById("perfilBtn");
    perfilBtn.addEventListener('click', navigate('eventosp', 'perfilp'));

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