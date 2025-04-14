import images from "../assets"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormRegister } from "../components/FormRegister"

export const Register = () => {
    return (
        <>
            <Header message="Comece agora. Conecte-se já." login_back={images.login_back} icon={images.login_paw} />
            <FormRegister />
            <Footer icon={images.login_paw_footer} textFooter="PETWITTER" />
        </>
    )
}