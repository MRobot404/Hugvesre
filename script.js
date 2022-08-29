document.getElementById("btn").style.display="none";
function cambiarMensaje1(){
    document.getElementById("loading-message").innerText="Hola..."
}
function cambiarMensaje2(){
    document.getElementById("loading-message").innerText+="se que esto puede parecer mucho,"
}
function cambiarMensaje3(){
    document.getElementById("loading-message").innerText+="hay muchas veces donde, quisiera poder estar para ti..."
}
function cambiarMensaje4(){
    document.getElementById("loading-message2").innerText+="Y abrazarte :( ,"
}
function cambiarMensaje5(){
    document.getElementById("loading-message2").innerText+="aún no puedo teletransportarme :("
}
function cambiarMensaje6(){
    document.getElementById("loading-message2").innerText+=", pero puedo enviarte abrazos a la distancia,"
}
function cambiarMensaje7(){
    document.getElementById("loading-message3").innerText+="Solo debes oprimir el botón, 143"
}
function mostrarboton(){
    document.getElementById("btn").style.display="block";
    document.getElementById("btn").disabled=false;
}
function enviar(){
    location.href="send.html"
}


setTimeout(cambiarMensaje1,2000)
setTimeout(cambiarMensaje2,3000)
setTimeout(cambiarMensaje3,5000)
setTimeout(cambiarMensaje4,8000)
setTimeout(cambiarMensaje5,10000)
setTimeout(cambiarMensaje6,12000)
setTimeout(cambiarMensaje7,14000)
setTimeout(mostrarboton,15000)