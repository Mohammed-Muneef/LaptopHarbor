function addToCart(ptitle,pprice,pimage){
 
    var prod={
      title: ptitle,
      price: pprice,
      image: pimage,
    };
   
    var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cart.push(prod);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    alert('added')
   
  }
  
  var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  for(let i=0;i<cart.length;i++)
  {
    var cartitems = document.getElementById("products")
    cartitems.innerHTML+=`<div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src="${cart[i].image}"
            class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead fw-normal mb-2">${cart[i].title}</p>
          
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
            <i class="fas fa-minus"></i>
          </button>

          <input style="width:50px" id="form1" min="0" name="quantity" value="2" type="number"
            class="form-control form-control-sm" />

          <button class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 class="mb-0">${cart[i].price}</h5>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
        </div>
      </div>
    </div>
    
  </div>`;

   
    
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

  
  