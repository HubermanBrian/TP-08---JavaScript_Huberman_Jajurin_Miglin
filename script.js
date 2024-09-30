
function cortarTexto()
{
    const formulario = document.getElementById("form");
    formulario.preventDefault();
    const cadenaString = document.getElementById("cadenaString" )
    const numeroPos = parseFloat(document.getElementById("numeroPos"))
    console.log(cadenaString.value)
    console.log(numeroPos.value)

    let nuevaCadenaString = document.getElementById("nuevaCadenaString").value
    nuevaCadenaString.innerHTML = nuevaCadenaString.slice(0,numeroPos)
}

