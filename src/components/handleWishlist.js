import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../Redux/WishlistSlice/WishlistSlice";

export default function useWishlist() {
    const dispatch = useDispatch();

    const wishlistItems = useSelector(state => state.wishlist.items);

    const isWishlisted = (productId) =>
        wishlistItems.some(item => item.product_id === productId);

    const toggleWishlist = (product, showMessage = true) => {
        const exists = wishlistItems.find(
            item => item.product_id === product.product_id
        );

        if (exists) {
            dispatch(removeFromWishlist(exists.id));

            return showMessage
                ? { message: `${product.title} removed from wishlist` }
                : null;
        }

        dispatch(addToWishlist({
            id: crypto.randomUUID(),
            product_id: product.product_id,
            title: product.title,
            image: product.image_url || product.image,
            price: product.price_range?.min || product.price,
            size: product.size,
            color: product.color,
        }));

        return showMessage
            ? { message: `${product.title} is added to wishlist` }
            : null;
    };

    return {
        wishlistItems,
        isWishlisted,
        toggleWishlist,
    };
}