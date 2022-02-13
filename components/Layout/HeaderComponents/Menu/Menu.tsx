import Link from "next/link";
import React, { useEffect, useState } from 'react';
import style from './Menu.module.scss';

interface IMenuProps {
    menu: any;
}

const Menu = (props: IMenuProps) => {

    const { menu } = props;

    return (
        <ul id="menu-main-menu" className={style.ul}>
            {menu
                ? menu.map((menuEntry: any) => {
                    const { url, title } = menuEntry;
                    const path = new URL(url).pathname;
                    return <li key={title}><Link href={path}>{title}</Link></li>
                })
                : ''}
        </ul>
    )
}


export default Menu
