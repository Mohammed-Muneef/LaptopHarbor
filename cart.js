function addToCart(ptitle, pprice, pimage) {
  var prod = {
    title: ptitle,
    price: pprice,
    image: pimage,
  };

  var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const existingItemIndex = cart.findIndex(item => item.title === prod.title);
  if (existingItemIndex !== -1) {
    alert("Item already in cart")
  }
  else{
  cart.push(prod);
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  alert("Item added");
}
}

var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

for (let i = 0; i < cart.length; i++) {
  var cartitems = document.getElementsByTagName("tbody")[0];
  //console.log(cartitems)
  cartitems.innerHTML += `<tr>
    <td class="p-4">
      <div class="media align-items-center">
        <img src="${cart[i].image}" class="d-block ui-w-40 ui-bordered mr-4" alt="">
        <div class="media-body">
          <a href="#" class="d-block text-dark">${cart[i].title}</a>
         
        </div>
      </div>
    </td>
    <td class="text-right font-weight-semibold align-middle p-4">${cart[i].price}</td>
    <td class="align-middle p-4" style="display:flex">
    <button class="btn btn-link px-2"
    onclick="this.parentNode.querySelector('input[type=number]').stepDown();updateTotal(${i})">
    <i class="fas fa-minus"></i>
    </button>
    <input id="quantity${i}" type="Number" class="form-control text-center" value="1" onchange="updateTotal(${i})" style="width:70px" min="1">
    <button class="btn btn-link px-2"
    onclick="this.parentNode.querySelector('input[type=number]').stepUp();updateTotal(${i})">
    <i class="fas fa-plus"></i>
    </button>
    </td>
    <td class="text-right font-weight-semibold align-middle p-4"><span id="total${i}">${cart[i].price}</span> </td>
    <td class="text-center align-middle px-3"><button class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove" onclick="deleteItem('${cart[i].title}');">×</button></td>
  </tr>

     
    `;
}


function deleteItem(itemtitle){
  const filteredItems = cart.filter(item => item.title !== itemtitle);
  localStorage.setItem('shoppingCart', JSON.stringify(filteredItems));
  location.reload();
}


function totalprice() {
  let globalTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const quantity1 = Number(document.getElementById(`quantity${i}`).value);
    const price1 = Number(cart[i].price);
    globalTotalPrice += price1 * quantity1;
  }
  // for (const item of cart) {
  //   console.log(item.price*item.quantity)
  // globalTotalPrice += Number(item.price) * Number(item.quantity); // Use existing quantity from cart
  // }

  // Update global total price element (assuming you have an element with ID 'global-total-price'):
  const globalTotalPriceElement = document.getElementById("totalPrice");
  if (globalTotalPriceElement) {
    globalTotalPriceElement.textContent = `${globalTotalPrice.toFixed(2)}`;
  } else {
    console.warn("Global total price element not found (ID: 'totalPrice').");
  }
}
totalprice();
function updateTotal(index) {
  const quantity = Number(document.getElementById(`quantity${index}`).value);
  const price = Number(cart[index].price);
  const totalElement = document.getElementById(`total${index}`);

  if (!isNaN(quantity) && quantity >= 0) {
    totalElement.textContent = (quantity * price).toFixed(2); // Display with 2 decimal places
  } else {
    totalElement.textContent = "Invalid Quantity"; // Display error message for invalid input
  }

  totalprice();
}

function checkout() {
  var p = document.getElementById("totalPrice").textContent;
  sessionStorage.setItem("totalPrice", p);
}

//   function showProductGallery(product) {
// 	//Iterate javascript shopping cart array
// 	var productHTML = "";
// 	product.forEach(function(item) {
// 		productHTML += '<div class="product-item">'+
// 					'<div class="productname">' + item.title + '</div>'+
// 					'<div class="price">$<span>' + item.price + '</span></div>'+
// 					'<div class="cart-action">'+
// 						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
// 						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
// 					'</div>'+
// 				'</div>';
// 				"<tr>";

// 	});

// }
