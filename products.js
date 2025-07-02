const products = [
  { name: "Phone", category: "electronics", price: 500 },
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "T-Shirt", category: "clothing", price: 25 },
  { name: "Jeans", category: "clothing", price: 45 },
];

function displayProducts(items) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.textContent = `${product.name} - $${product.price}`;
    container.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortPrice").value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

document.getElementById("categoryFilter").onchange = applyFilters;
document.getElementById("sortPrice").onchange = applyFilters;
window.onload = () => displayProducts(products);
