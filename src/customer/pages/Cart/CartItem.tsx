import {Button, Divider, IconButton} from "@mui/material";
import {Add, Close, Remove} from "@mui/icons-material";

const CartItem = () => {

    const handleUpdateQuantity = () => {


    };
    
    return (
        <div className="border rounded-md relative">

            <div className="p-5 flex gap-3">
                <div className="">
                    <img className={"w-[90px] rounded-md"}
                         src="https://i.pinimg.com/236x/35/0a/ce/350acece2552b57480675b873e3460b8.jpg" alt=""/>
                </div>

                <div className="space-y-2">

                    <h1 className="font-semibold text-lg">Raam Clothing</h1>
                    <p className={"text-gray-600 font-medium text-sm"}>Turquoise Blue Stonework Satin Designer Saree</p>
                    <p className={"text-gray-400 text-xs"}><strong> Sold by:</strong> He.Lenah Products Private Limited
                    </p>
                    <p className={"text-sm"}> 7 Days Replacement Available</p>
                    <p className={"text-sm text-gray-600"}><strong>quantity: </strong>5</p>

                </div>

            </div>


            <Divider/>

            <div className="flex justify-between items-center">

                <div className="px-5 py-2 flex items-center justify-between">

                    <div className="flex items-center gap-2 w-[140px] justify-between">

                        <Button disabled={true} onClick={handleUpdateQuantity}>
                            <Remove/>
                        </Button>

                        <Button onClick={handleUpdateQuantity}>
                            <Add/>
                        </Button>

                    </div>
                </div>

                <div className="pr-5">

                    <p className="text-gray-700 font-medium">₹799</p>
                </div>

            </div>
            
            <div className="absolute top-1 right-1">

                <IconButton color={"primary"}>
                    <Close/>
                </IconButton>


            </div>

        </div>
    )
};

export default CartItem;