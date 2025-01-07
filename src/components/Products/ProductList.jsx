import ProductCard from "./ProductCard";
import {mockProducts} from "../../data/mockData";

function ProductList() {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
                Similar Products
            </h2>
            <div className="space-y-3">
                {mockProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
