import { IoMdPerson } from "react-icons/io";
import ProfilePicture from "./ProfilePicture";
import { useState, useEffect } from "react";
import axios from "axios";

// const messages = [
//     {sender: "user1", content: "hello world!", timestamp: new Date("2015-03-25T12:00:00Z")},
//     {sender: "user2", content: "whats up man, nothing much on my side", timestamp: new Date("2015-03-25T12:00:00Z")}
// ];

export default function ChatTab() {
    // Damn, using fixed positioning for the tabs was a mistake. TODO Refactor
    // Also TODO refactor messages once backend comes into play
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const updateMessages = async () => {
            try {
                const res = await axios.get("//localhost:3000/test");
                console.log(res);
                setMessages(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        updateMessages();
    }, [])

    return (
        <div className= "left-[304px] fixed top-0 w-screen bg-dark3 h-screen">
            <ProfileBanner user={{username: "user1", profilePicture: <IoMdPerson size="12" color="white" />}} />
            <ChatWindow messages={messages} />
        </div>
    )
}

const ProfileBanner = ({user}) => (
    <div className="w-full h-12 shadow-md flex items-center">
        <ProfilePicture className="h-6 w-6 ml-4" profilePicture={user.profilePicture}/>
        <span className="m-3 item-center text-white font-medium">
            {user.username}
        </span>
    </div>
)

const ChatWindow = ({messages}) => (
    <div className="h-full w-full text-white">
        {messages.map((message, i) => (
            <Message message={message} key={i}/>
        ))}
    </div>
)

const Message = ({message}) => {
    // TODO figure out how profilePicture should be stored and accessed
    const profilePicture = <IoMdPerson size="12" color="white" />;

    // changing message.createdAt from a string to a Date object
    message.createdAt = new Date(message.createdAt);

    return (
        <div className="message-div">
            <ProfilePicture profilePicture={profilePicture} className="mx-3 shadow-none"/>
            <div>
                <div className="flex">
                    <div>
                        {message.sender}
                    </div>
                    <div className="text-gray-400 text-xs flex items-center">
                        <span className="ml-2">
                            {message.createdAt.toLocaleDateString('en-GB')} 
                        </span>
                        <span className="mx-1">
                            {message.createdAt.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </span>
                    </div>
                </div>
                
                <div className="text-left">
                    {message.content}
                </div>
            </div>
            
        </div>
    )    
    
}