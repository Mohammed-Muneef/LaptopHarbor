fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    const data = json;
    const products = data.products;
    for (const product of products) {
      const card = document.querySelector(".products");
      card.innerHTML += `
<div class="card" style="width: 15rem;">
<img class="card-img-top" src="${product.image}" alt="Card image cap" style="height:238px;">
<div class="card-body">
  <h5 class="card-title">${product.title}</h5>
  <p class="card-text">${product.desc}</p>
  <a href="#" class="btn btn-primary">Add to cart</a>
</div>`;
    }
  });
