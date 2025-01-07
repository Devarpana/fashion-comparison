import {ExternalLink, Heart} from "lucide-react";

function ProductCard({product}) {
    const {name, price, originalPrice, store, image} = product;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <div className="flex gap-3">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-800">{name}</h3>
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                    </div>
                    <p className="text-sm text-gray-500">{store}</p>
                    <div className="mt-2">
                        <span className="text-lg font-semibold text-purple-600">
                            {price}
                        </span>
                        <span className="ml-2 text-sm text-gray-400 line-through">
                            {originalPrice}
                        </span>
                    </div>
                    <button className="mt-2 text-sm text-purple-600 flex items-center gap-1 hover:text-purple-700">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
