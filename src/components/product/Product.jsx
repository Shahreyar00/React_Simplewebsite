import React from 'react';
import "./product.css";
import im from "../../img/fulls.png";

const Product = ({img,link}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={im} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Product;
