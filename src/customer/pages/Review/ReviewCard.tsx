import {Avatar, Box, Grid2, IconButton, Rating} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {red} from "@mui/material/colors";

const ReviewCard = () => {

    return (

        <div className="flex justify-between">


            <Grid2 container spacing={10} gap={3}> {/* Removed gap-3 */}

                 <Grid2 size={{xs: 1}}>
                        <Box>
                            <Avatar className={"text-white"} sx={{width:56, height:56, backgroundColor: "#9155FD"}}>
                                    Z
                            </Avatar>
                        </Box>
                </Grid2>

                <Grid2 size={{xs:9}}>
                    
                    <div className="space-y-2">

                        <div className="">

                            <p className="font-semibold text-lg">Zosh</p>

                            <p className="opacity-70">2024-11-19T14:54:39.478333</p>

                        </div>
                    </div>

                    <Rating
                        readOnly
                        value={4.5}
                        precision={.5}/> {/* Precision 0.5 allows for half values */}
                    
                    <p className="">value for money, great product</p>
                    
                    <div className="">

                        <img className={"w-[24] h-[24] object-cover"}
                             src="https://i.pinimg.com/236x/a5/6e/c7/a56ec77b3dfba6381c5107cbb658f32f.jpg" alt=""/>
                    </div>


                </Grid2>

            </Grid2>

            <div>
                <IconButton>

                    <Delete sx={{color: red[700]}}/>

                </IconButton>

            </div>

        </div>

    )


};


export default ReviewCard;