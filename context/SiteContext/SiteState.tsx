import React, { ReactElement, useEffect, useReducer, useState } from 'react'
import SiteContext from './SiteContext';
import axios from "axios"
import { setEnvironmentConfiguration } from "../../utils/config";

interface IPostStateProps {
    children: ReactElement[] | ReactElement;

}

const PostState = (props: any) => {

    const initialState = {
    }
    const [siteData, setSiteData] = useState<any>(initialState);
    const [menu, setMenu] = useState<any>();

    setEnvironmentConfiguration();

    const loadSiteData = async () => {
        try {
            const { data } = await axios.get('/wp-json/');
            setSiteData(data)
        } catch (e: any) {
            console.log(e)
        }
    }

    const getMenu = async () => {
        try {
            const { data } = await axios.get('/wp-json/wp/v2/menu');
            setMenu(data)
        } catch (e: any) {
            console.log(e)
        }

    }


    useEffect(() => {
        loadSiteData();
        getMenu();
    }, [])


    // Get All Posts
    return (
        <SiteContext.Provider
            value={{
                siteData,
                menu
            }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </SiteContext.Provider>
    )
}
export default PostState
