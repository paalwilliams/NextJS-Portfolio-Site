import React from 'react'
import { createMarkup } from "../../../../utils/createMarkup"
import style from './PageContent.module.scss'

interface IPageContentProps {
    content: string;
}
const PageContent = (props: IPageContentProps) => {
    const { content } = props;

    return (
        <div className={style.pageContent}>
            <div dangerouslySetInnerHTML={createMarkup(content)}></div>
        </div>
    )
}

export default PageContent