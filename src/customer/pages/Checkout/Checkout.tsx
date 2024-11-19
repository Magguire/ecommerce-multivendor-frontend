import {Box, Button, Modal, Typography} from "@mui/material";
import AddressCard from "./AddressCard";
import {useState} from "react";
import AddressForm from "./AddressForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgColor: "background.paper",
    boxShadow: 24,
    p:4
};

const Checkout = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <div className={"pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen"}>

                <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">

                    <div className="col-span-2 space-y-5">

                        <div className="flex justify-between items-center">

                            <h1 className="font-semibold">Select Address</h1>

                            <Button onClick={handleOpen}>Add new address</Button>
                        </div>

                        <div className="text-xs font-medium space-y-5">

                            <p>Saved Addresses</p>

                            <div className={"space-y-3"}>
                                {[1, 1, 1, 1, 1].map((address) => <AddressCard/>)}
                            </div>
                        </div>

                        <div className="py-4 px-5 rounded-md border">

                            <Button  onClick={handleOpen}>Add new address</Button>


                        </div>

                    </div>

                </div>

            </div>
            <Modal open={open}
                   onClose={handleClose}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                   <AddressForm/>

                </Box>

            </Modal>
        </div>
    )
};

export default Checkout;