import {Copy} from "lucide-react";

function CouponCard({coupon}) {
    const {code, discount, store, validUntil} = coupon;
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                console.log("Copied to clipboard!");
                // Optionally show a success message to the user
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
        alert("Copied to clipboard!");
    };

    return (
        <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-lg p-3 border border-purple-100">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-lg font-bold text-pink-600">
                        {discount}
                    </span>
                    <p className="text-sm text-gray-600">{store}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Valid until {new Date(validUntil).toLocaleDateString()}
                    </p>
                </div>
                <button
                    className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-pink-600 border border-pink-200 hover:bg-pink-50"
                    onClick={copyToClipboard}
                >
                    <span>{code}</span>
                    <Copy className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default CouponCard;
