const addForm = document.querySelector('#addForm')
const Productos = JSON.parse(localStorage.getItem('productos')) || []

addForm.addEventListener('submit', (e) => {
    e.preventDefault()

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
