const addForm = document.querySelector('#addForm')

var ProductosJson = [{ "codigo": "502", "producto": "Jamon ahumado" }, { "codigo": "337", "producto": "Tocineta San Isidro" }, { "codigo": "480", "producto": "Jamon Boyacense" }, { "codigo": "130", "producto": "Jamon Ponderosa" }, { "codigo": "308", "producto": "Cabano Ponderosa" }, { "codigo": "79", "producto": "Cervecero Ponderosa" }, { "codigo": "506", "producto": "Salami San Juan" }, { "codigo": "136", "producto": "Cabano San Juan" }, { "codigo": "143", "producto": "Cabano Marsan" }, { "codigo": "57", "producto": "Chorizo Coctel" }, { "codigo": "449", "producto": "Jamón Berna" }, { "codigo": "114", "producto": "Hamburguesa Esperanza" }, { "codigo": "445", "producto": "Mortadela Zenu" }, { "codigo": "333", "producto": "Jamón Pietran" }, { "codigo": "88", "producto": "Jamon Zenu" }, { "codigo": "232", "producto": "Salchicha Ranchera x 18" }, { "codigo": "422", "producto": "Salchicha llanera" }, { "codigo": "423", "producto": "Ranchera x 5" }, { "codigo": "242", "producto": "Salchicha ideal" }, { "codigo": "17", "producto": "Jamón Rica" }, { "codigo": "33", "producto": "Salchicha long x 20" }, { "codigo": "150", "producto": "Salchicha long x 10" }, { "codigo": "239", "producto": "Salchicha Americana x 18" }, { "codigo": "774", "producto": "Salchicha Koleo x 18" }, { "codigo": "442", "producto": "Salchicha Cunit" }, { "codigo": "240", "producto": "Salchicha Americana x 8" }, { "codigo": "134", "producto": "Salchicha Porchi" }, { "codigo": "76", "producto": "Salchicha Filadelfia " }, { "codigo": "329", "producto": "Salchicha HD" }, { "codigo": "420", "producto": "Salchicha de la Mejor" }, { "codigo": "317", "producto": "Chorizo Berna" }, { "codigo": "444", "producto": "Chorizo San Miguel" }, { "codigo": "58", "producto": "Chorizo Nojos" }, { "codigo": "193", "producto": "Tocineta Koleo" }, { "codigo": "29", "producto": "Chorizo Boyacense " }, { "codigo": "75", "producto": "Salchicha Boyacense " }, { "codigo": "285", "producto": "Tocineta Nojos libra " }, { "codigo": "800", "producto": "Tocineta recorte" }, { "codigo": "478", "producto": "Tocineta Nojos Kilo " }, { "codigo": "507", "producto": "Chorizo Mexicano " }, { "codigo": "135", "producto": "Levadura libra" }, { "codigo": "223", "producto": "Bloque de queso" }, { "codigo": "31", "producto": "libra de queso" }, { "codigo": "781", "producto": "Bloque queso Sábana o Amarillo" }, { "codigo": "300", "producto": "Bloque Stelar" }, { "codigo": "153", "producto": "Queso Crema" }, { "codigo": "228", "producto": "Queso Pera x gramo" }, { "codigo": "474", "producto": "Queso Sábana o Amarillo x libra" }, { "codigo": "73", "producto": "Crema Ubate" }, { "codigo": "83", "producto": "Crema Kmilac o San Vilac" }, { "codigo": "82", "producto": "Mantequilla Ubate" }, { "codigo": "323", "producto": "Piña trozos Kilo" }, { "codigo": "74", "producto": "Crema Alquería " }, { "codigo": "112", "producto": "Peperoni libra" }, { "codigo": "37", "producto": "Brevas" }, { "codigo": "343", "producto": "Hamburguesa Premium " }, { "codigo": "229", "producto": "Queso Saravena  x gramo" }, { "codigo": "271", "producto": "Salchicha Manguera " }, { "codigo": "380", "producto": "Salchichon Rica " }, { "codigo": "385", "producto": "Salchichon Zenu" }, { "codigo": "230", "producto": "Bloque Queso tajado" }, { "codigo": "2", "producto": "Porcionada 150 grm" }, { "codigo": "2-1", "producto": "Porcionada 200 grm" }, { "codigo": "802", "producto": "Anillos Kilo" }, { "codigo": "600", "producto": "Nuggets 900 gr" }, { "codigo": "798", "producto": "Nuggets 300 gr" }, { "codigo": "65", "producto": "Frozen roja" }, { "codigo": "99", "producto": "Frozen Verde" }, { "codigo": "72", "producto": "Papa Importada " }, { "codigo": "437", "producto": "Papa Kilo" }, { "codigo": "462", "producto": "Casquitos Kilo" }, { "codigo": "435", "producto": "Yuca kilo" }, { "codigo": "326-1", "producto": "Patacón" }, { "codigo": "326", "producto": "Tostón " }, { "codigo": "36", "producto": "Criolla Porcionada " }, { "codigo": "116", "producto": "Hamburguesa Koller unidad" }, { "codigo": "115", "producto": "Hamburguesa Koller Caja" }, { "codigo": "106", "producto": "Hamburguesa Zenu caja" }, { "codigo": "48", "producto": "Hamburguesa Zenu x 5 unidades" }, { "codigo": "191", "producto": "Hamburguesa Koleo" }, { "codigo": "314", "producto": "Hamburguesa Andes" }, { "codigo": "200", "producto": "Hamburguesa Klick unidad" }, { "codigo": "105", "producto": "Hamburguesa Klick Caja" }, { "codigo": "4", "producto": "Hamburguesa Komaya" }, { "codigo": "80", "producto": "Maiz Kilo" }, { "codigo": "358", "producto": "Milanesa " }, { "codigo": "796", "producto": "Estupasta" }, { "codigo": "107", "producto": "Pulpa FR/MR/LU/MA" }, { "codigo": "222", "producto": "Pulpa GN/ CC/ MY" }, { "codigo": "103", "producto": "Pulpa Cereza " }]


function cargarDatos(){
    localStorage.setItem('productos', JSON.stringify(ProductosJson))
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const Productos = JSON.parse(localStorage.getItem('productos')) || []
    
    const codigo = document.querySelector('#codigo').value
    const producto = document.querySelector('#producto').value

    const isProductosRegistered = Productos.find(productos => productos.codigo === codigo)

    if(isProductosRegistered){
        return alert('El producto ya está registrado!')
    }

    Productos.push({codigo: codigo, producto: producto})
    localStorage.setItem('productos', JSON.stringify(Productos))

    window.location.reload()

    console.log(Productos)

})
