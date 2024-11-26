import {Avatar} from "@mui/material";
import {ElectricBolt} from "@mui/icons-material";
import {teal} from "@mui/material/colors";

const OrderItem = ()=> {

    return (
        <div className={"text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer"}>
            
            <div className="flex items-center gap-5">
                <div>

                    <Avatar sizes={"small"} sx={{bgcolor: teal[500]}}>

                        <ElectricBolt/>

                    </Avatar>

                </div>

                <div className="">
                    <h1 className="font-bold text-primary-color">PENDING</h1>
                    <p className="">Arriving by Mon, 15 Jul</p>
                </div>
            </div>

            <div className={"p-5 bg-teal-50 flex gap-3"}>
                
                <div>
                    <img
                        className={"w-[70px]"}
                        src="https://i.pinimg.com/236x/8e/bd/66/8ebd662cb8cd5890e644da78263d0a43.jpg" alt=""/>
                </div>

                <div className={"w-full space-y-2"}>
                    <h1 className="font-bold">Virani Clothing</h1>
                    <p className="">Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD |
                        BT-Calling | AI Voice | Split Screen Smartwatch (Black strap, Free size)</p>
                    <p className="">
                        <strong>Size :</strong>
                        FREE
                    </p>
                </div>



            </div>
        </div>
    )
};

export default OrderItem;