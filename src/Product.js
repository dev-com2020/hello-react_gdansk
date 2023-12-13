import React from "react";


class Product extends React.Component {

    showPrice(){
        alert("Cena winka to: " + this.props.item.price);
    }


    render() {
    
        let classToApply = this.props.item.selected? "selected": "";

        return <li>
            <h3 onClick={() => this.showPrice()}>{this.props.item.name}</h3>
            <p onClick={() => this.props.selectHandler(this.props.item.code)} className={classToApply}>{this.props.item.description}</p>
        </li>;
    }
}
export default Product;