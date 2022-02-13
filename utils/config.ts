import axios from "axios";

export const setEnvironmentConfiguration = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE;
}