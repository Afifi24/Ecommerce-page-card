const navlink = document.querySelector('.navbarlinks')
const nav = document.querySelector('nav')
const body = document.body
const hero = document.querySelector('.hero')
const icon = document.querySelector('.icon')
const cart = document.querySelector('.cart')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const zero = document.querySelector('.zero')
const scor = document.querySelector('.scor')
const addTocart = document.querySelector('.addTocart')
const cartlist = document.querySelector('.cartlist')
const notifications = document.querySelector('.notifications')
const bodyy = document.body



navlink.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    nav.classList.toggle('blacknavbar')
    navlink.classList.toggle('open')
    hero.classList.toggle('backgroud')
})

icon.addEventListener('click',()=>{
    cart.classList.toggle('go')
})

// counter
let counter = 0;
plus.addEventListener('click',()=>{
    counter = counter +1
    zero.innerHTML = counter
})
minus.addEventListener('click',()=>{
    counter = counter - 1;
    zero.innerHTML = counter
    if(counter<0){
        counter = 0
        zero.innerHTML = counter
    }
})
addTocart.addEventListener('click',()=>{
    Add()
})
// Add
const div = document.createElement('div')
const image = document.createElement('img')
const text = document.createElement('p')
const button = document.createElement('button')
const checkbutton = document.createElement('button')


function Add(){
    div.classList.add('div')
    image.classList.add('image')
    image.src = "images/image-product-1-thumbnail.jpg"
    text.classList.add('paragraphe')
    button.classList.add('buttton')
    text.innerHTML = `Fall Limited Edition Sneakers $125.00 x ${zero.innerHTML} $${125.00*zero.innerHTML}`
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>'


    checkbutton.classList.add('checkbutton')
    checkbutton.innerHTML = 'checkout'
    div.appendChild(image)
    div.appendChild(text)
    div.appendChild(button)
    cartlist.appendChild(div)
    cartlist.appendChild(checkbutton)
    empty.remove()
    notifications.innerHTML = `${zero.innerHTML}`
    notifications.style.display = 'flex'
}
// delete button inside of the cart
button.addEventListener('click',()=>{
     div.remove()
     checkbutton.remove()
     if(!cartlist.contains(div)){
        empty.innerHTML = ' Your cart is empty'
        empty.classList.add('empty')
        cartlist.appendChild(empty) 
    }
    notifications.style.display = 'none'
    
    
 
})
// add notifications
notifications.style.display = 'none'

// checkout
checkbutton.addEventListener('click',()=>{
   
})

// cart is empty
const empty  = document.createElement('p')

if(!cartlist.contains(div)){
    empty.innerHTML = ' Your cart is empty'
    empty.classList.add('empty')
    cartlist.appendChild(empty)
    
}
// for the form 

// const bttn = document.querySelector('.bttn')

// bttn.addEventListener('click',()=>{
//     const enregisterbtn = documrent.createElement('button')
//     enregisterbtn.classList.add('enregisterbtn')
//     enregisterbtn.innerHTML = 'Your request has been sent successfuly'
// })
// upload the image
 const itemImage = document.querySelectorAll('.item-img')
 const proImage = document.querySelectorAll('.pro-img')

 
    itemImage.forEach(item=>{
        item.addEventListener('click',()=>{
            // const upimage = document.createElement('img')
            // upimage.classList.add('upimage')
            // upimage.src = item.src
            // bodyy.appendChild(upimage)
            // container.classList.add('.yes')
            // body.classList.add('background')
            proImage.src = item.src
        })
       
    })
    
// angle left and right
const leftangle = document.querySelector('.fa-angle-left')
const rightangle = document.querySelector('.fa-angle-right')

let isactive = 0;
function Isactive(){
    proImage.forEach(item=>{
        item.classList.remove('active')
    })
    proImage[isactive].classList.add('active')
    
}
rightangle.addEventListener('click',()=>{
    isactive++
    if(isactive>itemImage.length -1){
        isactive=0
    }
    Isactive()
})
leftangle.addEventListener('click',()=>{
    isactive--
    if(isactive<0){
        isactive=itemImage.length -1
    }
    Isactive()
})

// leftangle.addEventListener('click',()=>{
//     itemImage.forEach(item=>{
//         proImage.src = item.src
//     })
// })
// rightangle.addEventListener('click',()=>{
//     itemImage.forEach(item=>{
//         proImage.src = item.src
//     })
// })

