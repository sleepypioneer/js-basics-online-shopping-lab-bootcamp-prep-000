var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, {[item]: Math.floor((Math.random() * 100) + 1)}))
  console.log(item + " has been added to your cart.")
  return cart
}


function viewCart() {
  if ( cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if(cart.length === 1) {
      console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + ".")
  } else if(cart.length === 2) {
      console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] +  ".")
  } else {
    var cartList = []
    for (let i = 0; i < cart.length; i++){
      cartList.push(" " + Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])] + "," )
    }
    var a = cartList.slice(0, cartList.length-1);
    var b = cartList.slice(cartList.length-1);
    console.log("In your cart, you have " + a + " and " + b + ".")
  }
}

function total() {
  var currentTotal  = 0;
  for (let i = 0; i < cart.length; i++) {
    currentTotal += parseInt(cart[i][Object.keys(cart[i])])
  }
  return currentTotal;
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++) {
    if (String(Object.keys(cart[i])) === item) {
      delete cart.splice(i,1)
      return cart
    } else {
      var message = true;
    }
  }
  if (message) {
    console.log("That item is not in your cart.")
  }
}


function placeOrder(cardNumber){
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    var cost = total();
    console.log("Your total cost is $" + cost + ", which will be charged to the card " + cardNumber + ".");
  }
  return cart = [];
}
