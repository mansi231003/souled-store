export const saveWishlistToCookies = (wishlistItems) => {
    document.cookie =
        "wishlist=" +
        encodeURIComponent(JSON.stringify(wishlistItems)) +
        "; path=/ ; max-age=" + 60 * 60 * 24 * 30; 
};

  const loadWishlistFromCookies = () => {
    const cookies = document.cookie.split("; ");

    const wishlistCookie = cookies.find(row =>
        row.startsWith("wishlist=")
    );

    if (!wishlistCookie) return [];

    try {
        return JSON.parse(
            decodeURIComponent(
                wishlistCookie.split("=")[1]
            )
        );
    } catch {
        return [];
    }
};

export {loadWishlistFromCookies}