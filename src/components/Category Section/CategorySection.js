import ProductCard from "../Product card/ProductCard"
import "./CategorySection.css"

export default function CategorySection({ children,products }) {
    return (
        <>
            <div className="pb-5">
                <div className="p-2 pt-4 pb-4 flex gap-4 sticky top-[70px] bg-white z-[9] overflow-x-auto scroll-smooth scroll-hide whitespace-nowrap">{children}</div>
                <div className="category-images grid grid-cols-4 gap-4">
 {
                        products.map((item) => (
                            <ProductCard  {...item} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}