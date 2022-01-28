function validar(){
    
var nombre,apellido,ntarjeta,fecha,fecha2,codigo,reserva;
nombre= document.getElementById("nombre").value;
apellido= document.getElementById("apellido").value;
ntarjeta= document.getElementById("ntarjeta").value;
fecha= document.getElementById("fecha").value;
fecha2= document.getElementById("fecha2").value;
codigo= document.getElementById("codigo").value;

expresionfecha= /^\d{2}$/;
expresioncodigo= /^\d{3}$/;
expresionnombreusuario= /^[a-zA-Z]/;
expresiontarjeta= /^\d{16}$/;

    if(!expresionnombreusuario.test(nombre)){
    alert("Nombre no valido");
    return false;
    }
    if(!expresionnombreusuario.test(apellido)){
        alert("Apellido no valido");
        return false;
        }
    if(!expresiontarjeta.test(ntarjeta)){
        alert("La tarjeta debe contener 16 digitos");
        return false;
    }
    if(!expresionfecha.test(fecha)){
    alert("La fecha tiene que ser numerica");
        return false;
    }
    if(!expresionfecha.test(fecha2)){
        alert("La fecha tiene que ser numerica");
        return false;
        }
    
    if(!expresioncodigo.test(codigo)){
        alert("El codigo debe contener 3 digitos");
        return false;
    }

}