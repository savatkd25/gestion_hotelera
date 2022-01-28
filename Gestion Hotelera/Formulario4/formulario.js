const Nombres= document.getElementById("Nombres")
const Apellidos= document.getElementById("Apellidos")
const País= document.getElementById("País")
const Telefono= document.getElementById("Nombres")
const Fecha= document.getElementById("Nombres")
const Correo= document.getElementById("Nombres")
const Contraseña= document.getElementById("Nombres")


form.addEventListener("submit",  e=>{
    e.preventDefault()
    let warning =""
    let entrar = false 
}
    parrafo.innerHTML = ""
    if(Nombres.value.length <6){
        warning += 'El nombre no es valido <br>'
        entrar = true 
    }
    if(Apellidos.test(Apellidos.value)){
        warning += 'El Apellido no es valido <br>'
        entrar = true 
    }

    if(País.value.test("El pais no es valido")){
        warning += 'El Apellido no es valido <br>'
        entrar = true 
    }

    if(Telefono.value.length <6){
        warning += 'El telefono no es valido <br>'
        entrar = true 

    if(Fecha.value.length <6){
         warning += 'La fecha no es valida <br>'
        entrar = true} 

        if(Edad.value.length <6){
            warning += 'La edad no es valida <br>'
           entrar = true} 

           if(Correo.test(Apellidos.value)){
            warning += 'El correo no es valida <br>'
           entrar = true }
}

}
