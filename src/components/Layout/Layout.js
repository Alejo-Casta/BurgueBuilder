import React from 'react';

import Auxiliar from '../../hoc/Auxiliar'

import style from './Layout.module.css'

const Layout = (props) => (
    <Auxiliar>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </Auxiliar>
)

export default Layout;
