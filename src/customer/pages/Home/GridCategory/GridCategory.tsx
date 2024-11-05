const GridCategory = () => {

    return (
        <div>

            <div className={'text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center mt-20'}>
                <h1> SHOP BY GRID </h1>
            </div>

            <div className={'grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'}>

                <div className={'col-span-3 row-span-12 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/236x/af/21/12/af211223852f287af48bd3a675f1b833.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                    <div className={'col-span-2 row-span-6 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/236x/fc/fc/3b/fcfc3b36c2f502b3a7bf11f8bcb01dfd.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                    <div className={'col-span-4 row-span-6 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/474x/32/2e/ea/322eea59edde45fc36c9da5e15a976b2.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                    <div className={'col-span-3 row-span-12 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/236x/bc/2c/55/bc2c55fd8cffe89ad15277dec6f8a07d.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                    <div className={'col-span-4 row-span-6 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/236x/26/27/6f/26276f5608e1cff3980f214f0778bb31.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                    <div className={'col-span-2 row-span-6 text-white rounded'}>

                        <img className={'w-full h-full object-cover object-top rounded-md'}
                            src="https://i.pinimg.com/236x/fd/63/53/fd6353131bad8b15e846d5a09854f54c.jpg"
                             alt="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"/>

                    </div>

                </div>

        </div>

    )
}

export default GridCategory;