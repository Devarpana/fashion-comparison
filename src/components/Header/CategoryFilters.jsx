import {Tag} from "lucide-react";

function CategoryFilters() {
    const categories = ["All Items", "Dresses", "Shoes", "Accessories"];

    return (
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
            <Tag className="w-4 h-4" />
            {categories.map((category, index) => (
                <button
                    key={category}
                    className={`px-3 py-1 rounded-full ${
                        index === 0
                            ? "bg-purple-100 text-purple-600"
                            : "bg-gray-100 text-gray-600"
                    } text-sm whitespace-nowrap`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilters;
