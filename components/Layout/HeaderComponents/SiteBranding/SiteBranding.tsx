import Link from "next/link";
import React, { ReactElement } from 'react'
import style from './SiteBranding.module.scss';

interface ISiteBrandingProps {
    children?: ReactElement | ReactElement[];
    title: string;
    logoUrl?: string
}
const SiteBranding = (props: ISiteBrandingProps) => {
    const { title } = props;
    if (title) {
        return (
            <div>
                <h1 className={style.siteMainTitle}><Link href={"/"}>{title}</Link></h1>
            </div>
        )
    }
    else {
        return <></>
    }
}

export default SiteBranding