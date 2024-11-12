import React from "react";

export interface ProductItemType{
        "id": number,
        "name": string,
        "price": number,
        "category": string,
        "description": string,
        "imageURL": string,
}
interface ProductItemProps{
    listItem: ProductItemType
}

function ProductItem({listItem}:ProductItemProps) {

    return (
        <div className="listItem">
        <img src={listItem.imageURL} alt={listItem.name}/>
        <h3>{listItem.name}</h3>
        </div>
    )
}

export default ProductItem