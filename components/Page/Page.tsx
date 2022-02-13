import React from 'react'
import PageContent from "./PageComponents/PageContent/PageContent"
import PageTitle from "./PageComponents/PageTitle/PageTitle"
import style from './Page.module.scss'

interface IPageProps {
    title: string;
    content: string;
}
const Page = (props: IPageProps) => {
    const { title, content } = props
    return (
        <div className={style.page}>
            <PageTitle title={title} />
            <PageContent content={content} />
        </div>
    )
}

export default Page