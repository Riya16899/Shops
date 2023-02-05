
const shops = [
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "12",
    },
    {
        name: "Chocolate Shop",
        address: "Castle Hill, NSW AU 2154",
        reviews: "18",
    },
    {
        name: "Mix shop",
        address: "Castle Hill, NSW AU 2154",
        reviews: "20",
    },
    {
        name: "Alchemist",
        address: "Castle Hill, NSW AU 2154",
        reviews: "24",
    },
    {
        name: "Fruit Shop",
        address: "Castle Hill, NSW AU 2154",
        reviews: "2",
    },
    {
        name: "Veg shop",
        address: "Castle Hill, NSW AU 2154",
        reviews: "4",
    },
    {
        name: "Chemist Warehouse",
        address: " MUI HU 34",
        reviews: "24",
    },
    {
        name: "Chemist Warehouse",
        address: " NSW AU 2154",
        reviews: "2",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "4",
    }
]
  const initialState = {
    data: shops
  };
  
  const ShopsDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOP_DATA":
        return { ...state,  };
      case "SHOP_DATA_NEXT_PREV":
        const t = initialState?.data?.slice(action?.payload?.form?.itemOffset, action?.payload?.form?.endOffset)
        return { ...state,  data: t };
      case "SHOP_DATA_PREV":
        return { ...state };
      default:
        return state;
    }
  };
  
  export default ShopsDataReducer;