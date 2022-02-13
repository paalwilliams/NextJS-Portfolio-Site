import React from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Page from "../../../components/Page/Page";

const PortfolioItem = (props: any) => {
    const { data } = props;
    console.log(data)

    return <Page title={data.title.rendered} content={data.content.rendered} />
};

const getSinglePost = async (id: string) => {
    try {
        const response = await axios.get(`/wp-json/wp/v2/portfolio-item?slug=${id}`);
        if (!response || !response.data[0]) {
            return null;
        }
        return response.data[0]

    } catch (error) {
        console.log(error)
    }
}

export const getServerSideProps = async (context: any) => {
    // Figure out a better way to handle this 
    let { res, params } = context;
    let data = await getSinglePost(params.id)
    if (!data) {
        res.statusCode = 302
        res.setHeader('Location', `/`)
    }

    return {
        props: { data }
    }
}
export default PortfolioItem;
