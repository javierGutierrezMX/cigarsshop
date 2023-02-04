import {Fragment} from "react";
import cigarImg from '../../assets/headerImage.jpg'
import classes from './Header.module.css'
import  HeaderCartBtn  from "./HeaderCartBtn";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Cigars</h1>
                <HeaderCartBtn onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={cigarImg} alt="cigars" ></img>
            </div>
        </Fragment>
    )
}

export default Header;