import React, { useMemo } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import './index.scss'
import { ProductDto } from '../../../models/ProductDto';
import { formatterCR } from '../../../services/currency';

interface ProductProps {
    product: ProductDto;
    onProductDetails: (product: ProductDto) => void;
}

const Product = ({ product, onProductDetails }: ProductProps) => {
    const { name, price, image, spicy, promo } = product;

    const isSpicy = useMemo(() => {
        const chillies = [];
        if (spicy !== 0) {
            for (let i = 0; i < 3; i++) {
                if (i < spicy) {
                    chillies.push(<LocalFireDepartmentIcon className='red-fire' />)
                } else {
                    chillies.push(<LocalFireDepartmentOutlinedIcon />)
                }
            }
            return chillies;
        }
    }, [spicy]);

    return (
        <Card className='product' sx={{ display: 'flex', position: 'relative' }}>
            <CardMedia
                component="img"
                sx={{ width: '35%' }}
                image={`/products/${image}`}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h2" variant="button">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" className='price' component="span">
                        {formatterCR.format(price)}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', pr: 1, pl: 1 }}>
                    <div>{isSpicy}</div>
                    <Button variant="text" onClick={() => onProductDetails(product)}>
                        Ver mas
                    </Button>
                </Box>
            </Box>
            {promo && <FiberNewIcon className='offer-logo' />}
        </Card>
    )
}

export default Product;