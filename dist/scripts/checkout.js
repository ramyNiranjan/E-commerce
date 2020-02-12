
function calSum(){
  let cart = JSON.parse(localStorage.getItem('cart'))
 return cart.flat().reduce((total,curr)=>{
   total += parseInt(curr.price)
   return total
  },0)}

function creatingArr() {
  let data = JSON.parse(localStorage.getItem('cart'))
  return data.reduce((arr) => {
    arr.push(new Array)
    return arr
  }, [])

}




function getProducts() {
  let cart = JSON.parse(localStorage.getItem('cart'))
  // console.log(cart)
  var arrayLength = cart.flat();
  console.log(arrayLength)
  arrayLength.forEach(item=>{
    console.log(item.name)
    populateDom(item)
    subtotal(item)
   
  })


}
getProducts()

function populateDom(data){
let result = document.querySelector('.cart__result')
console.log(result)

  let html = `
  <div class="cart__products">
            <div class="cart__products-wrapper">
              <img src="${data.image}" alt="" srcset="" />
            </div>
            <p class="cart__products-name">
              ${data.name}
            </p>
            <p></p>
            <p class="cart__product-price">
              ${data.price}
            </p>

          </div>
          
  </div>`

  result.innerHTML += html
}

function subtotal(data){
  var text = document.getElementById('sum').textContent;


  let sub = parseInt(text)
  let sum = parseInt(data.price)+sub

console.log(sum)
document.getElementById('sum').innerHTML=+sum 

}


// populateDom()