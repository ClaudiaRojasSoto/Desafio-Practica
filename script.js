

function validarFormulario (){
    let inputForm = document.getElementsByClassName("inputForm");
    let bandera = false;
    console.log(inputForm.length);
    const r = /[A-Z]/i;

    for (let i = 0; i < inputForm.length; i++) {

        if(!r.test(inputForm[i].value)){
            let msj = document.createElement('p');
            msj.innerText = "El valor ingresado no es valido";
            inputForm[i].parentNode.append(msj);
            bandera = true;
        }

    }

    if(!bandera){
        document.getElementById('resultado').innerText = "El mensaje se ha enviado correctamente";
    }

}