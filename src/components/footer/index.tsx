import { Fab } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import './index.scss'

const Footer = () => {
    const shareDetails = { url: process.env.REACT_APP_WEBSITE_URL, title: process.env.REACT_APP_WEBSITE_NAME, text: `${process.env.REACT_APP_WEBSITE_NAME} Menú` }
    const share = async () => {
        if (navigator.share) {
            try {
                await navigator
                    .share(shareDetails)
                    .then(() =>
                        console.log("Hooray! Your content was shared to tha world")
                    );
            } catch (error) {
                console.log(`Oops! I couldn't share to the world because: ${error}`);
            }
        } else {
            // fallback code
            console.log(
                "Web share is currently not supported on this browser. Please provide a callback"
            );
        }
    }

    return (
        <div className="footer">
            <Fab
                onClick={() => window.open('https://wa.me/+50684919754', "_blank")}
                size="small"
                aria-label="Whatsapp">
                <SmartphoneRoundedIcon />
            </Fab>
            <Fab
                onClick={() => window.open('https://www.facebook.com/Coral-Digital-108105925371815', "_blank")}
                size="small"
                aria-label="Facebook">
                <FacebookRoundedIcon />
            </Fab>
            <Fab
                onClick={() => share()}
                size="small"
                aria-label="Share">
                <ShareRoundedIcon />
            </Fab>
        </div>)
}

export default Footer;