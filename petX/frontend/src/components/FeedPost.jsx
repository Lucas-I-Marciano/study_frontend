export const FeedPost = ({ profilePicture, nickname, username, postTimeAgo, publication }) => {
    return (
        <>
            <div className="flex gap-2 p-4 border-b border-gray-200">
                <img className="h-12 rounded-full aspect-square object-cover" src={profilePicture} />
                <div className="content font-[Open_Sans] w-full">
                    <div className="content header flex gap-1 items-center">
                        <p className="text-sm text-gray-600 font-bold">{nickname}</p>
                        <span className="text-xs text-gray-600">{username}</span>
                        <span className="text-xs text-gray-600">•</span>
                        <span className="text-xs text-gray-600">{postTimeAgo}</span>
                    </div>
                    <p className="-tracking-[.26px]">{publication}</p>
                </div>
            </div>
        </>
    )
}