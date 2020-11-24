import React from 'react';
import s from './Button.module.css';

const Button = ({ children, onClick }) => {
    return (
        <div>
            <button className={s.button} type="button" onClick={onClick}>
                {children}
            </button>

        </div>
    )

};

export default Button;