import React, { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouterList from "./routeList";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import FirstScreen from "../container/FirstScreen";

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"/>
    </div>
  );

const RouteComp = memo(() => {
    return (
        <BrowserRouter>
         <React.Suspense fallback={loading}>
         <Header />
        <Routes>
            {RouterList.map((itm, index) => (
                <Route key={index}
                    path={itm.path}
                    name={itm.name}
                    element={<itm.component />}
                />
            ))}
            <Route path="/" element={<FirstScreen />} />
        </Routes>
        <Footer />
         </React.Suspense>
        
        </BrowserRouter>
    )
})

export default RouteComp;