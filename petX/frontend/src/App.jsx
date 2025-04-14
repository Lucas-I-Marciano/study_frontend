import images from "./assets"
import { Header } from "./components/Header"
import { FormLogin } from "./components/FormLogin"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header login_back={images.login_back} icon={images.login_paw} />
      <FormLogin />
      <Footer icon={images.login_paw_footer} textFooter="PETWITTER" />

    </>
  )
}

export default App
