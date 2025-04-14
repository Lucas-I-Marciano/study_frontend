import images from "./assets"

function App() {

  return (
    <>
      <div className={`bg-black-100`}>
        <div>
          <img src={images.login_back} className="bg-black absolute -top-35 -z-2" alt="" />
          <div className="bg-black h-full w-full absolute opacity-60 -top-60 -z-1"></div>
        </div>
        <div className="px-5 py-10">
          <img src={images.login_paw} className="py-bottom-5" alt="" />
          <p className="text-white">Comece agora.</p>
          <p className="text-white">Conecte-se já.</p>
        </div>

      </div>
      <div className="form bg-white h-20 w-full"> FORM</div>
      <div className="form bg-white h-20 w-full"> Footer</div>

    </>
  )
}

export default App
