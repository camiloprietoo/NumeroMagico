function NumeroMagico(){
    var numerosusuarios = new Array();
    localStorage.setItem("nombre",document.getElementById("nombrecompleto").value);
    let nombreus= localStorage.getItem("nombre");

    alert("Bienvenido Al Mejor Juego "+nombreus);

    var numero =Math.floor(Math.random() * (1001 - 1)) + 1;
    for (var i = 0; i <=9; i++) { 
        var numerous=parseInt(prompt("Digita Tu Numero (Si quieres salir del juego digitar el numero 0): "));
        numerosusuarios[i]=numerous;
        localStorage.setItem("numero escogido",numerosusuarios[i]);
    if(numerous==0){
            break;
                }
    if (numerous==numero){
        alert(nombreus+" Has Adivinado el numero correcto el cual es: "+numero);
        break;
        }
    else{
        if(numerous<numero){
            alert(nombreus+" el numero correcto es mayor sigue intentando\n[intento numero: "+(i+1)+"]");
        }
        if(numerous>numero){
            alert(nombreus+" el numero correcto es menor sigue intentando\n[intento numero: "+(i+1)+"]");
        }
       
       
    }

    if(i==9){
        alert(nombreus+" Has perdido todos tus intentos, el numero correcto era: "+ numero);
        alert(nombreus+" Gracias por participar, vuelve a undir el boton InciarJuegoAqui si quiere jugar de nuevo");
        }
      
    }   
}


function carga(){
    let contadorseg=0;
    let contadormin=0;
    let s=document.getElementById("segundos");
    let m=document.getElementById("minutos");
    window.setInterval(function(){
        if (contadorseg==60){
            contadorseg=0;
            contadormin++;
            m.innerHTML=contadormin;
            if(contadormin==0){
                contadormin=0;
            }
        }
        s.innerHTML=contadorseg;
        contadorseg++;
    },1000);

}

setInterval(myTimer,1000);

function myTimer(){
        const d=new Date();
        document.getElementById("demo").innerHTML=d.toLocaleTimeString();
}




