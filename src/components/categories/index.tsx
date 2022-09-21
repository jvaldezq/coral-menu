import { Tab, Tabs } from '@mui/material';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import './index.scss'

interface CategoriesDto {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    myRef: any;
}

const Categories = ({ value, handleChange, myRef }: CategoriesDto) => {
    return <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className='tabs'
        ref={myRef}
    >
        <Tab icon={<FreeBreakfastOutlinedIcon />} label="Desayuno" />
        <Tab icon={<LunchDiningOutlinedIcon />} label="Almuerzo" />
        <Tab icon={<DinnerDiningOutlinedIcon />} label="Cena" />
        <Tab icon={<ChildCareOutlinedIcon />} label="Niños" />
        <Tab icon={<CookieOutlinedIcon />} label="Postres" />
    </Tabs>
}

export default Categories;