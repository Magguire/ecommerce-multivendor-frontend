import CartItem from "./CartItem";
import {Close, LocalOffer} from "@mui/icons-material";
import {teal} from "@mui/material/colors";
import {Button, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import PricingCard from "./PricingCard";

const Cart = () => {

    const [couponCode, setCouponCode] = useState("");

    const handleChange = (e: any) => {

        setCouponCode(e.target.value);
    };
    
    return (
        <div className={"pt-10 px-5 sm:px-10 md:px-60 min-h-screen"}>
            <div className={"grid grid-cols-1 lg:grid-cols-3 gap-5"}>
                
                <div className="cart-item-section lg:col-span-2 space-y-3"> {/* Left side */}


                    {[1,1,1,1,1].map((item) => <CartItem/>)}

                </div>
                
                <div className="col-span-1 text-sm space-y-3"> {/* Right side */}

                    <div className={"border rounded-md px-5 py-3 space-y-5"}> {/* Coupon section */}

                        <div className="flex gap-3 text-sm items-center">

                            <div className="flex gap-3 text-sm items-center ">

                                <LocalOffer sx={{color: teal[600], fontSize: "17px"}}/>
                            </div>

                            <span className="">Apply coupons</span>

                        </div>

                        { true? <div className="flex justify-between items-center">

                            <TextField
                                id={"outlined-basic"}
                                onChange={handleChange}
                                placeholder={'coupon code'}
                                size={"small"}
                                variant={'outlined'}/>

                            <Button size={"small"}>Apply</Button>

                        </div> : <div className={"flex"}>
                            
                            <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">

                                <span className={""}>ZOSH3O Applied</span>
                                <IconButton size={"small"}>
                                    <Close className={"text-red-600"}/>
                                </IconButton>
                            </div>

                        </div>}

                    </div>

                    <div className="border rounded-md">

                        <PricingCard/>

                        <div className="p-5">

                            <Button
                                fullWidth
                                variant={"contained"}
                                sx={{py:"11px"}}>Buy Now</Button>

                        </div>

                    </div>


                </div>

            </div>
        </div>

    )
};

export default Cart;