function getTotal() {
  let cartCount = document.querySelector('.nav__cart-count')
  let total = localStorage.getItem('totalProd')
  console.log(total)
  cartCount.innerHTML = total
}
getTotal()


function getCartData(){
  let cart=JSON.parse(localStorage.getItem('cart'))
  console.log(cart)
}

getCartData()