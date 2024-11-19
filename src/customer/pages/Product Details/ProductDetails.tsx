import StarIcon from '@mui/icons-material/Star'
import {teal} from "@mui/material/colors";
import {Button, Divider} from "@mui/material";
import {
    Add,
    AddShoppingCart,
    FavoriteBorder,
    LocalShipping,
    Remove,
    Shield,
    Wallet,
    WorkspacePremium
} from "@mui/icons-material";
import {useState} from "react";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    return (

        <div className={"px-5 lg:px-20 pt-10"}>

            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10"}>

                <section className="flex flex-col lg:flex-row gap-5">

                    <div
                        className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3"> {/* All images of the product*/}
                        {[1, 1, 1, 1].map((item) =>
                            <img className={"lg:w-full w-[50px] cursor-pointer rounded-md"}
                                 src="https://i.pinimg.com/236x/55/4c/27/554c272f556700f6ef8d463d9eca26cc.jpg"
                                 alt=""/>)}
                    </div>

                    <div className="w-full lg:w-[85%]"> {/* Main image of the product */}

                        <img className={"w-full rounded-md"}
                             src="https://i.pinimg.com/236x/92/e8/48/92e848d147dcae2e52ad5ca14a0fcd83.jpg" alt=""/>

                    </div>
                </section>


                <section className="">

                    <h1 className="font-bold text-lg text-primary-color">Raam Clothing</h1>
                    <p className="text-gray-500 font-semibold">Men Black Shirt</p>
                    <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">

                        <div className="flex gap-1 items-center">

                            <span>4</span>

                            <StarIcon sx={{color: teal[500], fontSize: "70PX",}}/>

                        </div>

                        <Divider orientation="vertical" flexItem/>

                        <span>234 Ratings</span>

                    </div>

                    <div className="">

                        <div className={"price flex items-center gap-3 mt-5 text-2xl"}>

                        <span className="font-sans text-gray-800"> {/* ₹ for rupees */}
                            ₹ 400
                        </span>

                            <span className="line-through text-gray-400">
                            ₹ 999
                        </span>

                            <span className="text-primary-color font-semibold">
                            60%
                        </span>

                        </div>

                        <p className="text-sm">Inclusive of all taxes. Free shipping above ₹1500.</p>

                    </div>

                    <div className="mt-7 space-y-3">

                        <div className="flex items-center gap-4">

                            <Shield sx={{color: teal[500]}}/>

                            <p className="">Authentic and Quality Assured</p>

                        </div>

                        <div className="flex items-center gap-4">

                            <WorkspacePremium sx={{color: teal[500]}}/>

                            <p className="">100% money back guarantee</p>

                        </div>

                        <div className="flex items-center gap-4">

                            <LocalShipping sx={{color: teal[500]}}/>

                            <p className="">Free Shipping & Returns</p>

                        </div>

                        <div className="flex items-center gap-4">

                            <Wallet sx={{color: teal[500]}}/>

                            <p className="">Pay on delivery might be available</p>

                        </div>


                    </div>
                    
                    <div className="mt-7 space-y-2">

                        <h1 className="">QUANTITY</h1>

                        <div className="flex items-center gap-2 w-[140px] justify-between">

                            <Button disabled={quantity===1} onClick={() => setQuantity(quantity - 1)}>
                                <Remove/>
                            </Button>

                            <Button onClick={() => setQuantity(quantity + 1)}>
                                <Add/>
                            </Button>
                            
                            {/*<span className="">{quantity}</span>*/}


                        </div>
                    </div>
                    
                    
                    <div className="mt-12 flex items-center gap-5">

                        <Button
                            fullWidth
                            sx={{py:"1rem"}}
                            variant="contained"
                            startIcon={<AddShoppingCart/>}
                        >
                            Add to cart
                        </Button>

                        <Button
                            fullWidth
                            sx={{py:"1rem"}}
                            variant="outlined"
                            startIcon={<FavoriteBorder/>}
                        >
                            Add to Wishlist
                        </Button>

                    </div>

                    <div className="mt-5">
                        <p className="">
                            The saree comes with an unstitched blouse piece.
                            The blouse worn by the model might be for modelling purposes only.
                            Check the image of the blouse piece to understand how the actual blouse piece looks like.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-5">

                        <ReviewCard/>

                        <Divider/>

                    </div>

                    <div className="mt-20">

                        <h1 className="text-lg font-bold">Similar Products</h1>
                        
                        <div className="pt-5"></div>

                        <SimilarProduct/>

                    </div>
                    

                </section>

            </div>


        </div>
    )
};

export default ProductDetails;