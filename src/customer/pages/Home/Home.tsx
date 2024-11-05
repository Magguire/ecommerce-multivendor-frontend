import ElectricCategory from "./ElectricCategory/ElectricCategory";
import GridCategory from "./GridCategory/GridCategory";
import DealCategory from "./DealCategory/DealCategory";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import React from "react";
import {Button} from "@mui/material";
import {Storefront} from "@mui/icons-material";

const Home = () => {
    return (
        <div>
            <div className={'space-y-5 lg:space-y-10 relative pb-20'}>

                <ElectricCategory/>
                <GridCategory/>
                <DealCategory/>


                <section className={'py-20'}>
                    <ShopByCategory/>
                </section>

                <section className={'relative h-[200px] lg:h-[450px] object-cover flex justify-end bg-black'}>

                        <img className={'w-1/2 object-cover'}
                             src="https://images.pexels.com/photos/2291017/pexels-photo-2291017.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>

                    <div className={'absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold ' +
                        'lg:text-4xl space-y-3 text-secondary-color'}>

                        <h1>Sell your Product</h1>
                        <p className={'text-lg md:text-2xl'}>With<span className='logo text-primary-color pl-5'>eShop Mali</span></p>
                        <div className={'pt-6 flex justify-center'}>
                            <Button startIcon={<Storefront/>} variant="contained" size="large">
                                Become Seller

                            </Button>
                        </div>


                    </div>
                </section>

            </div>
        </div>
    );
}

export default Home;