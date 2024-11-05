import {Avatar, Box, Button, IconButton, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {FavoriteBorder, Storefront} from "@mui/icons-material";
import Category from "./Category";
import {mainCategory} from "../../data/category/mainCategory";
import {useState} from "react";



const Navbar = () => {

    const theme = useTheme();

    // Use media query hook -> Components with lg will be visible in large screens only
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategory, setShowCategory] = useState(false);

    return (

            <Box className={'sticky top-0 left-0 right-0 bg-white'}>
                <div className={'flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'}>
                    <div className={'flex items-center gap-9'}>
                        <div className='flex items-center gap-2'>
                            { !isLarge && <IconButton>
                                <MenuIcon/>
                            </IconButton>}
                            <h1 className='logo cursor-pointer text-lg md:text-2xl text-primary-color'> eShop Mali</h1>
                        </div>
                        <ul className={'flex items-center font-medium text-gray-800'}>
                            {mainCategory
                                .map((item) =>
                                    <li
                                        onMouseLeave={() => {
                                            setShowCategory(false);
                                        }}
                                        onMouseEnter={() => {
                                            setShowCategory(true);
                                            setSelectedCategory(item.categoryId);
                                        }}
                                         className={'mainCategory ' +
                                        'hover:text-primary-color ' +
                                        'hover:border-b-2 h-[70px] px-4 border-primary-color ' +
                                        'flex items-center'}>
                                        {item.name}
                                    </li>)
                            }
                        </ul>
                    </div>

                    <div className={'flex gap-1 lg:gap-6 items-center'}>
                        <IconButton>
                            <SearchIcon name="search"/>
                        </IconButton>

                        {/*Create logic to show username when user is loggged in*/}
                        { true ? <Button className={'flex items-center gap-2'}>

                            <Avatar
                                sx={{width:29, height:29}}
                                src={'https://i.pinimg.com/474x/f8/2d/de/f82dde44cba34fac0e005cb75c29dfbf.jpg'}
                            />

                            {/*https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg*/}

                            <h1 className={'font-semibold hidden lg:block'}>Magguire</h1>

                        </Button> : <Button variant='contained'> Login </Button> }

                        <IconButton name={'wishlist-icon'}>
                            <FavoriteBorder sx={{fontSize:29}}/>
                        </IconButton>
                        <IconButton name={'shopping-cart'}>
                            <AddShoppingCartIcon sx={{fontSize:29}} className={'text-gray-700'}/>
                        </IconButton>

                        { isLarge && <Button startIcon={<Storefront/>} variant={'outlined'}>
                            Become Seller
                        </Button>}

                    </div>
                </div>

                { showCategory && <div onMouseLeave={() => setShowCategory(false)}
                      onMouseEnter={() => setShowCategory(true)}
                      className={'category absolute top-[4.41rem] left-20 right-20 border bg-slate-500'}>
                    <Category selectedCategory={selectedCategory}/>
                </div>}
            </Box>
    )
}

export default Navbar;