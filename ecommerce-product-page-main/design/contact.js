const navlink = document.querySelector('.navbarlinks')
const nav = document.querySelector('nav')
const body = document.body
const hero = document.querySelector('.hero')
const icon = document.querySelector('.icon')
const cart = document.querySelector('.cart')
const minus = document.querySelector('.minus')
// const plus = document.querySelector('.plus')
const zero = document.querySelector('.zero')
const scor = document.querySelector('.scor')
const addTocart = document.querySelector('.addTocart')
const cartlist = document.querySelector('.cartlist')
const notifications = document.querySelector('.notifications')



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
// let counter = 0;
// plus.addEventListener('click',()=>{
//     counter = counter +1
//     zero.innerHTML = counter
// })
// minus.addEventListener('click',()=>{
//     counter = counter - 1;
//     zero.innerHTML = counter
//     if(counter<0){
//         counter = 0
//         zero.innerHTML = counter
//     }
// })
// addTocart.addEventListener('click',()=>{
//     Add()
// })
// Add
const div = document.createElement('div')
const image = document.createElement('img')
const text = document.createElement('p')
const button = document.createElement('button')
const checkbutton = document.createElement('button')


function Add(){
    div.classList.add('div')
    image.classList.add('image')
    image.src ="images/image-product-1-thumbnail.jpg"
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

const bttn = document.querySelector('.bttn')
const form = document.querySelector('.form')
const sent = document.querySelector('.sent')

const backbtn = document.createElement('button')
const para = document.createElement('p')
const enregisterbtn = document.createElement('span')


// form conditions
const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const email = document.querySelector('.email')
const message = document.querySelector('.message')

const nam = document.querySelector('.name')
const last = document.querySelector('.last')
const emai = document.querySelector('.emai')
const mess = document.querySelector('.mess')


bttn.addEventListener('click',()=>{
//    e.preventDefault()
//     enregisterbtn.classList.add('enregisterbtn')
//     para.classList.add('para')
//     form.style.display = 'none'
//     enregisterbtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
//     para.innerHTML = 'Your request has been sent successfuly'
//     backbtn.classList.add('backbtn')
//     backbtn.innerHTML = 'Back'
//     sent.appendChild(enregisterbtn)
//     sent.appendChild(para)
//     sent.appendChild(backbtn)
    

    if(firstname.value.length<4){
       firstname.classList.add('red')
       firstname.classList.remove('green')
       nam.innerHTML = 'invalid firstName'

    }else{
       nam.innerHTML = ''
       firstname.classList.add('green')
       firstname.classList.remove('red')

    }
    if(lastname.value.length<4){
        lastname.classList.add('red')
        lastname.classList.remove('green')
        last.innerHTML = 'invalide lastName'
    }else{
        last.innerHTML = ''
        lastname.classList.add('green')
        lastname.classList.remove('red')
 
    }
    if(email.value.includes('@gmail.com')){
        emai.innerHTML = ''
        email.classList.add('green')
        email.classList.remove('red')
    }else{
        email.classList.add('red')
        email.classList.remove('green')
        emai.innerHTML = 'invalide email'
    }
    if(message.value.length<0){
        message.classList.add('red')
        message.classList.remove('green')
        mess.innerHTML = 'invalide email'
    }else{
        message.innerHTML = ''
        message.classList.add('green')
        message.classList.remove('red')
    }
    if(firstname.value.length>4 && lastname.value.length>4 && email.value.includes('@gmail.com')){
    enregisterbtn.classList.add('enregisterbtn')
    para.classList.add('para')
    form.style.display = 'none'
    enregisterbtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    para.innerHTML = 'Your request has been sent successfuly'
    backbtn.classList.add('backbtn')
    backbtn.innerHTML = 'Back'
    sent.appendChild(enregisterbtn)
    sent.appendChild(para)
    sent.appendChild(backbtn)
    
}
    
})



 backbtn.addEventListener('click',()=>{
    form.style.display = 'flex'
    backbtn.remove()
    para.remove()
    enregisterbtn.remove()
    firstname.value = ''
    lastname.value = ''
    email.value = ''
    message.value = ''
   firstname.classList.remove('green')
   lastname.classList.remove('green')
   email.classList.remove('green')
   message.classList.remove('green')
 })
