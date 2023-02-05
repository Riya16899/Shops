import React, { Fragment } from "react";

const Footer = () => {
    
    return (
        <Fragment>
            <div className="mt-4" style={{ width:"100%", backgroundColor:"#16161A"}}>
                <div className="row text-white p-4 mx-0">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p className="f-16">POPULAR</p>
                        <p className="f-14">Castle Hill</p>
                        <p  className="f-14">Kelly ville</p>
                        <p className="f-14">CherryBrook</p>
                        <p className="f-14">Baulkham Hills</p>
                        <p className="f-14">Peannut Hiils</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p className="f-16">PAGES</p>
                        <p className="f-14">About us</p>
                        <p className="f-14">Shop registration</p>
                        <p className="f-14">Shop & dive for us</p>
                        <p className="f-14">Terms & Conditions</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p className="f-16">KEEP IN TOUCH</p>
                        <p className="f-14">Contact us</p>
                        <p className="f-14">Help center</p>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Footer;