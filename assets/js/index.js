const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rooms: 5,
      m: 500
    }
  ];
//obtener elementos
const contenedorProductos = document.querySelector('.cards')
const cuartos = document.querySelector('#cCuartos')
const desde = document.querySelector('#desde')
const hasta = document.querySelector('#hasta')
const buscar = document.querySelector('#buscar')
const total = document.querySelector('#total')
 
buscar.addEventListener("click", faltaInfo)

mostrarProductos(propiedades)

function mostrarProductos (arreglo1 = propiedades){
  let html = "";
  for(propiedad of arreglo1){
    html +=`
    <div class="card">
      <img src=${propiedad.src} </img>
        <div class="card-info">
            <h4>${propiedad.name}</h5>
            <p>Cuartos: <span>${propiedad.rooms}</span></p>
            <p>Metros: <span>${propiedad.m}</span></p>
            <p>${propiedad.description}</p>
        </div>
      <button>Ver más</button>
    </div>`
  }
contenedorProductos.innerHTML = html
}
 
  function faltaInfo(){
    if(cuartos.value == "" || desde.value == "" || hasta.value == ""){
      alert("Faltan campos por rellenar")
    }
    else{
      filtro()
    }
  }

  function filtro(){
    let arreglo2 = [];
    for(propiedad of propiedades){
      if(cuartos.value == propiedad.rooms && desde.value <= propiedad.m && hasta.value >= propiedad.m){
        arreglo2.push(propiedad);
      }
    }
    total.innerHTML = arreglo2.length
    mostrarProductos (arreglo2)
  }

 