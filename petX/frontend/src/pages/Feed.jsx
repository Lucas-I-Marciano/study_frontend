import { FeedHeader } from "../components/FeedHeader"
import { FeedPost } from "../components/FeedPost"



export const Feed = () => {
    return (
        <>
            <FeedHeader />
            {Array.from(Array(10).keys()).map((index) => {
                return <FeedPost
                    profilePicture={"https://s3-alpha-sig.figma.com/img/cfd2/4d9c/c57076e4c9d78212526ea5b263e677c4?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n23FhXqWTs2GUwvIgUnWZ-WegsbuYCGWB-~c9ihGBuV9vKAlj-buAw2r8VNzf4-IyjebmMFcmd~qXCrlfVX8D5GpTZ3rkacJ6cCnHJdhpUP1h4M5Eg~E72VBVDGxUhZ6VHl6uJzFsVUPwqFv7EKDKFvXBF6MV3YwRyhGmigIXgRECYGt5oW7V~YlqPHaVKTix1WeMiRmCLH45epk9nt~f6vpfE4g5JKsPkm7IuTunX6hDpbOAip-7GHhJzAF9I7oe7mhAuBzEzmCSRW2hsUh7J2YPxJs1afJxgeslb4gfdOVhc4VHlJC3FJeXc5i1klUaRyAMaH0fDKJZFlLF2S86A__"}
                    nickname="Niko Vira-lata"
                    username="@doguinhoniko_20"
                    postTimeAgo={`${index * 10}s`}
                    publication="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veritatis excepturi doloremque temporibus necessitatibus debitis eveniet libero magni reiciendis facilis delectus culpa velit sit odit cumque voluptate, aliquid eligendi. Quos!"
                />
            })}
            <button className="bg-cyan-400 rounded-full text-white text-6xl w-14 h-14 text-center fixed right-4 bottom-4">+</button>
        </>
    )
}