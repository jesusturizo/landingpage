const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contendorLight = document.querySelector('.imagen-light')
const principal1 = document.querySelector('.menu')


console.log(imagenes)
console.log(imagenesLight)
console.log(contendorLight)


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })  
})


contendorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contendorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        principal1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contendorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    principal1.style.opacity = '0'
}