import images from "./assets"
import { Header } from "./components/Header"
import { FormLogin } from "./components/FormLogin"

function App() {
  return (
    <>
      <Header login_back={images.login_back} icon={images.login_paw} />
      <FormLogin />
      <div className="bg-white flex w-full items-center gap-5 justify-center pb-8">
        <img src={images.login_paw_footer} alt="" />
        <span className="text-principal font-bold text-xl font-[Poppins]">PETWITTER</span>
      </div>

    </>
  )
}

export default App
