import {menLevelTwo} from "../../data/category/level two/menLevelTwo";
import {womenLevelTwo} from "../../data/category/level two/womenLevelTwo";
import {electronicsLevelTwo} from "../../data/category/level two/electronicsLevelTwo";
import {homeFurnitureLevelTwo} from "../../data/category/level two/homeFurnitureLevelTwo";
import {electronicsLevelThree} from "../../data/category/level three/electronicsLevelThree";
import {homeFurnitureLevelThree} from "../../data/category/level three/homeFurnitureLevelThree";
import {womenLevelThree} from "../../data/category/level three/womenLevelThree";
import {menLevelThree} from "../../data/category/level three/menLevelThree";
import {Box} from "@mui/material";

const categoryThree:{[key:string]:any[]} = {

    // {[key:string]:any[]} - Object where the key is a string and the value is an array of elements with different datatypes

    men: menLevelThree,
    women: womenLevelThree,
    homeFurniture: homeFurnitureLevelThree,
    electronics: electronicsLevelThree
};

const categoryTwo:{[key:string]:any[]} = {

    men: menLevelTwo,
    women: womenLevelTwo,
    homeFurniture: homeFurnitureLevelTwo,
    electronics: electronicsLevelTwo

};

const category = ({selectedCategory, setShowSheet}:any) => {

    const childCategory = (category:any, parentCategoryId:any)=> {

        return category.filter((child:any) => child.parentCategoryId === parentCategoryId);
    }

    return ( // sx={{zIndex:2}}
      <Box
          className={'z-[2] bg-white shadow-lg lg:h-[500px] overflow-y-auto'}>

          <div className={'flex text-sm flex-wrap gap-[200px]'}>

              {
                  categoryTwo[selectedCategory]?.map((item, index) =>
                  <div className={`p-8 lg:w-[20%] ${index%2===0?"bg-slate-50":"bg-white"}`}>
                      <p className={'text-primary-color mb-5 font-semibold'}>{item.name}</p>
                      <ul className={'space-y-3'}>

                          {childCategory(categoryThree[selectedCategory], item.categoryId)
                              .map((item:any) => <div>
                                  <li className={'hover:text-primary-color cursor-pointer'}>{item.name}</li>
                              </div>)}


                      </ul>
                  </div>)
              }

          </div>

      </Box>
    )
};

export default category;
