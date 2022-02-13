import React from 'react';
import { useRouter } from 'next/router'
import { create } from "domain";
import { createMarkup } from "../../utils/createMarkup";

const Page = (props: any) => {
    // console.log(props)

    // const { content, title } = props.pageData
    // const router = useRouter()
    // const { page } = router.query

    return (
        <>
            <h1>Hello Page</h1>
            {/* <h1 dangerouslySetInnerHTML={createMarkup(title.rendered)}></h1>
            <div dangerouslySetInnerHTML={createMarkup(content.rendered)}></div > */}
        </>);
};

// const getPage = async (slug: string) => {
//     let response = await fetch(`http://localhost:8000/wp-json/wp/v2/pages?slug=${slug}`)
//     let data = await response.json()
//     return data;
// }
// export const getServerSideProps = async (context: any) => {
//     let slug = context.query.page;
//     let page = await getPage(slug)

//     return {
//         props: { pageData: page[0] }, // will be passed to the page component as props
//     }

// }
export default Page;
