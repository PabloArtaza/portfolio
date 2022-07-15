//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
    {marca: 'CHEVROLET', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
    {marca: 'AUDI', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
    {marca: 'FORD', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
    {marca: 'DODGE', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
    {marca: 'AUDI', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
    ];


    let divCoches = document.getElementById("cards")

    function mostrarAutos() {
      autos.forEach(coches => {
        divCoches.innerHTML += `
    
        <div class="card" style="width: 18rem;">
        <h5 class="card-header text-center"><i class="fas fa-car"></i> ${coches.marca}</h5>
      <div class="card-body text-center">
        <h5 class="card-text">Modelo ${coches.modelo}</h5>
        <h5 class="card-text">Año ${coches.year}</h5>
        Precio ${coches.precio} <br>
        Detalles: <br>
         ${coches.puertas} Puertas , Color ${coches.color}
      </div>
    </div>
        `
      })
    }
    
    mostrarAutos();
    
let filtro = document.getElementById("filtro")
filtro.addEventListener("submit",filter)

function filter(e){
  e.preventDefault();
  
  divCoches.innerHTML=""
  let inputMarca = document.getElementById("valorMarca");
  let marcasAutos =  autos.filter(auto => auto.marca == inputMarca.value.toUpperCase())
    marcasAutos.forEach(marcas => {
      divCoches.innerHTML += `
    
    <div class="card" style="width: 18rem;">
    <h5 class="card-header text-center">
    <i class="fas fa-car">
    </i>  ${marcas.marca}</h5>
    <div class="card-body text-center">
    <h5 class="card-text">Modelo ${marcas.modelo}</h5>
    <h5 class="card-text">Año ${marcas.year}</h5>
    Precio ${marcas.precio} <br>
    Detalles: <br>
     ${marcas.puertas} Puertas , Color ${marcas.color}
  </div>
</div>
    `
  } )
  if(inputMarca.value = ""){
    mostrarAutos()
  }
  
}
