import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./productdata";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        bestproductShops: [],
        bestsellerShops: [],
        relatedpdsShops: [],
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };
    componentDidMount() {
        this.setProducts();
        let products = storeProducts;
        let bestproductShops = products.filter(product => product.bestproduct === true);
        let bestsellerShops = products.filter(product => product.bestseller === true);
        let relatedpdsShops = products.filter(product => product.relatedpds === true);
        this.setState({
            products,
            bestproductShops,
            bestsellerShops,
            relatedpdsShops
        });
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState(() => {
            return { products }
        })
    };

    getItem = (id) => {
        return this.state.products.find(item => item.id === id); // return product by id
    };
    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    };
    addToCart = (id) => {
        const cartValueEl = document.getElementById("quantity_" + id);
        const cartValue = cartValueEl && cartValueEl.value ? parseInt(cartValueEl.value, 10) : 1;
        const product = this.getItem(id);
        product.inCart = true;
        product.count = cartValue;
        const price = product.price;
        product.total = price * cartValue;
        this.setState(() => {
            return {
                cart: [...this.state.cart, product],
                detailProduct: product
            };
        }, this.addTotals);
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, this.addTotals)
    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                };
            }, this.addTotals);
        }
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, this.addTotals);
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }


