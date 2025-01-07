import {Ticket} from "lucide-react";
import CouponCard from "./CouponCard";
import {mockCoupons} from "../../data/mockData";

function CouponSection() {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Ticket className="w-5 h-5" />
                Available Coupons
            </h2>
            <div className="mt-3 space-y-3">
                {mockCoupons.map((coupon) => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
        </div>
    );
}

export default CouponSection;
