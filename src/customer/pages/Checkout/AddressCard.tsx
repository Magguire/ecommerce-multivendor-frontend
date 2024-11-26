import {Radio} from "@mui/material";

const AddressCard= () => {

    const handleChange = (event: any)=> {

        console.log(event.target.checked);

    };

    return (

        <div className="p-5 border rounded-md flex">
            
            <div className="">

                <Radio
                    checked={true}
                    onChange={handleChange}
                    value={""}
                    name={"radio-button"}
                />
            </div>
            
            <div className="space-y-3 pt-3">

                <h1>Zosh</h1> {/*Username*/}

                <p className="w-[320px]">
                    Ambavadi choke, Banglor, Karnataka - 530068
                </p>
                
                <p className=""><strong>Mobile :</strong> 254702509105</p>

            </div>

        </div>
    )
};

export default AddressCard;