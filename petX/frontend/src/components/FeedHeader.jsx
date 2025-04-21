import images from "../assets"

export const FeedHeader = () => {
    return (
        <div className="FeedHeader flex border-b border-gray-400 p-2">
            <svg className="absolute top-3 left-3" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33333 16H22.6667C23.4 16 24 15.4 24 14.6667C24 13.9333 23.4 13.3333 22.6667 13.3333H1.33333C0.6 13.3333 0 13.9333 0 14.6667C0 15.4 0.6 16 1.33333 16ZM1.33333 9.33333H22.6667C23.4 9.33333 24 8.73333 24 8C24 7.26667 23.4 6.66667 22.6667 6.66667H1.33333C0.6 6.66667 0 7.26667 0 8C0 8.73333 0.6 9.33333 1.33333 9.33333ZM0 1.33333C0 2.06667 0.6 2.66667 1.33333 2.66667H22.6667C23.4 2.66667 24 2.06667 24 1.33333C24 0.6 23.4 0 22.6667 0H1.33333C0.6 0 0 0.6 0 1.33333Z" fill="#00ACC1" />
            </svg>
            <div className="logo flex gap-2 items-center justify-center w-full">

                <img className="w-7" src={images.login_paw_footer} />
                <p className="text-principal font-bold text-sm font-[Poppins]">PETWITTER</p>
            </div>
        </div>
    )
}