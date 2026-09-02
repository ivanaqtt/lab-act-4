

import { products } from "./products.js";
import {
  searchProducts,
  filterProductsByCategory,
  calculateTotalInventoryValue,
  countLowStockProducts,
  countOutOfStockProducts
} from "./inventoryUtils.js";
import { displayProducts, displaySummary } from "./display.js";


let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");

function updateSummary(list) {
  let total = calculateTotalInventoryValue(list);
  let low = countLowStockProducts(list);
  let out = countOutOfStockProducts(list);

  displaySummary(total, low, out);
}

function renderAll() {
  // show all products and update the summary
  displayProducts(products);
  updateSummary(products);
}

function applyFilters() {
  let query = searchInput.value.trim();
  let category = categoryFilter.value;

  // first narrow down by category
  let result = filterProductsByCategory(products, category);

  // then search inside whatever is left, only if they typed something
  if (query !== "") {
    result = searchProducts(result, query);
  }

  displayProducts(result);
  updateSummary(result);
}

function resetEverything() {
  searchInput.value = "";
  categoryFilter.value = "All";
  renderAll();
}

searchBtn.addEventListener("click", applyFilters);
resetBtn.addEventListener("click", resetEverything);

renderAll();
