import {faker} from "@faker-js/faker";

export const mockProducts = [
    {
        id: 1,
        name: "Summer Floral Dress",
        price: "$89.99",
        originalPrice: "$129.99",
        store: "Nordstrom",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
    },
    {
        id: 2,
        name: "Classic Leather Boots",
        price: "$159.99",
        originalPrice: "$199.99",
        store: "Macy's",
        image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=300&fit=crop",
    },
];

const generateCouponCode = () => faker.string.alphanumeric(8).toUpperCase();

export const mockCoupons = mockProducts.map((product) => ({
    id: product.id,
    code: generateCouponCode(),
    discount: `${faker.number.int({min: 10, max: 50})}% OFF`,
    store: product.store,
    validUntil: faker.date.future().toISOString().split("T")[0],
}));
