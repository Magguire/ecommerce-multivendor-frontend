import DealCategoryCard from "./DealCategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const DealCategory = () => {

    // Install react-slick for movement of cards
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (

        <div>

            <div className={'text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center pt-20'}>
                <h1> TODAY'S DEAL </h1>
            </div>

            <div className="py-5 lg:px-20">

                <div className={'flex items-center justify-between'}>

                    {[1, 1, 1, 1, 1].map((item) => <DealCategoryCard/>)}

                        {/*<Slider {...settings}>*/}
                        {/*{*/}
                        {/*    [1,1,1,1,1,1,1,1,1]*/}
                        {/*        .map(*/}
                        {/*            (item) => <DealCategoryCard/>*/}
                        {/*        )*/}
                        {/*}*/}
                        {/*</Slider>*/}

                </div>


        </div>

        </div>
    )
};

export default DealCategory;