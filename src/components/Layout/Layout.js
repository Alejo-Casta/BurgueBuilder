import React from 'react';

import Auxiliar from '../../hoc/Auxiliar'

const Layout = (props) => (
    <Auxiliar>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliar>
)
export default Layout;