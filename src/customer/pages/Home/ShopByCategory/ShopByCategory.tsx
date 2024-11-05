import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {

    return (
        <div>

            <div className={'text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center pt-5'}>
               <h1>  SHOP BY CATEGORY </h1>
            </div>

            <div className={'flex flex-wrap justify-between gap-7 lg:px-20'}>
                {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,11,1,1,1,1,11,1]
                        .map(
                        (item) => <ShopByCategoryCard/>
                    )
                }

            </div>

        </div>
    )
};

export default ShopByCategory;