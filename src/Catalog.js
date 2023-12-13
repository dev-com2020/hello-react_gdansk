import React from "react";
import "./Catalog.css";
import obraz from "./image.png";
import Message from "./Message";
import ProductList from "./ProductList";

// function Catalog() {
//     return (
//         <div>
//             <h2>KATALOG</h2>
//             <div><img src={obraz} alt="coś"></img></div>
//         </div>
        
//     );
//   }

class Catalog extends React.Component {
    render() {
        let title = "Stan katalogu na dzień " + new Date().toDateString();
        return (
            <div>
                <h2>{title}</h2>
                    <div><img src={obraz} alt="coś"></img></div>
                    <br/>
                    <Message />
                    <div>
                        <ProductList />
                    </div>
            </div>
        );
    }
}

export default Catalog;