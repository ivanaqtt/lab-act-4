

import { getStockStatus } from "./inventoryUtils.js";

export function displayProducts(products) {
  let productList = document.getElementById("productList");
  let noResultsMessage = document.getElementById("noResultsMessage");

  // clear 
  productList.innerHTML = "";

 
  if (products.length === 0) {
    noResultsMessage.textContent = "No products found";
    noResultsMessage.style.display = "block";
    return;
  }

  noResultsMessage.style.display = "none";

  products.forEach(function (product) {
    // destructuring
    const { name, category, price, stock } = product;

    let status = getStockStatus(stock);

  
    let statusClass = "";
    if (status === "Out of Stock") {
      statusClass = "out-of-stock";
    } else if (status === "Low Stock") {
      statusClass = "low-stock";
    } else {
      statusClass = "in-stock";
    }

    let card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML =
      "<h3>" + name + "</h3>" +
      "<p><strong>Category:</strong> " + category + "</p>" +
      "<p><strong>Price:</strong> \u20B1" + price + "</p>" +
      "<p><strong>Stock:</strong> " + stock + "</p>" +
      "<p class='status " + statusClass + "'><strong>Status:</strong> " + status + "</p>";

    productList.appendChild(card);
  });
}

export function displaySummary(totalValue, lowStockCount, outOfStockCount) {
  document.getElementById("totalInventoryValue").textContent = "\u20B1" + totalValue;
  document.getElementById("lowStockCount").textContent = lowStockCount;
  document.getElementById("outOfStockCount").textContent = outOfStockCount;
}
