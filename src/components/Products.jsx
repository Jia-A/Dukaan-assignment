import React from "react"
import "../styles/products.css"
import "../custom.css"

function Products() {
    const prodData = [
        {
            head : "Privacy Policy Generator",
            description : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            imgSrc : "./assets/Rectangle_124.png"
        },
        {
            head : "Terms & Conditions Generator",
            description : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            imgSrc : "./assets/Rectangle_125.png"
        },
        {
            head : "Domain Name Generator",
            description : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            imgSrc : "./assets/Rectangle_126.png"
        },
        {
            head : "Invoice Generator",
            description : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            imgSrc : "./assets/Rectangle_127.png"
        }
    ]
  return (
    <div className='products-cont flex'>
        <h2 className="cont-head">Try our other products</h2>
        <div className="flex-cont flex">
            {prodData.map((item)=>(
                <article className="product-card flex">
                <img src={item.imgSrc} alt={item.head} className='product-img' />
                <p className="card-head">{item.head}</p>
                <p className="card-desc">{item.description}</p>
            </article>
            ))}    
        </div>
        <footer className="footer-cont">
            <div className="footer-flex flex">
                    <div className="foot-main flex">
                            <div className="foot-brand">dukaan</div>
                            <div className="foot-links">
                                <span className="links">Contact</span>
                                <span className="links">Tutorials</span>
                                <span className="links">Privacy</span>
                                <span className="links">About</span>
                                <span className="links">FAQ's</span>
                                <span className="links">Blogs</span>
                                <span className="links">Banned Items</span>
                                <span className="links">Jobs</span>
                            </div>
                        <div className="sm-links-cont flex">
                            <span className="social-links">Facebook</span>
                            <span className="social-links">Twitter</span>
                            <span className="social-links">LinkedIn</span>
                        </div>
                   </div>
                <div className="sec-part"></div>
                <div className="flex between">
                    <small>Dukaan 2020, All rights reserved</small>
                    <small>Made in 🇮🇳</small>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Products