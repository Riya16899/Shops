import { lazy } from "react";

const FirstScreen = lazy(() => import("../container/FirstScreen"))
const DefaultScreen = lazy(() => import("../container/DefaultScreen")) 
const ShopsDetails = lazy(() => import("../container/ShopDetails"))
const RouterList = [
    {
        name: "First Screen",
        path:"/first-screen",
        component: FirstScreen
    },
    {
        name: "Default Screen",
        path:"default-screen",
        component: DefaultScreen
    },
    {
        name: "Shops Details",
        path:"shop-details",
        component: ShopsDetails
    }
];

export default RouterList;