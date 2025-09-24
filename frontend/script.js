let cart = [];

function renderProducts(products) {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<strong>${product.name}</strong><br>Price: $${product.price}<br><button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productsDiv.appendChild(div);
  });
}

function renderCart() {
  const cartUl = document.getElementById('cart');
  cartUl.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartUl.appendChild(li);
  });
}

function addToCart(id) {
  fetch('/api/products')
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === id);
      if (product) {
        cart.push(product);
        renderCart();
      }
    });
}

fetch('/api/products')
  .then(res => res.json())
  .then(renderProducts);
