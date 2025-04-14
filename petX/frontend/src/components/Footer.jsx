export const Footer = ({ icon, textFooter }) => {
    return (
        <div className="bg-white flex w-full items-center gap-5 justify-center pb-8">
            <img src={icon} alt="" />
            <span className="text-principal font-bold text-xl font-[Poppins]">{textFooter}</span>
        </div>
    )
}