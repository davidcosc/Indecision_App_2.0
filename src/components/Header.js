import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="header__content">
            <h1 className="header__content__title">{props.title}</h1>
            {!!props.subtitle && <h2 className="header__content__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);
export default Header;