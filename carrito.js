const carrito__compras= document.getElementById("carrito__compras")
const ver__carrito__compras  =document.getElementById("ver__carrito__compras")
const ver__listado__carrito__compras = document.getElementById("ver__listado__carrito__compras")
const buscar = document.getElementById("buscar")
const mensajetienda  = document.getElementById("titulo")
window.addEventListener("DOMContentLoaded",function() {
  console.log("cargado")
})

window.addEventListener("keyup",function() {
  console.log(buscar.value)
})



setTimeout(() => {
    mensajetienda.innerText="Tienda en linea "
    new TypeIt("#mensaje1", {
        strings:  `Compra hoy y lleva un descuento`,
   }).go();
 
}, 2600);



const ver__producto =[]
const reducir__prodcuto = producto.slice(0,12)
const produto__repetido = new Set(reducir__prodcuto)

produto__repetido.forEach(e =>{
    const lista__productos =document.createElement("div")
    lista__productos.classList.add("lista__productos")
    lista__productos.innerHTML=`
      <img src="${e.images} " alt="" class="imagen__producto">
    <h1 class="titulo__producto">${e.title} </h1>
    <p class="descripcio__producto">${e.description} </p>
    $<span class="precio__producto">${e.price} </span><br>`;
    carrito__compras.append(lista__productos)

    // const audio = document.getElementById("audio")
    // function escchaAudio(){
    //   audio.play()
    // }

    const btnboton =document.createElement("button")
    btnboton.classList.add("btnboton")
    btnboton.innerText="guardar"
    
    lista__productos.append(btnboton)

    btnboton.addEventListener("click" ,()=>{
    
    ver__producto.push(e.images,
    e.title,
    e.price,
    e.description
    
    
);
console.log(ver__producto)
    })
  
})

ver__carrito__compras.addEventListener("click",()=>{
const contenedor__compras = document.createElement("div")
contenedor__compras.classList.add("modal")
contenedor__compras.innerHTML = `<br>   <div class="titulo__contenedor__compras">  <h2 >Productos comprados </h2> 
<div> <a href="" id="cerrar" class"cerrar">x</a>
</div> </div> 
`
carrito__compras.append(contenedor__compras) 

ver__producto.forEach(mod =>{

  const container_modal =document.createElement("div")
  container_modal.classList.add("container__producto__modal")

  container_modal.innerHTML+=`
  <img src="${mod.images} " alt="" class="imagen__modal">
<h1 class="titulo__modal">${mod.title} </h1>
$<span class="precio__modal">${mod.price} </span><br>`
;
console.log(container_modal ,"ja")
contenedor__compras.append(container_modal)

})



const modal = document.querySelector(".modal")
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  const cerrar = document.getElementById("cerrar")

  cerrar.accessKeyLabel("click",function () {
    
    cerrar.close()
  })

  // container_modal.addEventListener(d =>{
  //   const total_precios = document.createElement("footer")
  //   total_precios.classList.add("precios")
  //   total_precios.innerHTML=` ${d.price} +${d.price} </span><br>`
  //   console.log(total_precios)
  // })
  
  })




