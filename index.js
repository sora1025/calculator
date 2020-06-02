let price = document.getElementsByClassName('price');
let change = document.getElementsByClassName('change');
let priceDiff = document.getElementsByClassName('price-diff');

setInterval(()=>{
  for(let i = 0; i < change.length; i++) {
    let random = (Math.random()) * 20 - 10;
    let changeRange = random.toString().slice(0,5);
    let currentPrice = (1 + Number(changeRange)*0.01)* Number(price[i].innerHTML);
    let startPrice = price[i].innerHTML;
    
    price[i].innerHTML = currentPrice.toString().slice(0,5);
    change[i].innerHTML = changeRange;
    priceDiff[i].innerHTML = (currentPrice - Number(startPrice)).toString().slice(0,7);

    if(changeRange > 0) {
      change[i].style.color = 'red';
    } else if (changeRange == 0) {
      change[i].style.color = 'black';
    } else if (changeRange < 0) {
      change[i].style.color = 'green';
    }  
  }
},10000)