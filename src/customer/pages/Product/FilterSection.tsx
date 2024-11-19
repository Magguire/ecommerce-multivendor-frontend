import {Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {teal} from "@mui/material/colors";
import {colors} from "../../../data/Filter/color";
import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {discounts} from "../../../data/Filter/discount";
import {prices} from "../../../data/Filter/price";
import {clear} from "@testing-library/user-event/dist/clear";

const FilterSection = () => {
    const [expandColor, setExpandColor] = useState(false);
    const [expandBrand, setExpandBrand] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams(); // Install react-router-dom


    const handleExpandColor = () => {
        setExpandColor(!expandColor);
    };

    const updateFilterParams = (e: any) => {
            const { value, name } = e.target;

            if (value) {
                searchParams.set(name, value);

            } else {
                searchParams.delete(name);
            }

            setSearchParams(searchParams);
    };

    const clearAllFilters = () => {
        console.log("clearAllFilters", searchParams);
        searchParams.forEach((value: any, key: any) => {
            searchParams.delete(key);
        });

        setSearchParams();

    }

    return (
        <div className='-z-50 space-y-5 bg-white'>

            <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">

                <p className="text-lg font-semibold">Filters</p>
                <Button onClick={clearAllFilters} size={"small"} className={"text-teal-600 cursor-pointer font-semibold"}>Clear all</Button>
            </div>

            <Divider/>

            <div className={"px-9 space-y-6"}>
                <section>

                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: teal[500],
                                pb: "14px"
                            }}
                            id="color"
                            className={"text-2xl font-semibold"}>Color</FormLabel>
                        <RadioGroup
                            aria-labelledby="color"
                            defaultValue=""
                            name="color"
                            onChange={updateFilterParams}
                        >
                            {colors.slice(0, expandColor ? colors.length : 5).map((color) =>
                                <FormControlLabel value={color.name} control={<Radio/>} label={
                                    <div className={"flex items-center gap-3"}>
                                        <p>{color.name}</p>
                                        <p style={{backgroundColor: color.hex}}
                                           className={`h-5 w-5 rounded-full ${color.name === 'White' ? 'border' : ''}`}></p>
                                    </div>
                                }/>)}


                        </RadioGroup>
                    </FormControl>

                    <div className="">
                        <button
                            onClick={handleExpandColor}
                            className={"text-primary-color cursor-pointer hover:text-teal-900 flex items-center"}>
                            {expandColor ? "hide" : `+${colors.length - 5} more`}
                        </button>
                    </div>

                </section>

                <section>

                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: teal[500],
                                pb: "14px"
                            }}
                            id="discount"
                            className={"text-2xl font-semibold"}>Discount</FormLabel>
                        <RadioGroup
                            aria-labelledby="discount"
                            onChange={updateFilterParams}
                            defaultValue=""
                            name="discount"
                        >
                            {discounts.map((item, index) =>
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size="small"/>}
                                    label={item.name}/>)}


                        </RadioGroup>
                    </FormControl>

                </section>

                <section>

                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: teal[600],
                                pb: "14px"
                            }}
                            id="price"
                            className={"text-2xl font-semibold"}>Price</FormLabel>
                        <RadioGroup
                            aria-labelledby="price"
                            defaultValue=""
                            onChange={updateFilterParams}
                            name="price"
                        >
                            {prices.map((item, index) =>
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size={"small"}/>}
                                    label={item.name}/>)}


                        </RadioGroup>
                    </FormControl>

                </section>

            </div>
        </div>
    );

}

export default FilterSection;