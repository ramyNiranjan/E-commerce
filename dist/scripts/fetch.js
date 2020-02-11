


  async function getData() {
    let resutl = await fetch('./product.json')
    return resutl.json()
  }

  getData().then(data => {
    
    let arr=[]
    let products = data.products
    products.forEach((item) => {
      upDateUi(item)
      arr.push(new Array)
      
    })
    creatingArr(arr)
    let search = document.querySelector('.search')
    let productsCard = document.querySelectorAll('.products__card')
    let cartCount = document.querySelector('.nav__cart-count')
    let wrapper = document.querySelectorAll('.products__add-wrapper')
    let arrCart = JSON.parse(localStorage.getItem('cart'))
    let total = findingLength(arrCart)
    addToCart(wrapper, cartCount, total,arr)
    searchItems(search, productsCard)
  })

  function getProducts() {
    // let data = JSON.parse(localStorage.getItem('data'))
    // let products = data.products
    // products.forEach((item) => {
    //   upDateUi(item)
    // })
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
          <div class="products___add">0</div>
          <div class="products__plus">+</div>
        </div>
      </div>`

    mainUi.innerHTML += html

  }











function getTotal() {
  let cartCount = document.querySelector('.nav__cart-count')
  let total = localStorage.getItem('totalProd')
 
  cartCount.innerHTML=total || 0
}
getTotal()


function findingLength(arr){
  let total=0
   arr.forEach(item=>{
     total+=item.length
   })
   return total
}


function creatingArr(arr) {
  let data = JSON.parse(localStorage.getItem('cart'))
  data = data ? data : arr
  localStorage.setItem('cart',JSON.stringify(data))
  // data.reduce((arr) => {
  //   arr.push(new Array)
  //   return arr
  // }, [])

}

function creatingProdCOuntObj(){

}


function showinSingelProductCount(id,count){
  let show = document.querySelectorAll('.products___add')
  let singelProdCount={}
  show.forEach(item=>{
    let domId = item.parentElement.parentElement.id
    if(domId==id){
     item.innerHTML=count
     singelProdCount[`${domId}`]=count
    }
  
  })
  console.log(singelProdCount)
}




 
function addToCart(wrapper, cartCount,total,arr){
  wrapper.forEach(item => {
    item.addEventListener('click', (e) => {
      let currentId = e.target.parentElement.parentElement.id
      let parent = e.target.parentElement.parentElement
      let pushObj = {
        image: parent.firstElementChild.firstElementChild.getAttribute('src'),
        name: parent.firstElementChild.nextElementSibling.textContent,
        price: parent.lastElementChild.previousElementSibling.textContent
      }



      if (e.target.className == 'products__minus') {

        let cartData = JSON.parse(localStorage.getItem('cart'))
        cartData = cartData ? cartData : arr
        cartData[parseInt(currentId)].pop(pushObj)
        localStorage.setItem('cart', JSON.stringify(cartData))
        showinSingelProductCount(currentId, cartData[currentId].length)

        let currentCount = parseInt(localStorage.getItem('totalProd'))
        currentCount = currentCount ? currentCount : total
        total = findingLength(cartData)
        cartCount.innerHTML = total
        localStorage.setItem('totalProd', JSON.stringify(total))

      } else {

        let cartData = JSON.parse(localStorage.getItem('cart'))
        cartData = cartData ? cartData : arr
        cartData[parseInt(currentId)].push(pushObj)
        showinSingelProductCount(currentId, cartData[currentId].length)
        localStorage.setItem('cart', JSON.stringify(cartData))

        let currentCount = parseInt(localStorage.getItem('totalProd'))
        currentCount = currentCount ? currentCount : total
        total = findingLength(cartData)
        cartCount.innerHTML = total
        localStorage.setItem('totalProd', JSON.stringify(total))

      }
    })

  })
}










function searchItems(search, productsCard){
   search.addEventListener('keyup', (e) => {
    let userInput = e.target.value.toLowerCase()
    productsCard.forEach(item => {
      let text = item.firstElementChild.nextElementSibling.innerText.toLowerCase()
      if (text.includes(userInput)) {
        item.style.display = 'block'
      }
      if (!text.includes(userInput)) {
        item.style.display = 'none'
      }
    })
  })
}













