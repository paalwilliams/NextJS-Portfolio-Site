import Link from "next/link";
import React, { ReactElement } from 'react'
import style from './SiteBranding.module.scss';

interface ISiteBrandingProps {
    children?: ReactElement | ReactElement[];
    title: string;
    homeUrl: string;
    logoUrl?: string
}
const SiteBranding = (props: ISiteBrandingProps) => {
    const { title, homeUrl } = props;
    if (title && homeUrl) {
        return (
            <div>
                <h1 className={style.siteMainTitle}><Link href={homeUrl}>{title}</Link></h1>
            </div>
        )
    }
    else {
        return <></>
    }
}

export default SiteBranding