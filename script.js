function cortarTexto() 
{
  const cadena = document.getElementById('cadenaString').value;
  const numero = parseInt(document.getElementById('numeroPos').value, 10);
  const nuevaCadena = cadena.slice(0, numero);
  document.getElementById('nuevaCadenaString').innerHTML = nuevaCadena;
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
      resultadoDiv.innerHTML = `<h2>Nombres que comienzan con 'A': ${nombresConA.join(', ')}</h2>`;
    } else 
    {
      resultadoDiv.innerHTML = `<h2>No hay nombres que comiencen con 'A'.</h2>`;
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

  //Calcular edad
  function calcularEdad(fechaNacimiento) 
  {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) 
    {
      edad--;
    }
    return edad;
  }
  
  const nombre = prompt("Ingresa tu nombre:");
  const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");
  const edad = calcularEdad(fechaNacimiento);
  console.log(`Hola ${nombre}, tienes ${edad} años!`);

  //Calculadora de Recaudación
  function calculadoraDeRecaudación() 
  {
    const input = document.getElementById('pedido').value;
    const pedidos = input.split(',');
    let total = 0;
    pedidos.forEach(pedido => {
        const [nombre, monto] = pedido.split(':');
        total += parseFloat(monto);
    });
    document.getElementById('Total').innerHTML = `Total: ${total}`;
  }

  //Reemplazar Palabras
  function reemplazarPalabras() 
  {
    const cadena = document.getElementById('cadena').value;
    const palabra = document.getElementById('palabra').value;
    const reemplazo = document.getElementById('reemplazo').value;
    const nuevaCadena = cadena.split(palabra).join(reemplazo);
    document.getElementById('Reemplazar').innerHTML = nuevaCadena;
  }

  //String con separador
  function stringSeparador() 
  {
    const lista = document.getElementById('lista').value;
    const elementos = lista.split(',');
    const separador = elementos.join(' - ');
    document.getElementById('separador').innerHTML = separador;
  }

  //Yo objeto
  let ciudad = 
  {
    nombre: "Madrid",
    fechaFundacion: "1561",
    poblacion: 3266000,
    extension: "604.3 km²"
  };
  for (const a in ciudad) {
    console.log(`${ciudad[a]}`);
  }