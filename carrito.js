const carrito__compras= document.getElementById("carrito__compras")
const ver__carrito__compras  =document.getElementById("ver__carrito__compras")
const ver__listado__carrito__compras = document.getElementById("ver__listado__carrito__compras")
let mensajetienda  = document.getElementById("titulo")

setTimeout(() => {
    mensajetienda.innerText="Tienda en linea "
    new TypeIt("#mensaje1", {
        strings:  `Compra hoy y lleva un descuento`,
   }).go();
 
}, 2600);



const ver__producto =[]
const reducir__prodcuto = producto.slice(0,8)
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
})



