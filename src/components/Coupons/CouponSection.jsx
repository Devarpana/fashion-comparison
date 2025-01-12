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
                {mockCoupons.length > 0 ? (
                    mockCoupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))
                ) : (
                    <p className="text-sm text-gray-600">
                        No coupons are currently available. Check back later!
                    </p>
                )}
            </div>
        </div>
    );
}

export default CouponSection;
