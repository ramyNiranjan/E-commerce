

async function getData(){
  let resutl= await fetch('./product.json')
  return resutl.json()
}

getData().then(data=>{
  console.log(data)

  localStorage.setItem('first',  JSON.stringify(data))
})


console.log(localStorage.getItem('first'))