let a = document.getElementById('h2')
let c = document.getElementById('h3')
let image = document.getElementById('img')
let main = document.getElementById('main')
let img = document.getElementById('img')

let b =() =>{
    a.style.color = 'red'
    image.style.border = 'red'    
    c.style.color = 'tomato'
    c.innerHTML = 'Software Developer'
    img.style.backgroundImage = 'url(https://marketplace.canva.com/EAE-xnqWvJk/1/0/800w/canva-retro-smoke-and-round-light-desktop-wallpapers-Gxa9RkovQsE.jpg)'
    main.style.border = '3px solid blue'
    main.style.backgroundColor='lightblue'
    image.style.borderRadius = '20%'
}
setTimeout(() => {
    b()
},3000);

let d =() =>{
    image.style.borderRadius = '20%'
    image.style.border = '2px solid red'
    c.style.color = 'darkblue'
    c.innerHTML = 'Software Developer'
    image.style.transform = 'rotate(360deg)'
    image.style.transition = '1s'
    document.getElementById("img").src="https://marketplace.canva.com/EAE-xnqWvJk/1/0/800w/canva-retro-smoke-and-round-light-desktop-wallpapers-Gxa9RkovQsE.jpg";
}
setTimeout(()=> {
    d()
},5000);