import images from "../assets"
import { Footer } from "../components/Footer"
import { FormResetPassword } from "../components/FormResetPassword"
import { Header } from "../components/Header"


export const ResetPassword = () => {
    return (
        <>
            <Header message="Comece agora. Conecte-se já." login_back={images.login_back} icon={images.login_paw} />
            <FormResetPassword />
            <Footer icon={images.login_paw_footer} textFooter="PETWITTER" />
        </>
    )
}