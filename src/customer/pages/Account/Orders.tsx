import OrderItem from "./OrderItem";

const Orders = () => {
    return (
        <div className={"text-sm minh-screen"}>

            <div className={"pb-5"}>
                <h1 className="font-semibold">All Orders</h1>
                <p className="">from anytime</p>
            </div>
            
            <div className="space-y-2">

                {[1,1,1,1,1,1].map((item) => <OrderItem/>)}
            </div>

        </div>
    )
};

export default Orders;