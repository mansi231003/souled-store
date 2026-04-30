const CART_KEY = "cart_items";

export const saveCartToCookies = (cartItems) => {
  try {
    const value = encodeURIComponent(JSON.stringify(cartItems));
    document.cookie = `${CART_KEY}=${value}; path=/; max-age=${7 * 24 * 60 * 60}`;
  } catch (err) {
    console.error("Error saving cart to cookies", err);
  }
};

 const loadCartFromCookies = () => {
  try {
    const cookies = document.cookie.split("; ");
    const cartCookie = cookies.find(row => row.startsWith(CART_KEY + "="));

    if (!cartCookie) return [];

    const value = cartCookie.split("=")[1];
    return JSON.parse(decodeURIComponent(value));
  } catch (err) {
    console.error("Error loading cart from cookies", err);
    return [];
  }
};
export {loadCartFromCookies}