import "./ProductCard.css"
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {Favorite, ModeComment} from "@mui/icons-material";
import {teal} from "@mui/material/colors";

const images = [
    "https://i.pinimg.com/236x/92/e8/48/92e848d147dcae2e52ad5ca14a0fcd83.jpg",
    "https://i.pinimg.com/236x/55/4c/27/554c272f556700f6ef8d463d9eca26cc.jpg"
];

const ProductCard = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

        let interval: any; // setInterval and clearInterval are time functions in JS
            // to execute code snippet after every (interval value)

        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length );
            }, 1000); // Change on every 1 second

        } else if(interval) {
            clearInterval(interval);
            interval = null;
        }

        return () => clearInterval(interval);

    }, [isHovered] // Trigger useEffect when isHovered value changes

    )

    return (
        <div>

            <div className={"group px-4 relative"}>

                <div className={"card"}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>

                    {images.map((image, index) =>
                        <img
                            className={"card-media object-top"}
                            src={image}
                            style={{transform: `translateX(${(index - currentImage) * 100}%)`}}
                            alt=""/>)}

                    { isHovered && <div className={"indicator flex flex-col items-center space-y-2"}>
                        {/* Indicator class moves items down */}

                        <div className={"flex gap-3"}>

                            <Button variant={"contained"}  color={"secondary"}>

                                <Favorite sx={{color: teal[500]}}/>

                            </Button>

                            <Button variant={"contained"}  color={"secondary"}>

                                <ModeComment sx={{color: teal[500]}}/>

                            </Button>

                        </div>

                    </div> }


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
    );
}

export default ProductCard;