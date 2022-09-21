import React, { useMemo } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './index.scss'
import { ProductDto } from '../../models/ProductDto';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { CardContent, CardMedia, Chip, Typography } from '@mui/material';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { formatterCR } from '../../services/currency';

interface DetailsDto {
    closeToggleDrawer: any;
    open: boolean;
    selectedProduct: ProductDto
}

export default function Details({ closeToggleDrawer, open, selectedProduct }: DetailsDto) {
    const { name, price, image, spicy, promo, description, ingredients } = selectedProduct;

    const Puller = styled(Box)(({ theme }) => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
        borderRadius: 3,
        position: 'absolute',
        bottom: 8,
        left: 'calc(50% - 15px)',
    }));

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
        <SwipeableDrawer
            anchor='top'
            open={open}
            onClose={closeToggleDrawer()}
            onOpen={() => { }}
            className='product-details'
            variant="temporary"
            disableSwipeToOpen={true}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <Puller />
            <CardMedia
                component="img"
                sx={{ width: '100%' }}
                image={`/products/${image}`}
                alt="Live from space album cover"
            />
            {promo && <Typography className='offer-logo-label' component="h2" variant="button">
                Nuevo
            </Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h1" variant="button">
                        {name}
                    </Typography>
                    <Typography className='pb-1' component="h2" variant="body2">
                        {description}
                    </Typography>

                    {ingredients?.map((ingredient) => {
                        return <Chip className='m-1' label={ingredient} />
                    })}
                    <div className='pt-2'>{isSpicy}</div>
                </CardContent>
                <div className='price'>
                    <Typography variant="subtitle1" className='price-text' component="span">
                        {formatterCR.format(price)}
                    </Typography>
                </div>

            </Box>
        </SwipeableDrawer >
    );
}
