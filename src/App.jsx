import React from "react";
import {Sparkles} from "lucide-react";
import SearchBar from "./components/Header/SearchBar";
import CategoryFilters from "./components/Header/CategoryFilters";
import ProductList from "./components/Products/ProductList";
import CouponSection from "./components/Coupons/CouponSection";

function App() {
    return (
        <div className="w-[400px] min-h-[600px] bg-white">
            <header className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Sparkles className="w-6 h-6" />
                        Alstylist
                    </h1>
                </div>
                <SearchBar />
            </header>

            <main className="p-4">
                <CategoryFilters />
                <ProductList />
                <CouponSection />
            </main>
        </div>
    );
}

export default App;
