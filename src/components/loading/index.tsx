import { Paper } from '@mui/material';
import ImageLogo from '../../assets/logo.png';
import './index.scss'

interface LoadingDto {
    removeLoading: boolean;
}

const Loading = ({ removeLoading }: LoadingDto) => {
    return (
        <div className={`loading ${removeLoading && 'animate__animated animate__fadeOut'}`}>
            <Paper elevation={3} className='paper'><img className='animate__animated animate__bounce animate__infinite' src={ImageLogo} alt={process.env.REACT_APP_WEBSITE_NAME} /></Paper>
        </div>
    )
}

export default Loading;