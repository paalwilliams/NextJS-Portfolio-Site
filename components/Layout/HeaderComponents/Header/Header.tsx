import React, { ReactElement, useContext } from 'react';
import Menu from "../Menu/Menu";
import SiteBranding from "../SiteBranding/SiteBranding";
import styles from './Header.module.scss'
import SiteContext from '../../../../context/SiteContext/SiteContext';

interface IHeaderProps {
    children?: ReactElement | ReactElement[];
}


const Header = (props: IHeaderProps) => {

    const { siteData, menu } = useContext(SiteContext);

    if (siteData) {
        return (
            <header className={styles.header}>
                <SiteBranding title={siteData.name} homeUrl={siteData.home} />
                <Menu menu={menu} />
            </header>
        );
    }
    else {
        return <></>
    }

};

export default Header;
