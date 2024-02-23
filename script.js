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
    <p class="card-text">&#x20b9; ${product.price}</p>
    <p class="card-text">Rating: ${product.rating}<span class="fa fa-star checked"></span></p>
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




