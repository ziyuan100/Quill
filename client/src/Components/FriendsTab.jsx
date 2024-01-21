import { IoMdPerson, IoMdClose } from "react-icons/io";
import ProfilePicture from "./ProfilePicture";

// Once backend comes into play, TODO refactor user schema and component props
// TODO add active chat background colour to DirectMessageDiv (same colour as if it was hovered)

export default function FriendsTab() {
    return (
        <div className="fixed top-0 left-20 w-56 h-screen flex flex-col bg-dark2 text-white shadow-lg items-center">
            <span className="my-2 text-gray-400">Direct Messages</span>
            <DirectMessageDiv username="user1" />
            <DirectMessageDiv username="user2" />
            <DirectMessageDiv username="user3" />
            <DirectMessageDiv username="user4" />
        </div>
    )
}

const DirectMessageDiv = ({profilePicture = <IoMdPerson />, username}) => {
    return (
        <div className="w-52 h-16 hover:bg-dark3 rounded-md flex items-center group cursor-pointer">
            <ProfilePicture profilePicture={profilePicture} />
            <span className="m-4 item-center text-gray-400">
                {username}
            </span>
            <div className="hidden group-hover:block absolute right-6 group/close">
                <IoMdClose size="18"  className="group-hover/close:[color:white] [color:#9ca3af]"/>
            </div>
        </div>
    )
}