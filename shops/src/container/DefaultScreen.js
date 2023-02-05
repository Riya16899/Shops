import React, { Fragment, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Hero } from "../components/commonComponents/index";
import Picture from "../assets/images/Photo.png"
import {  shopDataNextPrev } from "../redux/actions";

const categories = [
    {
        name: "All",
        selected: true
    },
    {
        name: "Asian",
        selected: false
    },
    {
        name: "Beer, Wine & Spirits",
        selected: false
    },
    {
        name: "Beverages",
        selected: false
    },
    {
        name: "Bread & Bakery",
        selected: false
    }, 
    {
        name: "Gifts & Flower",
        selected: false
    },
    {
        name: "Health",
        selected: false
    },
    {
        name: "Meats",
        selected: false
    },
    {
        name: "Pantry",
        selected: false
    }, 
    {
        name: "Dairy & Eggs",
        selected: false
    },
    {
        name: "Deli",
        selected: false
    },
    {
        name: "Frozen",
        selected: false
    },
    {
        name: "Fruits ",
        selected: false
    }, 
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
const DefaultScreen = () => {
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()
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
            <Hero />
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
                   {shops.length} shops found
                </p>
                <div>
                <div className="d-flex flex-wrap justify-content-between">
                {shopItems.map((itm, index) => (
                    <div className={"card m-2 grid-item"} key={index} style={{minWidth:"18rem"}}>
                        <img src={Picture} classname={"card-img-top"} alt="..." />
                        <div className={"card-body"}>
                            <p className={"card-text f-20 f-w-600"}>{itm.name}</p>
                            <p className={"f-16"}>{itm.address}</p>
                            <span className={"f-16 f-w-400"}>
                            <Rating
                                size={25}
                                onClick={handleRating}
                                // onPointerEnter={onPointerEnter}
                                // onPointerLeave={onPointerLeave}
                                // onPointerMove={onPointerMove}
                                /* Available Props */
                            />
                                
                                {itm.reviews} reviews</span>
                        </div>
                        <div class="m-4">
                            
                            <button onClick={(e) => {
                                e.preventDefault();
                                navigate("/shop-details")
                            }}
                            class="w-100 btn btn-primary f-16 f-w-600 card-btn">
                                View all items</button>
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

export default DefaultScreen;