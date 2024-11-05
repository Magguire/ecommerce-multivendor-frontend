import "./ShopByCategory.css";

const shopByCategoryCard = () => {

    return (
        <div className={'flex gap-3 flex-col justify-center items-center group cursor-pointer'}>

            <div className={'custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'}>
                <img
                    className={'rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'}
                    src="https://i.pinimg.com/236x/3f/b1/2a/3fb12a3da879c72e3d566581b15ff30d.jpg" alt=""/>
            </div>
            <h1>Kitenge Tops</h1>

        </div>
    )

};

export default shopByCategoryCard;