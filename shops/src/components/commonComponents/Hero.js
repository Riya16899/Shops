import React, { Fragment, useState } from "react";
import {

    useNavigate, redirect, Link
  } from "react-router-dom";




const Hero = () => {
    let navigate = useNavigate();
    
    return (
        <Fragment>
        <div className="container-fluid parent home-wrap text-center text-white">
            <div className="content-wrap child">
                <p className="f-40 f-w-600 mb-0">Shop from your favourite</p>
                <p className="f-48 f-w-700 mb-0">grocery stores!</p>
                <div class="input-group mb-3 w-max-content m-auto mt-sm-3 mt-md-3 mt-lg-4 ">
                    <input type="text" className="form-control f-16 input-btn search-input" placeholder="I am shopping for..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    {/* <Link to={'/default-screen'}> */}
                    <button class="input-group-text search-btn f-16 f-w-600"
                     id="basic-addon2" onClick={() => {
                        console.log("...")
                        // redirect("/default-screen")
                        navigate("/default-screen", {replace: true});
                     }}>Search</button>
                    {/* </Link> */}
                    
                </div>
            </div>
        </div>
        </Fragment>
        
    )
}

export default Hero;