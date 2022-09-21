import { Container, Divider, Fab, Grid } from "@mui/material";
import { Logo } from "../components";
import Categories from "../components/categories";
import { useEffect, useState, useRef } from 'react';
import Carousel from "../components/carousel";
import Productos from "../components/productos";
import { fetchData } from "../services/data";
import Loading from "../components/loading";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from "../components/footer";


const Menu = () => {
    const [value, setValue] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [removeLoading, setRemoveLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>();
    const [myElementIsVisible, updateMyElementIsVisible] = useState<any>(false);
    const myRef: any = useRef();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const init = async () => {
        const response = await fetchData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setData(response);
        setTimeout(() => {
            setRemoveLoading(true);
        }, 1000)
        setTimeout(() => {
            setLoading(false);
        }, 1500)

        setTimeout(() => {
            const observer = new IntersectionObserver((entries, observer) => {
                const entry = entries[0];
                updateMyElementIsVisible(!entry.isIntersecting);
            });
            observer.observe(myRef?.current);
        }, 5000)
    }

    useEffect(() => {
        init();
    }, []);

    return loading ? <Loading removeLoading={removeLoading} /> : <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="mb-3"
    >
        <Grid item xs={12} sm={12} md={12}>
            <Container className="animate__animated animate__backInLeft delay-1" maxWidth='xl'>
                <Logo />
            </Container>
        </Grid>

        <div className="full-width animate__animated animate__backInLeft delay-2" >
            <Carousel />
        </div>

        <Grid className="full-width" item xs={12} sm={12} md={12}>
            <Container className="animate__animated animate__backInLeft delay-3" maxWidth='xl'>
                <Categories value={value} handleChange={handleChange} myRef={myRef} />
            </Container>
        </Grid>

        <Grid className="animate__animated animate__backInLeft delay-4" item xs={12} sm={12} md={12}>
            <Productos value={value} data={data} />
        </Grid>

        <Grid className="full-width" item xs={12} sm={12} md={12}>
            <Divider className="mb-2" variant="middle" />
        </Grid>

        <Grid className="full-width" item xs={12} sm={12} md={12}>
            <Footer />
        </Grid>


        {
            myElementIsVisible && <Fab
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                className="back-to-top animate__animated animate__fadeInDown"
                size="small"
                aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        }

    </Grid>
}
export default Menu;