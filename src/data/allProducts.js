import { menProducts } from "./menProducts";
import { womenProducts } from "./womenProducts";
import { sneakers } from "./sneakersProduct";

export const allProducts = [
  ...menProducts,
...womenProducts,
...sneakers
];