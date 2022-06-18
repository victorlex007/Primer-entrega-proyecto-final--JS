const productos = [
    {id: 1, nombre: "STEAK", precio: 2500},
    {id: 2, nombre: "CHORIZOS", precio: 1600}, 
    {id: 3, nombre: "VACIO", precio: 3100},
    {id: 4, nombre: "LOMO", precio: 2600},
    {id: 5, nombre: "TOMAHAWK", precio: 2400},
    {id: 6, nombre: "T-BONE", precio: 2500}
]
//                   0          1        2           3        4      

class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}