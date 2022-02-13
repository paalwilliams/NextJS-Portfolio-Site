import React from 'react'
import { createMarkup } from "../../../../utils/createMarkup";
import style from './PageTitle.module.scss';

interface ITitleProps {
    title: string;
}
const PageTitle = (props: ITitleProps) => {
    const { title } = props;
    return (
        <>
            <h1 className={style.pageTitle} dangerouslySetInnerHTML={createMarkup(title)}></h1>
        </>
    )
}

export default PageTitle