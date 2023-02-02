import React from "react";

function Home(){

    return(
        <div>
            <div className="add-to-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span><br></br>
                    <span>
                       Price : $100.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className="Primary-btn">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;