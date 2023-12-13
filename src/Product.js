import React from "react";


class Product extends React.Component {

    showPrice(){
        alert(this.props.item.price);
    }

    render() {
        return <li>
            <h3 onClick={() => this.showPrice()}>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
        </li>;
    }
}
export default Product;