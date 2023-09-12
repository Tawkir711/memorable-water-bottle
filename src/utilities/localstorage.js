const getStoredCart = () => {
  const storeCartString = localStorage.getItem('cart');
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
}

const saveCartToLS = cart => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
  const cart = getStoredCart();
  cart.push(id);
  // save to localstorage
  saveCartToLS(cart);
}

const removeFromLS = id => {
  const cart = getStoredCart();
  // removing every id 
  const remaining = cart.filter(idx => idx !== id);
  saveCartToLS(remaining);
}

export { addToLS, getStoredCart, removeFromLS };