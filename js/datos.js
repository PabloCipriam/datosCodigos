const Productos = JSON.parse(localStorage.getItem('productos')) || []

const datos = () => {
    const productos = JSON.stringify(Productos)
    console.log(productos)
}

datos()