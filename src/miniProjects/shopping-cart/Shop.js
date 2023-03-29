import React, { useState, useEffect } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'
import './Shop.css';

export default function Shop() {

    // this.state = {
    //     products: [
    //         { id: 1, title: 'Album 1', price: 5, img: 'shopping-cart-images/Album 1.png' },
    //         { id: 2, title: 'Album 2', price: 15, img: 'shopping-cart-images/Album 2.png' },
    //         { id: 3, title: 'Album 3', price: 20, img: 'shopping-cart-images/Album 3.png' },
    //         { id: 4, title: 'Album 4', price: 100, img: 'shopping-cart-images/Album 4.png' },
    //         { id: 5, title: 'Coffee', price: 5, img: 'shopping-cart-images/Cofee.png' },
    //         { id: 6, title: 'Shirt', price: 50, img: 'shopping-cart-images/Shirt.png' }
    //     ],

    //     shoppingCart: [],
    //     socials: [
    //         { id: 1, href: 'https://www.youtube.com', img: 'shopping-cart-images/YouTube Logo.png' },
    //         { id: 2, href: 'https://www.spotify.com', img: 'shopping-cart-images/Spotify Logo.png' },
    //         { id: 3, href: 'https://www.facebook.com', img: 'shopping-cart-images/YouTube Logo.png' }
    //     ],
    // }

    const [products] = useState([
        { id: 1, title: 'Album 1', price: 5, img: 'shopping-cart-images/Album 1.png' },
        { id: 2, title: 'Album 2', price: 15, img: 'shopping-cart-images/Album 2.png' },
        { id: 3, title: 'Album 3', price: 20, img: 'shopping-cart-images/Album 3.png' },
        { id: 4, title: 'Album 4', price: 100, img: 'shopping-cart-images/Album 4.png' },
        { id: 5, title: 'Coffee', price: 5, img: 'shopping-cart-images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'shopping-cart-images/Shirt.png' }
    ])
    const [socials] = useState([
        { id: 1, href: 'https://www.youtube.com', img: 'shopping-cart-images/YouTube Logo.png' },
        { id: 2, href: 'https://www.spotify.com', img: 'shopping-cart-images/Spotify Logo.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'shopping-cart-images/YouTube Logo.png' }
    ])
    const [shoppingCart, setShoppingCart] = useState([])

    // this.productAdder = this.productAdder.bind(this)
    // this.productRemover = this.productRemover.bind(this)

    function cartCleaner() {
        // this.setState({ shoppingCart: [] })
        setShoppingCart([])
    }
    function productAdder(id) {
        let isExist = shoppingCart.findIndex(item => {
            return item.id == id
        })
        if (isExist !== -1) {
            alert('already selected!')
        } else {
            let newProduct = products.find(prod => {
                return prod.id == id
            })

            // this.setState(prevState => {
            //     return { shoppingCart: [...prevState.shoppingCart, newProduct] };
            // })
            setShoppingCart(prevState => {
                return [...prevState, newProduct]
            })
        }
    }
    function productRemover(id) {
        // let updatedCart = shoppingCart.filter(item => item.id !== id)

        // this.setState({ shoppingCart: updatedCart })

        setShoppingCart(prevState => {
            return prevState.filter(product => {
                return product.id !== id
            })
        })
    }

    
    // useEffect(() => {
    //     console.log('updated!')
    // }, [shoppingCart])
    

    return (
        <>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">STORE</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">SabzLearn Shop</h1>
            </header>
            <section className="container content-section">
                <div className="shop-items">
                    {products.map(prod => (
                        <Product key={prod.id} {...prod} addToCartFunc={productAdder}></Product>
                    ))}
                </div>
            </section>
            <section className="container content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">ITEM</span>
                    <span className="cart-price cart-header cart-column">PRICE</span>
                    <span className="cart-quantity cart-header cart-column">Doing</span>
                </div>
                <div className="cart-items">
                    {shoppingCart.map(item => (
                        <CartProduct key={item.id} {...item} removeFunc={productRemover}></CartProduct>
                    ))}

                </div>
                <button className="btn btn-primary btn-purchase" type="button" onClick={cartCleaner}>
                    Empty Cart
                </button>
            </section>
            <footer className="main-footer">
                <div className="container main-footer-container">
                    <h3 className="band-name">The Generics</h3>
                    <ul className="nav footer-nav">
                        {socials.map(item => (
                            <Social key={item.id} {...item}></Social>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    )
}