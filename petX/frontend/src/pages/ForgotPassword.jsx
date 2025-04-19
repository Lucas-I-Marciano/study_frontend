import images from "../assets"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormForgot } from "../components/FormForgot"

export const ForgotPassword = () => {
    return (
        <>
            <Header message="Comece agora. Conecte-se já." login_back={images.login_back} icon={images.login_paw} />
            <FormForgot />
            <Footer icon={images.login_paw_footer} textFooter="PETWITTER" />
        </>
    )
}