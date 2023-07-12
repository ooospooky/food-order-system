"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../products';

import { addToCart } from '@/redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/store'
interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { src, name, id } = product

  const dispatch = useDispatch<AppDispatch>()
  const productAmount = useAppSelector((state) => state.cartSliceReducer.value[id]);
  // console.log(productAmount);
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={src}
        title="green iguana"
        component='img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addToCart(id))}>Add To Cart {productAmount > 0 && <> ({productAmount})</>}</Button>
      </CardActions>
    </Card>
  );
}