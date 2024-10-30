const CART_LOCAL_STORAGE_KEY = "cartLocalStorage";
const ORDER_LOCAL_STORAGE_KEY = "orderLocalStorage";

function addProductToCart(productObject) {}

function getCart() {}

function removeProductInCart(_idProduct, skuVariantProduct) {}

function increaseProductInCart(_idProduct, skuVariantProduct) {}

function decreaseProductInCart(_idProduct, skuVariantProduct) {}

function getSubTotal(cart) {}

function nextStepOrder(step) {}

function backStepOrder(step) {}

function getStepOrder() {}

function saveBillingInfo(info) {}

function getOrderInfo() {}

function clearAfterOrder() {}

export {
  addProductToCart,
  getCart,
  removeProductInCart,
  increaseProductInCart,
  decreaseProductInCart,
  getSubTotal,
  nextStepOrder,
  backStepOrder,
  getStepOrder,
  saveBillingInfo,
  getOrderInfo,
  clearAfterOrder,
};
