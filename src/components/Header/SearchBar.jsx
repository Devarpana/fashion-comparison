import {Search} from "lucide-react";

function SearchBar() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-white/70" />
        </div>
    );
}

export default SearchBar;
