import {Box, Button, FormControlLabel, Modal, Radio, RadioGroup} from "@mui/material";
import AddressCard from "./AddressCard";
import {useState} from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p:4
};

const paymentGatewayList = [

    {
        value: "RAZORPAY",
        image: "data:image/jpeg;base64,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",
        label: "razorpay"
    },
    {
        value: "STRIPE",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAwCAMAAADtsU7hAAAAY1BMVEX///9ncuVlcOVgbORjbuRdaeT9/f9YZePY2veTmuxWY+Pm5/p9huiMlOpxe+ZaZ+OxtvDHy/VteObS1fbw8fx2gOeqr/Df4fmJker4+f68wPKWnez19f3Mz/WBiumiqO5QXuKBi5JuAAAD1UlEQVRYhe2YWYODKAyARQ6tF2pRW8/+/1+5QQNitTPdsTMvu3kSSfNBLrCed07u8UkDPxDRtB15pH+NVWUgKSPs8tfgOCJafgmswjx8BQ5+CawjWHIZFX8NDh+cgWH+FdhnNPp4coV83tFr8EPKqmub+6fB12/Aqg77TzPfAn9QVDgUxbVRW/CwV+zj+JWDRQMm1P79vQHbzZGLVF5xyTmXkmfdICyYlBkIGTzB9EM2eiqlEF0vJvO47CAdCD71E5HaRPK02jBlUk/Q2644W0p9guKzKF/BxAeRhSei+YnFhMK7SjcQPaZQTqHUj6wMKcWfBKOzuT4NmLEl062vOklcoS4YIy2WTuVneoEavNYxFgCh6w8Ysf6O3feEZq6/8y33KzCu/BDsCisFxpD524lKrPF94n4CTGi3GE/Y0wSf1g2b0EBycb1AF+wzEPkmmFFqObKZkwc3xWlpMkDaI7zy0QntMLRTBfQV7Fc3kPHqgKlktDwEyzFvO46unbu4MDN5793zRY/aLRtNDLtqy3pfxxbM6/gO944jcLgkE9qjYK9YNiyXNoTbpxhlgd5ha6arfecyYNZgsu7AOkDzjPEurDmdbbNx41t5xaEJ0Oi2nBdgPzFVsgfXODVR41KBTy3O1HSjeDNbDm6F+AC4kUYVlbhpWMUMZjccDracGI8u4WmwSZrSWpbRIqYNG8XR7TlB1pwFJ0j22qMK1xNW01XwH/VJsIkdHAGHXLY2rzxyVQJdx/IXwd4qfc3k2tyi+BS4Mq4u3PbniLeR6yUwC4RK+AHYdCQsIj8zyeUn6Va8J7nbY6o8A8b0YKlRsnX8WkLTdc6AMcTQyczekwMUSJevLQudzQWCWfc2mCEY+zMJoCOkS7Tl5spoW3MX0HRY2IiDvDPH4rzle/8GGLaoTa61C0VjsktaZ6siszeyDj76OK/SaRpRD7q6afWEZ7fEufp8ASaUViOxg9kBZhGcdHnb5h0cuvaM0GBtUue8UYMF2uLymf8mWBuxj1y5fteXBA7XBN85nBDsim4tk1P8b4NXkXhIprse8gVYp4XXnwJTcwSL5JnsgLdTTC7RD6X123tgtm6Aj7Ydi0uwvWdGFnwdlzve/GMqU1NcTckXUwy+ksWDauGVAS9jmTrldFlu7j7ltntqGbKArubL3LnTq6JLICc5K2+58zeOaBOfU3jZgm6dz2LqQuG4cHt1eCFgpKqfv57CqYIJbSlvvJ30Su2/qu5HL5/NuoeEUscfdEK9mvm57E6nv5L/wf8RMNyMp+9VPwyOeFR2bSy+V/2sxHnz75n/ACz0PdMkeZ8ZAAAAAElFTkSuQmCC",
        label: "stripe"
    },
]

const Checkout = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

    const handlePaymentChange = (e: any) => {

        setPaymentGateway(e.target.value);
    }

    return (

        <>
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

                            <Button onClick={handleOpen}>Add new address</Button>


                        </div>

                    </div>

                    <div className={"w-[350px]"}>

                        <div>

                            <div className={"space-y-3 border p-5 rounded-md"}>

                                <h1
                                    className="font-medium text-primary-color text-center pb-2">
                                    Choose Payment Method
                                </h1>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    className={"flex justify-between pr-0"}
                                    onChange={handlePaymentChange}
                                    value={paymentGateway}
                                    // value={value}
                                    // onChange={handleChange}
                                >

                                    {paymentGatewayList.map((item) =>

                                        <FormControlLabel
                                            className={"border w-[45%] pr-2 rounded-md flex justify-center"}
                                            value={item.value}
                                            control={<Radio/>}
                                            label={
                                                <img
                                                    className={`${item.value === "STRIPE" ? "w-14" : ""} object-cover`}
                                                    src={item.image} alt={item.label}/>
                                            }/>
                                    )}


                                </RadioGroup>

                            </div>
                        </div>

                        <div className="border rounded-md">

                            <PricingCard/>

                            <div className="p-5">

                                <Button
                                    fullWidth
                                    variant={"contained"}
                                    sx={{py: "11px"}}>Checkout</Button>

                            </div>

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
        </>
    )
};

export default Checkout;