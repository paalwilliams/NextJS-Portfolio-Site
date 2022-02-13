import axios from "axios";
import React, { useEffect, useState } from 'react';
import PortfolioItem from "../../components/Layout/PortfolioItem/PortfolioItem";
import style from './Portfolio.module.scss'

const Portfolio = () => {

    let [posts, setPosts] = useState<any>();

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/wp-json/wp/v2/portfolio-item?_embed')
            const { data } = response
            setPosts(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, [])


    if (posts) {
        return (
            <main className={style.portfolioContainer}>
                {posts.map((post: any) => {
                    { console.log(post) }
                    let featuredImage = post._embedded["wp:featuredmedia"][0].source_url;
                    return (
                        <>
                            <PortfolioItem key={post.id} url={post.link} excerpt={post.excerpt.rendered} featuredImage={featuredImage} title={post.title.rendered} />
                        </>
                    )

                })}
            </main>

        )
    }
    else {
        return <p>Loading....</p>
    }
};

export default Portfolio;
