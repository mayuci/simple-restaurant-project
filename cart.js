


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var buttonremovecartitem = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < buttonremovecartitem.length; i++) {
        var button = buttonremovecartitem[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



function purchaseClicked() {
    
    if (confirm("Are sure that you would like to submit the order?") == 1){   // 1==1 True
        //name1= document.getElementById('customerName').value;
        alert( name + " , your order has been successfully submitted.")
   
             window.print();
             updateCartTotal();
             return true;
             
                                          
        }else{
            return false;  
           
        }
    // alert('Thank you for your purchase')
    // var cartItems = document.getElementsByClassName('')[0]
    // while (cartItems.hasChildNodes()) {
    //     cartItems.removeChild(cartItems.firstChild)
    // } updateCartTotal()
    
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function cancelorder(){
    if (confirm("Are you sure you want to cancel this order?") == 1){  // 0==1   //1==1  True
      document.burger.reset();    //  document.forms[0].reset();   first form
      window.location.reload();
    }
    
    }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('waifu')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="150" height="150">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column" >
            <input class="cart-quantity-input" type="number" value="1" min="1" max="10" >
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function shippingfee(field){
    
    document.burger.orderType.value-field.value;
    updateCartTotal();
}


function updateCartTotal() {
    s1=parseFloat(document.burger.orderType.value)
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var finaltotal = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    finaltotal =total + s1
    finaltotal=finaltotal.toFixed(2)

    for( i=0;i<quantityElement;i++){
        finaltotal-=5
        }
    if(s1==0){
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Total (No delivery feesis included): RM' + total
    }else{

    document.getElementsByClassName('cart-total-price-deliveryfees')[0].innerText = 'Total (Delivery fees  RM6.00  is included): RM' + finaltotal
}
}

