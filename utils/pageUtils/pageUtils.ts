import axios from "axios"

export const getFrontPage = async (): Promise<any> => {
    try {
        const { data } = await axios.get('/wp-json/wp/v2/frontpage')
        return data;
    } catch (error) {
        console.log(error)
    }
}