function creoID() {
    return parseInt(Math.random() * 10000)
}
// debugger
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:")
    let importe = prompt("Ingrese el importe:")
        productos.push(new Producto(creoID(), nombre, importe))
}

function buscarProducto() {
    // debugger
    let prod = prompt("Ingrese el nombre del producto:")
        if (prod !== "") {
            let resultado = productos.find( p => p.id === prod.toUpperCase())
            console.table(resultado)
        } else {
            console.error("Ingrese un dato válido.")
        }
}

function filtrarProducto() {
    //debugger
    let nom = prompt("Ingrese parte del nombre de los productos a filtrar:")
    //let resultado = productos.filter(p => p.id >= codigo ) //CODIGO
    let resultado = productos.filter(p => p.nombre.includes(nom.toUpperCase()))
        console.table(resultado)
}

function existeProducto() {
    let cod = parseInt(prompt("Ingrese el código de producto:"))
    let existe = productos.some(p => p.id === cod)
        if (existe) {
            console.log("Existe el código de producto")
        } else {
            console.warn("No se encontró el código ingresado")
        }

}


// function calcularCarrito() {
//     debugger
//     console.log("TOTAL DEL CARRITO")
//     let total = carrito.reduce( (acc, c) => acc + c.importe, 0)
// //         console.table(total)
// }



generadorAutomatico()

//FUNCIONES QUE SE USAN PARA LLENAR AUTOMÁTICAMENTE LOS ARRAYS DE OBJETOS A USAR
// debugger
function generadorAutomatico() {
    productos.push(new Producto(id(creoID), nombre = 'STEAK', precio = 2500))
    productos.push(new Producto(id(creoID), nombre = 'TOMAHAWK', precio = 3500))
    productos.push(new Producto(id(creoID), nombre = 'T-BONE', precio = 2460))
    console.table(productos)
}

// function generarCarrito() {
//     carrito.push(new Producto('CHORIZO', 1500))
//     carrito.push(new Producto('LOMO', 2500))
//     carrito.push(new Producto('T-BONE', 1500))

// }

function recorrerArrayProductos() {
    // debugger
    for (let elemento of productos) {
        console.table(elemento)
    }
}
