import React from "react";
import Product from "./Product";

class ProductList extends React.Component {
    render() {
        let products = [
            {code: "P01", name: "Kurs React", description: "Fajny kurs"},
            {code: "P02", name: "Kurs Java", description: "Fajny kurs."},
            {code: "P03", name: "Kurs Python", description: "Fajny kurs.."},
            {code: "P04", name: "Kurs C++", description: "Fajny kurs..."},
        ];
        let productComponents = [];

        for (let product of products){
            productComponents.push(<Product item={product} />);
        }
        return <ul>{productComponents}</ul>;
    }
}
export default ProductList;