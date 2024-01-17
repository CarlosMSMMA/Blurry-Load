const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const btn = document.querySelector('.btn')
const loading = document.querySelector('.load')

let load = 0;

let intervalo = setInterval(bluring, 30)

btn.addEventListener('click', () => {
    window.location.reload()
})

function bluring(){
    load++

    if(load > 99) {
        clearInterval(intervalo);
        btn.style.display = 'block'
        loadText.style.display = 'none'
        loading.style.display = 'none'

    } else{
        btn.style.display = 'none'
        loadText.style.display = 'block'
        loading.style.display = 'block'  
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    loading.style.opacity = scale(load, 90, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(num, inMin, inMax, outMin, outMax){
    return (
        ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    )
}

