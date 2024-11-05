export const mainCategory = [
    {
        name: "Men",
        categoryId: "men",
        level: 1,
        levelTwoCategory: [
            {
                name: "TopWear",
                categoryId: "men_topwear",
                parentCategoryId: "men",
                level: 2,
            },
            {
                name: "BottomWear",
                categoryId: "men_bottomwear",
                parentCategoryId: "men",
                level: 2,
            }
        ]
    },
    {
        name: "Women",
        categoryId: "women",
        level: 1,
        levelTwoCategory: [
            {
                name: "TopWear",
                categoryId: "women_topwear",
                parentCategoryId: "women",
                level: 2,
            },
            {
                name: "BottomWear",
                categoryId: "women_bottomwear",
                parentCategoryId: "women",
                level: 2,
            }
        ]

    },

    {
        name: "Home & Furniture",
        categoryId: "home&furniture",
        level: 1,
        levelTwoCategory: [
            {
                name: "Chairs",
                categoryId: "chairs",
                parentCategoryId: "home&furniture",
                level: 2,
            },
            {
                name: "Office Decor",
                categoryId: "office_decor",
                parentCategoryId: "home&furniture",
                level: 2,
            }
        ]
    },

    {
        name: "Electronics",
        categoryId: "electronics",
        level: 1

    }
];