import React from 'react';
import './usermenu.css'

const UserMenu: React.FC = () => {
    return <div id='navbar-usermenu'>
        <menu className='navbar-usermenu-menu'>
            <a href='./' className='navbar-usermenu__item link__language'>PL</a>
            <a href='./' className='navbar-usermenu__item link__login'>Zaloguj</a>
            <a href='./' className='navbar-usermenu__item link__favourites'>Schowek</a>
            <a href='./' className='navbar-usermenu__item link__stores-map'>Salony</a>
            <a href='./' className='navbar-usermenu__item link__shoppingCart'>Koszyk</a>
        </menu>
    </div>
}

export default UserMenu;