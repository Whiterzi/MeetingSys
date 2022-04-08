import react ,{Component} from "react";
import {ReactComponent as HomeSVG} from '../../imgs/home.svg'
import './Header.scss';
import { useNavigate } from "react-router-dom";
const Header = (prop) => {
    const Navigate = useNavigate()
    const HomeClick=()=>{
        Navigate('/')
    }
    return(
        <div id='title-container'>
            <div id='title'>
                {prop.title}
            </div>
            <div id='home-button' onClick={HomeClick}>
                <HomeSVG id='home-svg' />
                Home
            </div>
        </div>
    )
}

export default Header;