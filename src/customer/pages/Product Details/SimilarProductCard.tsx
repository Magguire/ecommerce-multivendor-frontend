import {Button} from "@mui/material";
import {Favorite, ModeComment} from "@mui/icons-material";
import {teal} from "@mui/material/colors";

const SimilarProductCard = () => {

    return (

        <div>

            <div className={"group px-4 relative"}>

                <div className={"card"}>

                        <img
                            className={"card-media object-top"}
                            src="https://i.pinimg.com/236x/92/e8/48/92e848d147dcae2e52ad5ca14a0fcd83.jpg"
                            alt=""/>


                </div>

                <div className={"details pt-3 space-y-1 group-hover-effect rounded-md"}>

                    <div className={"name"}>

                        <h1>Nike</h1> {/* Brand Name */}
                        <p>Blue Shirt</p>  {/* Product Name */}

                    </div>

                    <div className={"price flex items-center gap-3"}>

                        <span className="font-sans text-gray-800"> {/* ₹ for rupees */}
                            ₹ 400
                        </span>

                        <span className="thin-line-through text-gray-400">
                            ₹ 999
                        </span>

                        <span className="text-primary-color font-semibold">
                            60%
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
};


export default SimilarProductCard;