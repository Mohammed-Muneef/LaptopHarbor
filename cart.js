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
    var cartitems = document.getElementsByTagName('tbody')[0]
    //console.log(cartitems)
    cartitems.innerHTML+=`<tr>
    <td class="p-4">
      <div class="media align-items-center">
        <img src="${cart[i].image}" class="d-block ui-w-40 ui-bordered mr-4" alt="">
        <div class="media-body">
          <a href="#" class="d-block text-dark">${cart[i].title}</a>
         
        </div>
      </div>
    </td>
    <td class="text-right font-weight-semibold align-middle p-4">${cart[i].price}</td>
    <td class="align-middle p-4"><input type="text" class="form-control text-center" value="1"></td>
    <td class="text-right font-weight-semibold align-middle p-4">${cart[i].price}</td>
    <td class="text-center align-middle px-0"><a href="#" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
  </tr>

          `;

   
    
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

  
  