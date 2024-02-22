// function fetchProducts() {
//   fetch("./data.json")
//     .then((response) => response.json())
//     .then((json) => {
//       const products = json.products;
//       for (const product of products) {
//         render(product);
//       }
//     });
// }
async function fetchProducts() {
  try {
    const response = await fetch("./data.json");
    const jsonData = await response.json();
    const products = jsonData.products;

    return products; // Return the array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle errors gracefully, e.g., return an empty array or throw a custom error
  }
}

fetchProducts().then((products) => {
  for (const product of products) {
    render(product);
  }
});

function render(product) {
  const card = document.querySelector(".products");
  card.innerHTML += `
  <div class="card" style="width: 15rem;">
  <img class="card-img-top" src="${product.image}" alt="Card image cap" style="height:238px;">
  <div class="card-body">
    <h5 class="card-title"><b>${product.title}</b></h5>
    <p class="card-text">${product.desc}</p>
    <a href="#" class="btn btn-primary" onclick="addToCart('${product}')">Add to cart</a>
  </div>`;
}

// const searchButton = document.querySelector('#search');
// searchButton.addEventListener('click', handleSearch);

// function handleSearch()
// {
//     const searchedInput = document.querySelector('#inputbar')
//     console.log(searchedInput)
// }

// function handleSearch() {
//   const searchTerm = document.querySelector('#inputbar').value;

//   // Send search term to server-side endpoint
//   fetch('./data.json', {
//       method: 'POST',
//       body: JSON.stringify({ searchTerm })
//   })
//   .then(response => response.json())
//   .then(searchResults => {
//       // Update the page with search results
//       render(searchResults);
//   })
//   .catch(error => {
//       // Handle errors gracefully
//       console.error('Search failed:', error);
//   });
// }

function handleSearch() {
  const card = document.querySelector(".products");
  card.innerHTML = ``;
  const searchTerm = document.querySelector("#inputbar").value;

  fetchProducts().then((products) => {
    // for (const product of products) {
      const searchResults = searchData(products,searchTerm);
      for(const searchResult of searchResults)
      {

        render(searchResult)
        // console.log(searchResult)
      }
      // console.log(product)

    // }
  });
  // Fetch data from local JSON file
  // fetch("./data.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Perform search within the fetched data
  //     const searchResults = searchData(data, searchTerm);

  //     // Update the page with search results
  //     render(searchResults);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });
}

// Function to search within the data
function searchData(data, searchTerm) {
  // Implement your search logic here
  // Example:
  // console.log(data,searchTerm)
  return data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}



// Function to display search results (replace with your implementation)


// function addToCart(item){
//   console.log(item)
// }

// async function addToCart(productId) {
//   try {
//     // console.log(productId)
//     // Find product by ID from data source
    
//     const products = await fetchProducts(); // Assuming "fetchProducts" returns your products
//     const product = products.find(item => item.id === productId);
//     // console.log(product)
//     if (product) {
//       // Read existing cart from JSON file or create a new array
//       const cartData = await readCartData();
//       const cart = cartData ? cartData.cart : [];

//       // Add product to cart or update quantity if already exists
//       const existingItem = cart.find(item => item.id === product.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         cart.push({ ...product, quantity: 1 });
//       }

//       // Write updated cart to JSON file
//       await writeCartData({ cart });

//       console.log("Product added to cart successfully!");
//       // Update UI here if needed
//     } else {
//       console.error("Product not found:", productId);
//     }
//   } catch (error) {
//     console.error("Error adding product to cart:", error);
//     // Handle errors gracefully, e.g., display an error message to the user
//   }
// }

// async function readCartData() {
//   try {
//     const response = await fetch('cart.json'); // Adjust filename if needed
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error reading cart data:", error);
//     return null;
//   }
// }

// async function writeCartData(data) {
//   try {
//     await fetch('cart.json', {
//       method: 'PUT',
//       body: JSON.stringify(data),
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error("Error writing cart data:", error);
//   }
// }


// async function addToCart(item) {
 


//   // 1. Retrieve current cart data from local storage
//   const cartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];

//   // 2. Check if item already exists in the cart
//   const existingItem = cartData.find(cartItem => cartItem.id === item.id);

//   if (existingItem) {
//     // 3. Increase quantity if item already exists
//     existingItem.quantity++;
//   } else {
//     // 4. Add new item with quantity 1
//     cartData.push({ ...item, quantity: 1 });
//   }

//   // 5. Save updated cart data to local storage
//   localStorage.setItem("shoppingCart", JSON.stringify(cartData));

//   // 6. (Optional) Update UI to reflect changes in the cart
//   // This part will depend on your specific UI framework and implementation
//   // Here's an example using DOM manipulation (modify as needed):
//   // const cartCountElement = document.getElementById("cart-count");
//   // cartCountElement.textContent = cartData.reduce((total, item) => total + item.quantity, 0);
// }


// const cart = document.querySelector('#cart');
// const cartModalOverlay = document.querySelector('.cart-modal-overlay');
// // console.log(cartModalOverlay)

// cart.addEventListener('click', () => {
//   if (cartModalOverlay.style.transform === 'translateX(-200%)'){
//     cartModalOverlay.style.transform = 'translateX(0)';
//   } else {
//     cartModalOverlay.style.transform = 'translateX(-200%)';
//   }
// })

// const closeBtn = document.querySelector ('#close-btn');

// closeBtn.addEventListener('click', () => {
//   cartModalOverlay.style.transform = 'translateX(-200%)';
// });

// cartModalOverlay.addEventListener('click', (e) => {
//   if (e.target.classList.contains('cart-modal-overlay')){
//     cartModalOverlay.style.transform = 'translateX(-200%)'
//   }
// })