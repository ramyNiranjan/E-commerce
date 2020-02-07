
document.addEventListener('DOMContentLoaded', getProducts())
let count = document.querySelector('.nav__cart-count')
let search = document.querySelector('.search')
let products = document.querySelectorAll('.products__card')

async function getData() {
  let resutl = await fetch('./product.json')
  return resutl.json()
}

getData().then(data => {
  localStorage.setItem('first', JSON.stringify(data))
})






search.addEventListener('keyup',(e)=>{
  let userInput=e.target.value.toLowerCase()
  products.forEach(item=>{
   let text=item.firstElementChild.nextElementSibling.innerText.toLowerCase()
    if (text.includes(userInput)){
      item.style.display = 'block'
    }
    if (!text.includes(userInput)){
      item.style.display='none'
    }
  })
})


function getProducts(){
  let data=JSON.parse(localStorage.getItem('first'))
  let products=data.products
  products.forEach((item)=>{
    upDateUi(item)
  })
  
 
  
}

function upDateUi(data){
  let mainUi = document.querySelector('.products')

  let html =`<div class="products__card">
        <div class="products__img-wrapper">
          <img src="${data.image}" alt="" srcset="">
        </div>
        <div class="products__titel">${data.name}</div>
        <div class="products__price">${data.price}</div>
        <div class="products__add-wrapper">
          <div class="products__minus">-</div>
          <div class="products___add">Add To Cart</div>
          <div class="products__plus">+</div>
        </div>
      </div>`

  mainUi.innerHTML+=html  

}




