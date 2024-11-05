const DealCategoryCard = () => {

    return (
        <div className={'w-[13rem] cursor-pointer'}>

            <img className={'border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-contain object-top'}
                 src="https://i.pinimg.com/236x/51/6a/43/516a43a0069cf499729c6b4e5058ea28.jpg" alt=""/>
            <div className={'border-4 border-black bg-black text-white p-2 text-center'}>
                <p className={'text-lg font-semibold'}>Smart Watch</p>
                <p className={'text-2xl font-bold'}>20% OFF</p>
                <p className={'text-balance text-lg'}>Shop Now</p>
            </div>

        </div>
    )
};

export default DealCategoryCard;