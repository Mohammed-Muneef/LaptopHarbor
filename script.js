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



// function addToCart(pro){
//   console.log(pro)
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
  <div class="card-body" style="padding-top: 0;">
    <h5 class="card-title"><b>${product.title}</b></h5>
    <p class="card-text"><strong>Price:</strong> &#x20b9; ${product.price}</p>
    <p class="card-text"><strong>Rating:</strong> ${product.rating}<span class="fa fa-star checked"></span></p>
    <p>Portable computer that can</p><p> be easily carried around</p>
    <a href="#" class="btn btn-primary" style="margin-left: 44px;margin-top:10px;"onclick="addToCart('${product.title}','${product.price}','${product.image}');window.location.reload();">Add to cart</a>
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

function sorting(rate){
  const card = document.querySelector(".products");
  card.innerHTML = ``;
  const searchTerm = rate;
  console.log(searchTerm);

  fetchProducts().then((products) => {
    // for (const product of products) {
      const searchResults = searchData1(products,searchTerm);
      for(const searchResult of searchResults)
      {

        render(searchResult)
        // console.log(searchResult)
      }
      // console.log(product)

    // }
  });
}

function handleSearch() {
  const card = document.querySelector(".products");
  card.innerHTML = ``;
  const searchTerm = document.querySelector("#inputbar").value;


  fetchProducts().then((products) => {
    // for (const product of products) {
      const searchResults = searchData(products,searchTerm);
      if(searchResults.length===0){
        card.innerHTML = `<div style="padding-left: 40vw;
        padding-top: 20px;"><h4>No results matched your search.</h4></div>
        <div class="empty" style="height:370px"></div>`;
      }
      else{
      for(const searchResult of searchResults)
      {

        render(searchResult)
        // console.log(searchResult)
      }}
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
// function searchData(data, searchTerm) {
 
//   return data.filter((item) =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }

function searchData(data, searchTerm) {
  const searchResults = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return searchResults;
  
}

function searchData1(data, searchTerm) {
  // Implement your search logic here
  // Example:
  // console.log(data,searchTerm)
  return data.filter((item) =>
  Number(item.rating)>=Number(searchTerm)
  );
}

var cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
var count=cart.length;
var cartsup=document.getElementById('cart-count')
cartsup.innerHTML=`${count}`

// function clear(){
//   const searchvalue = document.getElementById("inputbar").value;
//   if(searchvalue===''){
//     window.location.reload()
//   }
// }

const searchBar = document.getElementById("inputbar");

searchBar.addEventListener("search", () => {
  if (searchBar.value === "") {
    window.location.reload();
  }
});