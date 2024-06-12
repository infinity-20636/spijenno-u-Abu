import React from 'react';

export const CardForWomanSt = ({ imgLink, brand, discrip, oldPrice, newPrice }) => {
    return (
        <div className="WomenCard">
            <img src={imgLink} alt={brand} />
            <p className="brand">{brand}</p>
            <p className="discrip">{discrip}</p>
            <div className="price">
                <p className="oldPrice">{oldPrice}</p>
                <p className="newPrice">{newPrice}</p>
            </div>
        </div>
    );
};