import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Basket.scss"
import NavBar from '../../components/NavBar/NavBar'
import { decreaseCountFromBasketPage, increaseCountFromBasketPage } from '../../redux/Slices/BasketSlice'
const Basket = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket.basket)
    const basketLocal = JSON.parse(localStorage.getItem("basket")) || []



    return (
        <>
            <NavBar position={"static"} backGroundColor={"black"} />
            <div className="basket">
                <div className="products">
                    {basketLocal && basketLocal.map((elem) => {
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
                                    <p> ${elem.price * elem.count}...Count {elem.count}</p>
                                    <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                                        <p onClick={() => {
                                            let Index = basketLocal.findIndex((x) => x._id == elem._id)
                                            let id = elem._id
                                            dispatch(decreaseCountFromBasketPage({ basketLocal, Index, id }))
                                        }} style={{ color: "black", padding: '10px', backgroundColor: "white", borderRadius: "10px" }}>-</p>
                                        <p
                                            onClick={() => {
                                                let Index = basketLocal.findIndex((x) => x._id == elem._id)
                                                dispatch(increaseCountFromBasketPage({ basketLocal, Index }))
                                            }} style={{ color: "black", padding: '10px', backgroundColor: "white", borderRadius: "10px" }} >+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Basket