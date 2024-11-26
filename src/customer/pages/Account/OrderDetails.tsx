import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {

    const navigate = useNavigate();

    return (

            <Box className={"space-y-5"}>

                <section className={"flex flex-col gap-5 justify-center items-center"}>

                    <img src="https://i.pinimg.com/236x/8e/bd/66/8ebd662cb8cd5890e644da78263d0a43.jpg"
                         alt=""
                         className="w-[100px]"/>
                    
                    <div className="text-sm space-y-1 text-center">
                        
                        <h1 className="font-bold">Virani Clothing</h1>
                        <p className="">Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD |
                            BT-Calling | AI Voice | Split Screen Smartwatch (Black strap, Free size)
                        </p>
                        <p>
                            <strong>Size :</strong>
                            Free
                        </p>

                    </div>

                    <div className="">
                        <Button
                            onClick={() => navigate(`/reviews/${5}/create`)}>Write Review</Button>
                    </div>

                </section>
                
                <section className="border p-5">

                    <OrderStepper orderStatus={"SHIPPED"}/>


                </section>

            </Box>
    )
};

export default OrderDetails;