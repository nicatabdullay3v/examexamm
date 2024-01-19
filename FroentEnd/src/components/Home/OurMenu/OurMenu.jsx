import React, { useEffect } from 'react'
import "./OurMenu.scss"
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/Slices/productsSlice'
import { addtoBasket, increaseCountFromHomePage } from '../../../redux/Slices/BasketSlice'
import { useNavigate } from 'react-router-dom'
const OurMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    useEffect(() => {

        dispatch(getProducts())

    }, [])
    // Fuctions

    const handleAdd = (elem) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        let findProduct = basket.find((x) => x._id == elem._id)
        let Index = basket.findIndex((x) => x._id == elem._id)
        if (findProduct) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Count artdi",
                showConfirmButton: false,
                timer: 1500
            });

            dispatch(increaseCountFromHomePage({
                Index,
                basket
            }))
        }
        else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "artirildi",
                showConfirmButton: false,
                timer: 1500
            });
            let obj = {
                name: elem.name,
                description: elem.description,
                price: elem.price,
                _id: elem._id,
                count: 1
            }
            dispatch(addtoBasket({
                basket: basket,
                elem: obj
            }))
        }
    }
    console.log(products);
    return (
        <section id='menu'>
            <div className="container">
                <div className="menu">
                    <div className="text">
                        <div className="icon">
                            <svg style={{ width: "100px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" /></svg>
                        </div>
                        <div className="title">
                            <div className="line1">

                            </div>
                            <h1>
                                Our Menu
                            </h1>
                            <div className="line2"></div>
                        </div>
                    </div>
                    <div className="categorys">
                        <p>Breakfast</p>
                        <p>Brunch</p>
                        <p>Lunch</p>
                        <p>Dinner</p>
                    </div>

                    <div className="products">
                        {products && products.map((elem) => {
                            return <div key={elem._id} className="product">
                                <div className="name">
                                    <p>{elem.name}</p>
                                </div>
                                <div className="down">
                                    <div className="descrip">
                                        {elem.description}
                                    </div>
                                    <div className="dots">............................................................</div>
                                    <div className="price">
                                        <p> ${elem.price}</p>
                                        <svg onClick={() => {
                                            navigate(`/${elem._id}`)
                                        }} style={{ marginTop: "10px", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                                        <svg onClick={() => {
                                            handleAdd(elem)
                                        }} style={{ marginTop: "10px", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#9e9e9e" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurMenu