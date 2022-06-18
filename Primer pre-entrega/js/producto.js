const productos = ["CHORIZOS", "VACIO", "LOMO","T-BONE", "STEAK"]
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