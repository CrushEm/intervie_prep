import React from "react";
import ProductItem, { ProductItemType } from "./ProductItem";

interface ProductListProps {
    list: ProductItemType[],
    onclick: (item: ProductItemType) => void,
    search?: string,
    filters?: string[]
}


function ProductList({ list, onclick, search, filters }: ProductListProps) {

    const filteredList = list.filter((listItem) => {
        if (search) {
            //console.log(listItem, search); 
            return listItem.name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    return (
        <div>
            <h2>Product List</h2>
            {
                filteredList.map((listItem, listIdx) => (
                    <div key={listIdx} onClick={() => onclick(listItem)}>
                        <ProductItem listItem={listItem} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList