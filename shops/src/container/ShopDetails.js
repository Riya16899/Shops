import React, { Fragment, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from "react-redux";

import Picture from "../assets/images/Photo.png"
import Logo from "../assets/images/LOGO.png";

import {  shopDataNextPrev } from "../redux/actions";

const categories = [
    {
        name: "All",
        selected: true
    },
    {
        name: "Friuts",
        selected: false
    },
    {
        name: "Vegetables",
        selected: false
    }
]

const shops = [
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "12",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "18",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "20",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "24",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "2",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "4",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "24",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "2",
    },
    {
        name: "Chemist Warehouse",
        address: "Castle Hill, NSW AU 2154",
        reviews: "4",
    }
]
const ShopsDetails = () => {
    const [rating, setRating] = useState(0)
    const loading = useSelector((state) => state?.ShopsDataReducer);
    const  dispatch = useDispatch();
    const [category, setCategory] = useState(categories)
    const [itemOffset, setItemOffset] = useState(0);
    const [shopItems, setShopItems] = useState([])

    const pageCount = Math.ceil(shops.length / 5);

    useEffect(() => {
        setShopItems(loading.data)
    }, [loading]);

    const handleChangeCategory = (event, itm) => {
        setCategory(
            category.map(el => (el.name === itm.name ? {...el, selected: true} : {...el, selected: false}))
        );
    }
    const handleRating = (rate) => {
        setRating(rate)
    }
    const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % shops.length;

    setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + 5;
        // setShopItems(shops.slice(itemOffset, endOffset))
        dispatch(shopDataNextPrev({
            form: { itemOffset: itemOffset, endOffset: endOffset },
            callback:(data) => {
            }
        }))
    },[itemOffset])
    
    return (
        <Fragment>
            <Fragment>
        <div className="container-fluid parent shop-wrap text-center text-white">
            <div className="content-wrap child">
                <img src={Logo} />
                <p className="f-40 f-w-600 mb-0">Farm Market</p>
                
                <div class="input-group mb-3 w-max-content m-auto mt-sm-3 mt-md-3 mt-lg-4 ">
                    <input type="text" className="form-control f-16 input-btn search-input" 
                    placeholder="search farm products..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button class="input-group-text search-btn f-16 f-w-600"
                     id="basic-addon2" onClick={() => {
                  
                        // navigate("/", {replace: true});
                     }}>Search</button>
                </div>
            </div>
        </div>
    </Fragment>

            <div className="d-flex flex-wrap justify-content-center">
                {category.map((itm) => (
                    <div className={itm.selected ? "btn-green selection-btn text-center text-white f-16 f-w-600" : "btn-white selection-btn text-center text-dark f-16 f-w-600" }
                       onClick={(e) => {handleChangeCategory(e, itm)}} >     
                        <span>{itm.name}</span>
                    </div>
                ))}
            </div>
            <div className="container my-5">
                <p className="f-22">
                   Fruits
                </p>
                <div>
                    <div className="d-flex flex-wrap justify-content-center justify-content-sm-center justify-content-md-between">
                    {shopItems.map((itm, index) => (
                        <div className={"card m-2 grid-item"} key={index} 
                        style={{minWidth:"12rem"}}>
                            <img src={Picture} classname={"card-img-top"} alt="..." />
                            <div className={"card-body text-start"}>
                                <p className={"card-text f-16 f-w-600 text-start"}>{itm.name}</p>
                                
                                <span className={"f-16 f-w-600"}>
                                    ${itm.reviews} </span>
                                    ($10/KG)
                            </div>
                            <div class="m-4">
                                <a href="#" 
                                class="w-100 btn btn-primary f-16 f-w-600 card-btn">Add to cart</a>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                <div className="">
                <ReactPaginate
                    nextLabel="Next >>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={4}
                    pageCount={pageCount}
                    previousLabel="<< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item-prev"
                    previousLinkClassName="page-link-prev"
                    nextClassName="page-item-next"
                    nextLinkClassName="page-link-next"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination justify-content-center"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
                </div>    
                
      
               
                
                </div>
            </div>
            
            
        </Fragment>
        
    )
}

export default ShopsDetails;