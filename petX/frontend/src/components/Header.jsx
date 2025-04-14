export const Header = ({ login_back, icon }) => {
    return (
        <div className={`bg-black-100`}>
            <div>
                <img src={login_back} className="bg-black absolute -top-35 -z-2" alt="" />
                <div className="bg-black h-full w-full absolute opacity-60 -top-60 -z-1"></div>
            </div>
            <div className="px-5 pt-10 pb-5 font-[Open_Sans] text-4xl font-bold">
                <img src={icon} className="py-bottom-5" alt="" />
                <p className="text-white pt-10">Comece agora.</p>
                <p className="text-white">Conecte-se já.</p>
            </div>

        </div>
    )
}