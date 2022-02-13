import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { createMarkup } from "../../../utils/createMarkup";
import style from './PortfolioItem.module.scss'

interface IPortfolioItemProps {
    title: string;
    excerpt: string;
    url: string;
    featuredImage: string;
}
const PortfolioItem = (props: IPortfolioItemProps) => {
    const { title, excerpt, url, featuredImage } = props;
    const path = new URL(url).pathname;
    return (
        <Link href={path}>
            <div className={style.portfolioItemCard}>
                <Image className={style.bgimg} src={featuredImage} layout='fill' alt="" />
                <h1 className={style.text}>{title}</h1>
                <p className={style.text} dangerouslySetInnerHTML={createMarkup(excerpt)}></p>
            </div>
        </Link>
    )
}

export default PortfolioItem