import { Divider } from "@mui/material";
import ReviewCard from "./ReviewCard";


const Review = () => {
    return (

        <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">

            <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">

                <img src="https://i.pinimg.com/236x/a5/6e/c7/a56ec77b3dfba6381c5107cbb658f32f.jpg" alt="" className=""/>

                <div className="">

                    <div className="">
                        <p className="font-bold text-xl">Raam Clothing</p>

                        <p className="text-lg text-gray-600">Men's White Shirt</p>
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


                    </div>

                </div>

            </section>

            <section className="">

                {[1,1,1,1,1,1,1,1].map((item) =>
                    <div className={"space-y-6 w-full"}> <ReviewCard/>
                        <Divider/>
                    </div>)}


            </section>
        </div>


    );
}

export default Review;