import ImageLogo from '../../assets/logo.png';
import './index.scss'

const Logo = () => {
    return <img className='logo' src={ImageLogo} alt={process.env.REACT_APP_WEBSITE_NAME} />
}

export default Logo;