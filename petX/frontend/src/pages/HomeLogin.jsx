import { Footer } from "../components/Footer"
import { FormLogin } from "../components/FormLogin"
import { Header } from "../components/Header"

import images from "../assets"

export const HomeLogin = () => {
    return (
        <>
            <Header login_back={images.login_back} icon={images.login_paw} />
            <FormLogin />
            <Footer icon={images.login_paw_footer} textFooter="PETWITTER" />
        </>
    )
}