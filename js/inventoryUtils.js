

export function searchProducts(products, query) {
  let lowerQuery = query.toLowerCase();

  let result = products.filter(function (product) {
    let lowerName = product.name.toLowerCase();
    if (lowerName.includes(lowerQuery)) {
      return true;
    } else {
      return false;
    }
  });

  return result;
}

export function filterProductsByCategory(products, category) {
  // "All" 
  if (category === "All") {
    return products;
  }

  let result = products.filter(function (product) {
    return product.category === category;
  });

  return result;
}

export function getStockStatus(stock) {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock >= 1 && stock <= 5) {
    return "Low Stock";
  } else {
    return "In Stock";
  }
}

export function calculateTotalInventoryValue(products) {
  // reduce() adds everything up into one number
  let total = products.reduce(function (sum, product) {
    return sum + product.price * product.stock;
  }, 0);

  return total;
}

export function countLowStockProducts(products) {
  let lowStockList = products.filter(function (product) {
    return product.stock >= 1 && product.stock <= 5;
  });

  return lowStockList.length;
}

export function countOutOfStockProducts(products) {
  let outOfStockList = products.filter(function (product) {
    return product.stock === 0;
  });

  return outOfStockList.length;
}
