import {Copy} from "lucide-react";

function CouponCard({coupon}) {
    const {code, discount, store, validUntil} = coupon;

    return (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-lg font-bold text-purple-600">
                        {discount}
                    </span>
                    <p className="text-sm text-gray-600">{store}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Valid until {new Date(validUntil).toLocaleDateString()}
                    </p>
                </div>
                <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-purple-600 border border-purple-200 hover:bg-purple-50">
                    <span>{code}</span>
                    <Copy className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default CouponCard;
