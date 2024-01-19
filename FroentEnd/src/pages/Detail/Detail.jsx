import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/Slices/productsSlice'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBar/NavBar'
const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getProducts())

    }, [])
    const products = useSelector((state) => state.products.products);
    const product = products && products.find((x) => x._id == id)
    return (
        <>
            <NavBar position={"static"} backGroundColor={"black"} />
            <div style={{ height: "100vh", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "100px" }} className="container">
                {product && <Card sx={{ maxWidth: 345, height: "350px" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={product && product.img}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {product && product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>}

            </div>
        </>
    )
}

export default Detail