import { Box, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { ProductDto } from "../../models/ProductDto";
import Details from "../details";
import './index.scss'
import Product from "./product";

interface ProductosProps {
    value: number;
    data: any;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Productos = ({ value, data }: ProductosProps) => {

    const [details, setDetails] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({} as ProductDto);

    const closeToggleDrawer =
        () =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setSelectedProduct({} as ProductDto);
                setDetails(false);
            };


    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const onProductDetails = (product: ProductDto) => {
        setSelectedProduct(product);
        setDetails(true);
    }

    const breakfast = useMemo(() => {
        return data?.breakfast?.products;
    }, [data?.breakfast])

    const lunch = useMemo(() => {
        return data?.lunch?.products;
    }, [data?.lunch])

    const dinner = useMemo(() => {
        return data?.dinner?.products;
    }, [data?.dinner])

    const kids = useMemo(() => {
        return data?.kids?.products;
    }, [data?.kids])

    const dessert = useMemo(() => {
        return data?.dessert?.products;
    }, [data?.dessert])


    return (
        <>
            <TabPanel value={value} index={0}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                >
                    {
                        breakfast?.map((product: ProductDto, index: number) => {
                            return <Grid key={`${product.id}${index}`} item xs={12} sm={12} md={12}>
                                <Product product={product} onProductDetails={onProductDetails} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                >
                    {
                        lunch?.map((product: ProductDto, index: number) => {
                            return <Grid key={`${product.id}${index}`} item xs={12} sm={12} md={12}>
                                <Product product={product} onProductDetails={onProductDetails} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                >
                    {
                        dinner?.map((product: ProductDto, index: number) => {
                            return <Grid key={`${product.id}${index}`} item xs={12} sm={12} md={12}>
                                <Product product={product} onProductDetails={onProductDetails} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                >
                    {
                        kids?.map((product: ProductDto, index: number) => {
                            return <Grid key={`${product.id}${index}`} item xs={12} sm={12} md={12}>
                                <Product product={product} onProductDetails={onProductDetails} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                >
                    {
                        dessert?.map((product: ProductDto, index: number) => {
                            return <Grid key={`${product.id}${index}`} item xs={12} sm={12} md={12}>
                                <Product product={product} onProductDetails={onProductDetails} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <Details closeToggleDrawer={closeToggleDrawer} open={details} selectedProduct={selectedProduct} />
        </>
    )
}

export default Productos;