import {Fragment} from 'react';
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Click Click Cafe</h1>
      <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
      <img src = {mealImage} alt="some super cool thing"/>
    </div>
  </Fragment>
}

export default Header;