import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Layout/HeaderComponents/Header/Header"
import SiteState from "../context/SiteContext/SiteState"

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <SiteState>
                <Header />
                <Component {...pageProps} />
            </SiteState>
        </>
    )
}

export default MyApp
