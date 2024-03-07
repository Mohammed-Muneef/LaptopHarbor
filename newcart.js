function addToCart(ptitle, pprice, pimage, prating) {
  var prod = {
    title: ptitle,
    price: pprice,
    image: pimage,
    rating: prating,
  };

  var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const existingItemIndex = cart.findIndex((item) => item.title === prod.title);
  if (existingItemIndex !== -1) {
    alert("Item already in cart");
  } else {
    cart.push(prod);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    alert("Item added");
  }
}

var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

for (let i = 0; i < cart.length; i++) {
  var cartitems = document.getElementById("items");

  cartitems.innerHTML += `<div class="cart-item d-md-flex justify-content-between" style="border-radius: 8px;">
    <div class="px-3 my-3">
        <a class="cart-item-product" href="#">
            <div class="cart-item-product-thumb"><img src="${cart[i].image}" alt="Product"></div>
            <div class="cart-item-product-info">
                <h4 class="cart-item-product-title">${cart[i].title}</h4><span><strong>Price:</strong> ${cart[i].price}</span><span><strong>Rating: </strong>${cart[i].rating}<span class="fa fa-star checked"></span></span>
            </div>
        </a>
    </div>
    <div class="px-3 my-3 text-center" style="display:flex;justify-content:center;align-items:center;">
    
    <td class="align-middle p-4" >
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
    </div>
    <div class="px-3 my-3 text-center" style="display:flex;justify-content:center;align-items:center">
        <span class="text-xl font-weight-medium" id="total${i}">${cart[i].price}</span>
    </div>
    <div class="px-3 my-3 text-center" style="display:flex;justify-content:center;align-items:center">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <span class="text-xl font-weight-medium"><button class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove" onclick="deleteItem('${cart[i].title}');"><i class="fa fa-trash" aria-hidden="true"></i></button></span>
     </div>
</div>
      
      `;
}

function deleteItem(itemtitle) {
  const filteredItems = cart.filter((item) => item.title !== itemtitle);
  localStorage.setItem("shoppingCart", JSON.stringify(filteredItems));
  location.reload();
}

function totalprice() {
  let globalTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const quantity1 = Number(document.getElementById(`quantity${i}`).value);
    const price1 = Number(cart[i].price);
    globalTotalPrice += price1 * quantity1;
  }

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
  console.log(p);
  sessionStorage.setItem("totalPrice", p);
}
