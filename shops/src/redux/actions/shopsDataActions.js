
  
  export const shopData = (payload) => ({
    type: "SHOP_DATA",
    payload
  });
  
  export const shopDataNextPrev = (payload) => ({
    type: "SHOP_DATA_NEXT_PREV",
    payload
  });
  
  export const shopDataPrev = () => ({
    type: "SHOP_DATA_PREV"
  });