import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Admin.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { getProducts } from '../../redux/Slices/productsSlice'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import axios from 'axios'
const Admin = () => {
    const [inputValue, setInputValue] = useState(" ")
    const [filteredData, setfilteredData] = useState([])
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    useEffect(() => {

        dispatch(getProducts())
        setfilteredData(inputValue == " " ? products : products.filter((x) => x.name.trim().toLowerCase().includes(inputValue.trim().toLowerCase())))
    }, [inputValue])
    useEffect(() => {
        setfilteredData(inputValue == " " ? products : products.filter((x) => x.name.trim().toLowerCase().includes(inputValue.trim().toLowerCase())))
    }, [products])

    const validateSchema = Yup.object().shape({
        name: Yup.string().required("This field is required"),
        description: Yup.string().required("This field is required"),
        price: Yup.number().required("This field is required").max(10, "10 yuxati ola bilmez").min(8, "Pasword must be 8 or more characters"),
        like: Yup.number().required("This field is required"),
        rating: Yup.number().required("This field is required"),
        category: Yup.string().required("This field is required"),
        img: Yup.string().required("This field is required")

    });
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: 0,
            like: 0,
            rating: 0,
            category: "",
            img: ""
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            axios.post(`http://localhost:3000/products`, values).then((res) => {
                dispatch(getProducts())
            }).then(() => {

            })
            resetForm();

        },
    });

    return (
        <>
            <NavBar position={"static"} backGroundColor={"black"} />
            <div style={{ textAlign: "center", marginTop: "100px" }} className="container">
                ADD Product
                <form style={{
                    display: "flex", marginTop: "50px",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    flexDirection: "column"
                }} onSubmit={formik.handleSubmit}>
                    <TextField
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        helperText={formik.errors.name ? formik.errors.name : ""}
                        id="outlined-basic" label="name" variant="outlined" />
                    <TextField

                        name="description"
                        type="text"
                        id="outlined-basic" label="description" variant="outlined"
                        onChange={formik.handleChange}
                        helperText={formik.errors.description ? formik.errors.description : ""}

                        value={formik.values.description} />

                    <TextField
                        name="img"
                        type="email" id="outlined-basic" label="img" variant="outlined"
                        onChange={formik.handleChange}
                        helperText={formik.errors.img ? formik.errors.img : ""}

                        value={formik.values.img} />
                    <TextField
                        name="price"
                        type="number" id="outlined-basic" label="price" variant="outlined"
                        onChange={formik.handleChange}
                        helperText={formik.errors.price ? formik.errors.price : ""}

                        value={formik.values.price} />
                    <TextField
                        name="rating"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                        helperText={formik.errors.rating ? formik.errors.rating : ""}

                        id="outlined-basic" label="rating" variant="outlined"
                    />
                    <TextField
                        name="like"
                        type="number"
                        onChange={formik.handleChange}
                        helperText={formik.errors.like ? formik.errors.like : ""}

                        value={formik.values.like}
                        id="outlined-basic" label="likes" variant="outlined"
                    />
                    <TextField
                        name="category"
                        type="text"
                        helperText={formik.errors.category ? formik.errors.category : ""}
                        id="outlined-basic" label="category"
                        onChange={formik.handleChange}
                        value={formik.values.category} variant="outlined" />


                    <button style={{
                        padding: "17px"
                    }} type="submit">Submit</button>
                    <TextField
                        onChange={(e) => {
                            setInputValue(e.target.value)
                        }}
                        type="text"
                        id="outlined-basic" label="Search" variant="outlined" />
                    <Button onClick={() => {
                        setfilteredData([...products].sort((a, b) => a.name.localeCompare(b.name)))
                    }} variant="contained">A-z</Button>
                    <Button onClick={() => {
                        setfilteredData([...products].sort((a, b) => b.name.localeCompare(a.name)))
                    }} variant="contained">Z-a</Button>
                    <Button onClick={() => {
                        setfilteredData([...products].sort((a, b) => b.price - a.price))

                    }} variant="contained">HighPrice</Button>
                    <Button onClick={() => {
                        setfilteredData([...products].sort((a, b) => a.price - b.price))
                    }} variant="contained">LowPrice</Button>
                </form>

                <div className="admin">
                    <table>
                        <caption>Statement Summary</caption>
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData && filteredData.map((elem) => {
                                return <tr key={elem._id}>
                                    <td data-label="Account">{elem._id}</td>
                                    <td data-label="Due Date">{elem.name}</td>
                                    <td data-label="Amount">${elem.price}</td>
                                    <td data-label="Period"><button><svg onClick={() => {

                                        axios.delete(`http://localhost:3000/products/${elem._id}`).then(() => {
                                            dispatch(getProducts())
                                        })
                                    }} style={{ width: "40px", border: "none", padding: "12px 10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></button></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Admin