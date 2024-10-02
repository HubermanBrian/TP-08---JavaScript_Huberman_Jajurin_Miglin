
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

//letra A  
function mostrarNombresConA() 
{
    let nombresIngresados = document.getElementById("nombres").value;
    let nombresArray = nombresIngresados.split(',').map(nombre => nombre.trim());
    let nombresConA = nombresArray.filter(nombre => nombre.charAt(0).toUpperCase() === 'A');
    let resultadoDiv = document.getElementById("resultado");
    if (nombresConA.length > 0) 
    {
      resultadoDiv.innerHTML = `<p>Nombres que comienzan con 'A': ${nombresConA.join(', ')}</p>`;
    } else 
    {
      resultadoDiv.innerHTML = `<p>No hay nombres que comiencen con 'A'.</p>`;
    }
}

//doble de todo
function duplicarArray(array) 
{
    let nuevoArray = array.map((elemento) => elemento * 2);
    return nuevoArray;
}
  
  let numeros = [1, 2, 3, 4, 5];
  let numerosDuplicados = duplicarArray(numeros);
  console.log(numerosDuplicados);

//triangulos
for (let i = 1; i <= 5; i++) 
{
    console.log("*".repeat(i));
}

//tirando fruta
const frutas = [
    "manzana",
    "banana",
    "naranja",
    "pera",
    "uva",
    "kiwi",
    "mango",
    "sandía",
    "frutilla",
    "durazno",
  ];
  
  console.log("Lista de frutas:");
  frutas.forEach((fruta, a) => 
  {
    console.log(`${a + 1}. ${fruta}`);
  });
  
  const frutaBuscada = prompt("Ingresa una fruta:");
  
  if (frutas.includes(frutaBuscada)) 
  {
    console.log(`Sí, tenemos ${frutaBuscada}!`);
  } else 
  {
    console.log(`No, no tenemos ${frutaBuscada}!`);
  }