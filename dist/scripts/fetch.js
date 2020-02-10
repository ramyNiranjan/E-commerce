


  async function getData() {
    let resutl = await fetch('./product.json')
    return resutl.json()
  }

  getData().then(data => {
    // console.log(data)
    localStorage.setItem('data', JSON.stringify(data))
  })

  function getProducts() {
    let data = JSON.parse(localStorage.getItem('data'))
    // console.log(data)
    let products = data.products
    products.forEach((item) => {
      upDateUi(item)
    })
  }


  function upDateUi(data) {
    let mainUi = document.querySelector('.products')

    let html = `<div class="products__card" id='${data.id}'>
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

    mainUi.innerHTML += html

  }

  document.addEventListener('DOMContentLoaded', getProducts())








let search = document.querySelector('.search')
let products = document.querySelectorAll('.products__card')
let cartCount = document.querySelector('.nav__cart-count')
let wrapper = document.querySelectorAll('.products__add-wrapper')


function getTotal() {
  let cartCount = document.querySelector('.nav__cart-count')
  let total = localStorage.getItem('totalProd')
 
  cartCount.innerHTML=total || 0
}
getTotal()



let arr = creatingArr()
let total = findingLength(arr)



function findingLength(arr){
  let total=0
   arr.forEach(item=>{
     total+=item.length
   })
   return total
}


function creatingArr() {
  let data = JSON.parse(localStorage.getItem('data')).products
  return data.reduce((arr) => {
    arr.push(new Array)
    return arr
  }, [])

}













wrapper.forEach(item=>{
  item.addEventListener('click', (e) => {
    let currentId = e.target.parentElement.parentElement.id 
    let parent = e.target.parentElement.parentElement
    let pushObj={
      image: parent.firstElementChild.firstElementChild.getAttribute('src'),
      name: parent.firstElementChild.nextElementSibling.textContent,
      price: parent.lastElementChild.previousElementSibling.textContent
    }

   

     if( e.target.className == 'products__minus'){

       let cartData = JSON.parse(localStorage.getItem('cart'))
       cartData = cartData ? cartData : arr
       cartData[parseInt(currentId)].pop(pushObj)
       localStorage.setItem('cart', JSON.stringify(cartData))

       let currentCount=parseInt(localStorage.getItem('totalProd'))
       currentCount = currentCount ? currentCount:total
        total = findingLength(cartData)
        cartCount.innerHTML = total
        localStorage.setItem('totalProd', JSON.stringify(total))

        }else{

       let cartData = JSON.parse(localStorage.getItem('cart'))
       cartData = cartData ? cartData:arr
       cartData[parseInt(currentId)].push(pushObj)
       console.log(cartData)
       localStorage.setItem('cart', JSON.stringify(cartData))

       let currentCount = parseInt(localStorage.getItem('totalProd'))
       currentCount = currentCount ? currentCount : total
       total = findingLength(cartData)
       cartCount.innerHTML = total
       localStorage.setItem('totalProd', JSON.stringify(total))
     
     }
    })

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









