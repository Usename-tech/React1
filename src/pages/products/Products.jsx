import { useEffect } from "react";
import "./Products.css";
import { filterProductBasedOnCategory, getAllProducts } from "./Products";
import { useState } from "react"




function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts(setProducts);
    }, []);
    return (
        <div className="products-container">
            <section className="products-ad">
                <h2>Electronics Product</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati facere sit architecto soluta id totam odit minima quas veritatis. Quos debitis asperiores doloribus ut odit eum nihil cupiditate temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati facere sit architecto soluta id totam odit minima quas veritatis. Quos debitis asperiores doloribus ut odit eum nihil cupiditate temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati facere sit architecto soluta id totam odit minima quas veritatis. Quos debitis asperiores doloribus ut odit eum nihil cupiditate temporibus.</p>
            </section>
            <section className="product-categories">
                <div>
                    <input type="radio"
                        defaultChecked value="all" id="all" name="category" onChange={() => {
                            filterProductBasedOnCategory(null, setProducts);
                        }} />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="radio" value="electronics" id="electronics" name="category" onChange={() => {
                        filterProductBasedOnCategory("electronics", setProducts);
                    }} />
                    <label htmlFor="electronics">Electronics</label>
                </div>
                <div>
                    <input type="radio" value="jewelery" id="jewelery" name="category" onChange={() => {
                        filterProductBasedOnCategory("jewelery", setProducts);
                    }} />
                    <label htmlFor="jewelery">Jewelery</label>
                </div>
                <div>
                    <input type="radio" value="men's clothing" id="mens" name="category" onChange={() => { filterProductBasedOnCategory("men's clothing", setProducts) }} />
                    <label htmlFor="mens">Men's</label>
                </div>
                <div>
                    <input type="radio" value="womens clothing" id="womens" name="category" onChange={() => { filterProductBasedOnCategory("women's clothing", setProducts) }} />
                    <label htmlFor="womens">Women's</label>
                </div>
            </section>
            <section className="products-data">
                {
                    products.map(function (product) {
                        return (
                            <div className="card">
                                <img src={product.image} width={"100%"} height={"230px"} alt="" />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                <button style={{ backgroundColor: "coral" }}>Product Details</button>
                                <button style={{ backgroundColor: "green" }}>Add to Cart</button>
                            </div>

                        );
                    })
                }
            </section>
        </div>
    );
}

export default Products;
