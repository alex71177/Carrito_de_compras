const carrito__compras= document.getElementById("carrito__compras")
const ver__carrito__compras  =document.getElementById("ver__carrito__compras")
const ver__listado__carrito__compras = document.getElementById("ver__listado__carrito__compras")
let mensajetienda  = document.getElementById("titulo")

setTimeout(() => {
    mensajetienda.innerText="Tienda en linea "
    new TypeIt("#mensaje1", {
        strings:  "Compra hoy y lleva un descuento",
   }).go();
 
}, 2600);



const ver__producto =[]

producto.forEach(e =>{
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
if (btnboton !="") {
    ver__listado__carrito__compras.append( ver__producto) 
}
    console.log("ver compras")

})



