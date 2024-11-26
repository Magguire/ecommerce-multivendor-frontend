import {Divider} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

const menu =[
    {name: "Orders", path:"/account/orders"},
    {name: "Profile", path:"/account/profile"},
    {name: "Saved Cards", path:"/account/saved-card"},
    {name: "Addresses", path:"/account/addresses"},
    {name: "Logout", path:"/"},
]

const Account = () => {

    const navigate = useNavigate(); // Requires React Router DOM, implements href

    const location = useLocation(); // Also requires React Router DOM

    const handleClick = (item: any) => {

        navigate(item.path)

    }
    return (
        <div className={"px-5 lg:px-52 min-h-screen mt-10"}>

            <div>
                <h1 className="text-xl font-bold pb-5">Zosh</h1>
            </div>

            <Divider/>

            <div className={"grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]"}>

                <section className={"col-span-1 lg:border-r lg:pr-5 py-5 h-full"}>
                    {menu.map((item) =>
                    <div
                        key={item.name}
                        className={`${item.path===location.pathname?"bg-primary-color text-white":""}
                        py-3 cursor-pointer hover:text-white hover:bg-primary-color px-5 rounded-md border-b`}
                        onClick={() => handleClick(item)}
                    >

                        <p className="">{item.name}</p>

                    </div>
                    )
                    }
                </section>

                <section className={"right lg:col-span-2 lg:pl-5 py-5"}>
                    {/*<Orders/>*/}

                    <OrderDetails/>

                </section>

            </div>

        </div>
    )
};

export default Account;