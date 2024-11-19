import {Divider} from "@mui/material";

const PricingCard = () => {

    return (
        <div className="">

            <div className="space-y-3 p-5">

                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>₹899</span>
                </div>

                <div className="flex justify-between items-center">
                    <span>Discount</span>
                    <span>₹699</span>
                </div>

                <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span>₹49</span>
                </div>

                <div className="flex justify-between items-center">
                    <span>Platform fee</span>
                    <span>free</span>
                </div>

                <Divider/>

                <div className="flex justify-between items-center font-bold pt-5 text-primary-color">
                    <span>Total</span>
                    <span>₹2800</span>
                </div>

            </div>


        </div>
    )
};

export default PricingCard;