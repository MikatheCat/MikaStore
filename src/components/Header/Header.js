import React from 'react';
import s from './Header.module.css';
import { ReactComponent as Cat } from './assets/Cat.svg';
import Button from "../Button";
import { ReactComponent as Cart } from './assets/cart.svg';
import { ReactComponent as Home } from './assets/home.svg';

const Header = () => {
    const handleButtonClick = () => {
        alert('Coming soon!')
    }
    return (
        <div className={s.root}>
            <div className={s.leftpart}>
                <Cat className={s.catimage} />
                <div className={s.store}>
                    Mika`s Store
                </div>
            </div>
            <div className={s.menu}>
                   <div className={s.cart}>
                       <Cart className={s.cartImage} />
                   </div>
                   <div className={s.basketButton}>
                       <Button onClick={handleButtonClick}>
                           Корзина
                       </Button>
                   </div>
                    <div className={s.home}>
                        <Home />
                    </div>
                    <div className={s.homeButton}>
                        <Button onClick={handleButtonClick}>
                            Вход/Регистрация
                        </Button>
                    </div>
            </div>
        </div>
    )
};

export default Header;